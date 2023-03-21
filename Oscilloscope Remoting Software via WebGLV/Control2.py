import asyncio
import websockets, time

import ds1100z as rigol
import threading


import os

print(os.getpid())
IPG  = open("/home/pi/ip.txt", "r").read()
SKG  = open("Socket.txt", "r").read()
print(IPG)
print(int(SKG))

class Control:
    def __init__(self):

        self.Open()
        self.Cha = 1
        self.oscilloscope_VDiv = ["1mV", "2mV", "5mV", "10mV", "20mV", '50mV', "100mV", "200mV", "500mV", "1V", "2v",
                                  "5v", "10V"]
        self.oscilloscope_Cu = ["DC", "AC", "GND"]
        self.oscilloscope_DisM = ["Y-T", "FFT", "X-Y"]
        self.oscilloscope_VDiv_value = [0.001, 0.002, 0.005, 0.01, 0.02, 0.05, 0.1, 0.2, 0.5, 1, 2, 5, 10]
        self.oscilloscope_TDiv = ["5nS", "10nS", "20nS", "50nS", "100nS", '200nS', "500nS", "1uS", "2uS", "5uS", "10uS",
                                  "20uS", "50uS", "100uS", '200uS', "500uS", "1mS", "2mS", "5mS", "10mS", "20mS",
                                  "50mS", "100mS", '200mS', "500mS", "1S", "2S", "5S", "10S", "20S", "50S"]
        self.oscilloscope_TDiv_value = [5e-9, 1e-8, 2e-8, 5e-8, 1e-7, 2e-7, 5e-7, 1e-6, 2e-6, 5e-6, 1e-5, 2e-5, 5e-5,
                                        1e-4, 2e-4, 5e-4, 1e-3, 2e-3, 5e-3, 1e-2, 2e-2, 5e-2, 1e-1, 2e-1, 5e-1, 1, 2, 5,
                                        10, 20, 50]
        self.oscilloscope_trig_mode = ['EDGE', 'PULS', 'RUNT', 'WIND', 'NEDG', 'SLOP',
                            'VID', 'PATT', 'DEL', 'TIM', 'DUR', 'SHOL', 'RS232',
                            'IIC', 'SPI']
        self.oscilloscope_TGM = ["Rising", "Falling"]
        self.oscilloscope_CH = ["CH 1", "CH 2", "CH 3", "CH 4"]
        self.oscilloscope_trig_src_values = ['D0', 'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8',
                           'D9', 'D10', 'D11', 'D12', 'D13', 'D14', 'D15',
                           'CHAN1', 'CHAN2', 'CHAN3', 'CHAN4', 'AC']

    def single(self):
        self.scope.single()
    def auto(self):
        self.scope.auto()
    def run(self):
        self.scope.run()
    def chChange(self, CH):
        self.Cha = CH
    def vDivCon(self, ch, V):
        #v = self.oscilloscope_VDiv_value[V]
        #print(v)
        self.scope.set_ch_scale(ch, float(V))
    def tDivCon(self, T):
        #print(T)
        #t = self.oscilloscope_TDiv_value[T]
        self.scope.set_time_scale(float(T)/1000)
    def chanOff(self,ch, V):
        #v = self.oscilloscope_VDiv_value[V]
        self.scope.set_ch_offset(ch, V)
    def chanTMode(self, Mode):
        #mode =self.oscilloscope_trig_mode[Mode]
        self.scope.set_trig_mode(Mode)
    def chanTEdge(self, Edge):
        #edge =self.oscilloscope_TGM[Edge]
        self.scope.set_trig_edge(Edge)
    def chanTLevel(self, LV):
        self.scope.set_trig_level(LV)
    def connectionCheck(self):
        return self.scope
    def Open(self):
        self.scope = rigol.open_first_device(IPG)

H = Control()
@asyncio.coroutine
def control(websocket, path):
    if H.connectionCheck():
        message = yield from websocket.recv()
        print(message)
        msg = message.replace("\r\n","")
        StrLen = len(msg)
        if "RUN" in msg:
            match int(msg[10:StrLen]):
                case 0:
                    H.single()
                case 1:
                    H.auto()
                case 2:
                    H.run()
                case _:
                    print("Error invalid mode!")
        elif "CHAN" in msg:
            match int(msg[8:StrLen]):
                case 1:
                    H.chChange(1)
                case 2:
                    H.chChange(2)
                case 3:
                    H.chChange(3)
                case 4:
                    H.chChange(4)
                case _:
                    print("Error invalid Channel!")
        elif "VDIV" in msg:
            if "CH 1" in msg:
                H.vDivCon(1,msg[10:StrLen])
            elif "CH 2" in msg:
                H.vDivCon(2,msg[10:StrLen])
            elif "CH 3" in msg:
                H.vDivCon(3,msg[10:StrLen])
            elif "CH 4" in msg:
                H.vDivCon(4,msg[10:StrLen])
        elif "TIME" in msg:
            print(msg[9:StrLen])
            H.tDivCon(msg[9:StrLen])
        elif "VOLTAGE OFFSET" in msg:
            if "CH 1" in msg:
                H.chanOff(1,msg[16:StrLen])
            elif "CH 2" in msg:
                H.chanOff(2,msg[16:StrLen])
            elif "CH 3" in msg:
                H.chanOff(3,msg[16:StrLen])
            elif "CH 4" in msg:
                H.chanOff(4,msg[16:StrLen])
        elif "TRIGGER MODE" in msg:
            H.chanTMode(msg[13:StrLen])
        elif "EDGE" in msg:
            H.chanTEdge(msg[14:StrLen])
        elif "VALUE" in msg:
            H.chanTLevel(msg[15:StrLen])
        elif "MODE" in msg:
            mode = msg[3:StrLen]
            if mode == "RUN":
                H.run()
            elif mode == "AUTO":
                H.auto()
            elif mode == "SINGLE":
                H.single()
            
    else:
        H.Open()
        time.sleep(5000)

    
    

start_server2 = websockets.serve(control, "192.168.1.8", int(SKG)+1)


    
#t1 = threading.Thread(target=Thread1)
#t2 = threading.Thread(target=Thread2)
#t1.start()
#t2.start()
asyncio.get_event_loop().run_until_complete(start_server2)
asyncio.get_event_loop().run_forever()
