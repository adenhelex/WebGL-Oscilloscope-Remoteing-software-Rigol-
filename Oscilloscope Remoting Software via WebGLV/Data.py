import asyncio
import websockets, time
import numpy as numpy
import ds1100z as rigol
import threading
from array import array
import os

print(os.getpid())
IPG  = open("ip.txt", "r").read()
SKG  = open("Socket.txt", "r").read()
print(IPG)
print(int(SKG)+1)
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
    def vDivCon(self, V):
        #v = self.oscilloscope_VDiv_value[V]
        #print(v)
        self.scope.set_ch_scale(self.Cha, V)
    def tDivCon(self, T):
        print(T)
        t = self.oscilloscope_TDiv_value[T]
        self.scope.set_time_scale(t)
    def chanOff(self, V):
        v = self.oscilloscope_VDiv_value[V]
        self.scope.set_ch_offset(self.Cha, v*self.scope.get_ch_scale(self.Cha))
    def chanTMode(self, Mode):
        mode =self.oscilloscope_trig_mode[Mode]
        self.scope.set_trig_mode(mode)
    def chanTEdge(self, Edge):
        edge =self.oscilloscope_TGM[Edge]
        self.scope.set_trig_mode(edge)
    def chanTLevel(self, LV):
        self.scope.set_trig_mode(LV)
    def connectionCheck(self):
        return self.scope
    def Open(self):
        self.scope = rigol.open_first_device(IPG)


H = Control()
@asyncio.coroutine

def data(websocket, path):
    if H.connectionCheck():
        message2 = yield from websocket.recv()
        print(message2)
        msg2 = message2.replace("\r\n","")
        if "?" in msg2:
            allList = []
            

            y1= H.scope.get_waveform(1)
            
            Samp1 = numpy.array(y1[1])
            SampL1 = []
            for i in Samp1:
                SampL1.append(str(i))
                
            amp1 = ",".join(SampL1)
            y2= H.scope.get_waveform(2)
            #amp2 = y2.tolist()
            
            Samp2 = numpy.array(y2[1])
            SampL2 = []
            for i in Samp2:
                SampL2.append(str(i))
                
            amp2 = ",".join(SampL2)
            y3= H.scope.get_waveform(3)
            #amp3 = y3.tolist()
            Samp3 = numpy.array(y3[1])
            SampL3 = []
            for i in Samp3:
                SampL3.append(str(i))
                
            amp3 = ",".join(SampL3)
            y4= H.scope.get_waveform(4)
            
            Samp4 = numpy.array(y4[1])
            SampL4 = []
            for i in Samp4:
                SampL4.append(str(i))
                
            amp4 = ",".join(SampL4)
            allList.append(amp1)
            allList.append(amp2)
            allList.append(amp3)
            allList.append(amp4)
            #print(Samp2)
            #print(Samp3)
            #print(Samp4)
            data_string = "|".join(allList)
            print(data_string)
            yield from websocket.send(data_string)
            print("Sent")
            #yield from websocket.send("(2)"+str(Samp2))
            #yield from websocket.send("(3)"+str(Samp3))
            #yield from websocket.send("(4)"+str(Samp4))
            #print(msgAmp)
    else:
        H.Open()
        time.sleep(5000)
    
start_server = websockets.serve(data, '192.168.1.8', int(SKG))



    
#t1 = threading.Thread(target=Thread1)
#t2 = threading.Thread(target=Thread2)
#t1.start()
#t2.start()
asyncio.get_event_loop().run_until_complete(start_server)

asyncio.get_event_loop().run_forever()
