import nmap
import asyncio
from threading import Thread
import websockets
import subprocess
import ds1100z as rigol
i = 49156
j= 0
hosts = []
class Control:
    def __init__(self):

        #self.Open()
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
    def Open(self,IP):
        self.scope = rigol.open_first_device(IP)

H = Control()
def ThreadDevice():
    
    commands = [['python3', 'Control2.py'], ['python3', 'Data.py']]
    procs = [ subprocess.Popen(l) for l in commands ]
    for p in procs:
        p.wait()
@asyncio.coroutine
def control(websocket, path):
    global i
    j= 0
    threads = []
    message = yield from websocket.recv()
    print(message)
    msg = message.replace("\r\n","")
    StrLen = len(msg)
    if "SCAN" in msg:
        global hosts
        hosts = []
        scanner = nmap.PortScanner()
        scanner.scan("192.168.1.0/24", arguments='-sn')
        for host in scanner.all_hosts():
            addresses = scanner[host]['addresses']
    
            if 'mac' not in addresses:
                continue
    
            oui = addresses['mac'][:8]
            if '00:19:AF' in oui:
                print("Match found!")
                hosts.append(addresses['ipv4'])
        print(hosts)
        mess = "DV:"+str(", ".join(hosts))
        print(mess)
        yield from websocket.send(mess)
    if "CONNECT" in msg:
        File = open("ip.txt", "r+")
        #SocketFile = open("Socket.txt", "w")
        #SocketFile.write(str(i))
        #i += 2
        #SocketFile.close()
        File.truncate(0)
        print(msg[8:StrLen])
        File.write(msg[8:StrLen])
        File.close()
        thread= Thread(target = ThreadDevice)
        thread.start()
        threads.append(thread)
        

        #subprocess.run('python "Control2.py"')
        #subprocess.run('python "Data.py"')
        print("RUN COMPLETED!")
    if "SOCKET?" in msg:
        yield from websocket.send("SK:"+str(i))
        SocketFile = open("Socket.txt", "w")        
        SocketFile.write(str(i))
        SocketFile.close()
        i += 2
    if "SETALL" in msg:
        msg2 = msg.replace("SETALL:,","")
        msgHost = msg2.split(",")
        for i in hosts:
            H.Open(i)
            H.vDivCon(1,msgHost[0])
            H.vDivCon(2,msgHost[1])
            H.vDivCon(3,msgHost[2])
            H.vDivCon(4,msgHost[3])
            H.tDivCon(msgHost[4])


start_server3 = websockets.serve(control, '192.168.1.8', 49155)
asyncio.get_event_loop().run_until_complete(start_server3)
asyncio.get_event_loop().run_forever()
