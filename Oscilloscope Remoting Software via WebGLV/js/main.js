var ui = {
    // Channel 1 UI
    inputType: {
        title: "Source",
        value: 0,
        values: [
            ["Off", 0],
            ["Audio (5 V peak amplitude)", 1],
            ["Websocket Stream", 2],
            ["Sine Wave (amplitude 5 V)", 10],
            ["Square Wave (amplitude 5 V)", 11]
        ]
    },
    freeze: {
        title: "Freeze",
        value: false
    },
    freq: {
        title: "Input Wave Frequency",
        value: 250,
        range: [1, 1000],
        resolution: 1,
        units: "Hz"
    },
    gain: {
        title: "Vernier",
        value: 1,
        range: [0, 5],
        resolution: 0.1
    },
    vertOffset: {
        title: "Vertical Offset",
        value: 0,
        range: [-1000, 1000],
        resolution: 1,
        input: "hidden"
    },
        
    // Channel 2 UI
    inputType2: {
        title: "Source",
        value: 0,
        parent: "#ui-container3",
        values: [
            ["Off", 0],
            ["Audio (5 V peak amplitude)", 1],
            ["Websocket Stream", 2],
            ["Sine Wave (amplitude 5 V)", 10],
            ["Square Wave (amplitude 5 V)", 11]
        ]
    },
    freeze2: {
        title: "Freeze",
        parent: "#ui-container3",
        value: false
    },
    freq2: {
        title: "Input Wave Frequency",
        value: 250,
        range: [1, 1000],
        resolution: 1,
        parent: "#ui-container3",
        units: "Hz"
    },
    gain2: {
        title: "Vernier",
        value: 1,
        range: [0, 5],
        resolution: 0.1,
        parent: "#ui-container3"
    },
    vertOffset2: {
        title: "Vertical Offset",
        value: 0,
        range: [-1000, 1000],
        resolution: 1,
        parent: '#ui-container3',
        input: "hidden"
    },
    
     // Channel 3 UI
    inputType3: {
        title: "Source",
        value: 0,
        parent: "#ui-container5",
        values: [
            ["Off", 0],
            ["Audio (5 V peak amplitude)", 1],
            ["Websocket Stream", 2],
            ["Sine Wave (amplitude 5 V)", 10],
            ["Square Wave (amplitude 5 V)", 11]
        ]
    },
    freeze3: {
        title: "Freeze",
        parent: "#ui-container5",
        value: false
    },
    freq3: {
        title: "Input Wave Frequency",
        value: 250,
        range: [1, 1000],
        resolution: 1,
        parent: "#ui-container5",
        units: "Hz"
    },
    gain3: {
        title: "Vernier",
        value: 1,
        range: [0, 5],
        resolution: 0.1,
        parent: "#ui-container5"
    },
    vertOffset3: {
        title: "Vertical Offset",
        value: 0,
        range: [-1000, 1000],
        resolution: 1,
        parent: '#ui-container5',
        input: "hidden"
    }, 
    
    // Channel 4 UI
    inputType4: {
        title: "Source",
        value: 0,
        parent: "#ui-container6",
        values: [
            ["Off", 0],
            ["Audio (5 V peak amplitude)", 1],
            ["Websocket Stream", 2],
            ["Sine Wave (amplitude 5 V)", 10],
            ["Square Wave (amplitude 5 V)", 11]
        ]
    },
    freeze4: {
        title: "Freeze",
        parent: "#ui-container6",
        value: false
    },
    freq4: {
        title: "Input Wave Frequency",
        value: 250,
        range: [1, 1000],
        resolution: 1,
        parent: "#ui-container6",
        units: "Hz"
    },
    gain4: {
        title: "Vernier",
        value: 1,
        range: [0, 5],
        resolution: 0.1,
        parent: "#ui-container6"
    },
    vertOffset4: {
        title: "Vertical Offset",
        value: 0,
        range: [-1000, 1000],
        resolution: 1,
        parent: '#ui-container6',
        input: "hidden"
    },
    
    // Horizontal Grid UI
    volts1: {
        title: "CH1 Volts/Div",
        value: 1,
        parent: '#ui-container2',
        values: [["500 µV", 0.0005], ["1 mV", 0.001], ["2 mV", 0.002], ["5 mV", 0.005], ["10 mV", 0.01], ["20 mV", 0.02], ["50 mV", 0.05], ["100 mV", 0.1], ["200 mV", 0.2], ["500 mV", 0.5], ["1 v", 1.0], ["2 V", 2.0], ["5 V", 5.0], ["10 V", 10.0]]
    },
    volts2: {
        title: "CH2 Volts/Div",
        value: 1,
        parent: '#ui-container2',
        values: [["500 µV", 0.0005], ["1 mV", 0.001], ["2 mV", 0.002], ["5 mV", 0.005], ["10 mV", 0.01], ["20 mV", 0.02], ["50 mV", 0.05], ["100 mV", 0.1], ["200 mV", 0.2], ["500 mV", 0.5], ["1 v", 1.0], ["2 V", 2.0], ["5 V", 5.0], ["10 V", 10.0]]
    },
    volts3: {
        title: "CH3 Volts/Div",
        value: 1,
        parent: '#ui-container2',
        values: [["500 µV", 0.0005], ["1 mV", 0.001], ["2 mV", 0.002], ["5 mV", 0.005], ["10 mV", 0.01], ["20 mV", 0.02], ["50 mV", 0.05], ["100 mV", 0.1], ["200 mV", 0.2], ["500 mV", 0.5], ["1 v", 1.0], ["2 V", 2.0], ["5 V", 5.0], ["10 V", 10.0]]
    },
    volts4: {
        title: "CH4 Volts/Div",
        value: 1,
        parent: '#ui-container2',
        values: [["500 µV", 0.0005], ["1 mV", 0.001], ["2 mV", 0.002], ["5 mV", 0.005], ["10 mV", 0.01], ["20 mV", 0.02], ["50 mV", 0.05], ["100 mV", 0.1], ["200 mV", 0.2], ["500 mV", 0.5], ["1 v", 1.0], ["2 V", 2.0], ["5 V", 5.0], ["10 V", 10.0]]
    },
    timeScale: {
        title: "Time/Div",
        value: 1,
        parent: '#ui-container2',
        values: [["5 ns", 0.000005], ["10 ns", 0.00001], ["20 ns", 0.00002], ["50 ns", 0.00005], ["100 ns", 0.0001], ["200 ns", 0.0002], ["500 ns", 0.0005], ["1 µs", 0.001], ["2 µs", 0.002], ["5 µs", 0.005], ["10 µs", 0.01], ["20 µs", 0.02], ["50 µs", 0.05], ["100 µs", 0.1], ["200 µs", 0.2], ["500 µs", 0.5], ["1 ms", 1.0], ["2 ms", 2.0], ["5 ms", 5.0], ["10 ms", 10.0], ["20 ms", 20.0], ["50 ms", 50.0], ["100 ms", 100.0], ["200 ms", 200.0], ["500 ms", 500.0], ["1 s", 1000.0], ["2 s", 2000.0], ["5 s", 5000.0], ["10 s", 10000.0], ["20 s", 20000.0], ["50 s", 50000.0]]
    },
    horizOffset: {
        title: "Horizontal Offset",
        value: 0,
        range: [-1000, 1000],
        resolution: 1,
        color: "#999",
        parent: '#ui-container2',
        input: "hidden"
    },
    // Collection UI
    collectionSource: {
        title: "Collection",
        value: 0,
        values: [["None", 0]],
        parent: '#ui-container4'
    },
    collectionShow: {
        title: 'Show',
        parent: "#ui-container4",
        color: '#ffc720',
        value: false
    },
    collectionGain: {
        title: "Gain",
        value: 1,
        range: [0, 5],
        resolution: 0.1,
        color: '#ffc720',
        parent: '#ui-container4'
    },
    collectionVertOffset: {
        title: "Vertical Offset",
        value: 0,
        range: [-1000, 1000],
        resolution: 1,
        input: "hidden",
        color: '#ffc720',
        parent: '#ui-container4'
    }
};

var CwsUri = "ws://192.168.1.8:";
var wsUri = "ws://192.168.1.8:";
var ipWS = "ws://192.168.1.8:49155";

var CwsSock = "";
var wsSock = "";

var datWS = "";
var conWS = "";

var store = "";
var ui_data = [];
var stream_data =  [];
var stream_dataS2 = [];
var stream_dataS3 = [];
var stream_dataS4 = [];
var collection_data = [];

const generator_interface = [
    'timeScale', 'horizOffset',
    'inputType', 'inputType2','inputType3', 'inputType4',
    'freq', 'freq2','freq3', 'freq4',
    'gain', 'gain2','gain3', 'gain4',
    'vertOffset', 'vertOffset2','vertOffset3', 'vertOffset4'
];

const WEBGL_NUM_POINTS_MIN = 800;
const AUDIO_SAMPLE_RATE = 48000;
const UI_INPUT_TYPE_GENERATOR_INDEX = 10;
const AuxLines = { cross_1: 0, cross_2: 1, marker1_1: 2, marker1_2: 3, marker2_1: 4, marker2_2: 5, length: 6 }; 

/*
 *    Canvas and WebGL initialization
 */
// 1. Create canvas element
parent = document.getElementById('canvas');
var canvas = document.createElement("canvas"); // for gridlines
var devicePixelRatio = window.devicePixelRatio || 1;
canvas.style.width = parent.clientWidth + 'px';
canvas.style.height = parent.clientHeight + 'px';
canvas.width = parent.clientWidth * devicePixelRatio;
canvas.height = parent.clientHeight * devicePixelRatio;
parent.appendChild(canvas);

// 2. Helper function to convert pixel to WebGL coordinates (-1, 1)
var mapRange = function(from, to, s) {
    return to[0] + (s - from[0]) * (to[1] - to[0]) / (from[1] - from[0]);
};

mapRange.ToWebGL = {
    x: function(s) {return mapRange([0, canvas.width], [-1, 1], s);},
    y: function(s) {return mapRange([0, canvas.height], [-1, 1], s);}
};

// 3. WebGL Colors
var colors = {
    white: new WebglPlotBundle.ColorRGBA(1, 1, 1, 1),
    grey80: new WebglPlotBundle.ColorRGBA(0.8, 0.8, 0.8, 1),
    grey60: new WebglPlotBundle.ColorRGBA(0.6, 0.6, 0.6, 1),
    grey40: new WebglPlotBundle.ColorRGBA(0.4, 0.4, 0.4, 1),
    grey30: new WebglPlotBundle.ColorRGBA(0.3, 0.3, 0.3, 1),
    grey20: new WebglPlotBundle.ColorRGBA(0.2, 0.2, 0.2, 1),
    grey10: new WebglPlotBundle.ColorRGBA(0.1, 0.1, 0.1, 1),
    bg: new WebglPlotBundle.ColorRGBA(33/255, 37/255, 41/255, 1),
    black: new WebglPlotBundle.ColorRGBA(0, 0, 0, 1),
    blue: new WebglPlotBundle.ColorRGBA(0, 0.85, 1, 1),
    teal: new WebglPlotBundle.ColorRGBA(32/255, 201/255, 151/255, 1),
    pink: new WebglPlotBundle.ColorRGBA(214/255, 51/255, 132/255, 1),
    random: function() {
        var r=0,g=0,b=0;
        while(r+g+b < 1.2) {
            r = Math.random();
            g = Math.random();
            b = Math.random();
        }
        return new WebglPlotBundle.ColorRGBA(r, g, b, 1)
    },
    fromHex: function(h) {
        var r = 0, g = 0, b = 0;
        // 3 digits
        if (h.length == 4) {
            r = "0x" + h[1] + h[1];
            g = "0x" + h[2] + h[2];
            b = "0x" + h[3] + h[3];
        // 6 digits
        } else if (h.length == 7) {
            r = "0x" + h[1] + h[2];
            g = "0x" + h[3] + h[4];
            b = "0x" + h[5] + h[6];
        }
        return new WebglPlotBundle.ColorRGBA((+r)/255, (+g)/255, (+b)/255, 1);
    }
};

// 4. Global variables
const wglp = new WebglPlotBundle.WebglPlot(canvas);
const midPoint = {x: canvas.width/2, y: canvas.height/2};
wglp.custom_update = function() {
    this.clear();
    this.drawLines(this.linesAux);
    this.drawLines(this.linesData);
    this.drawSurfaces(this.surfaces);
}
wglp.custom_update();

// 5. Add line helper
function addLine(coords, color=colors.grey30) {
    var line = new WebglPlotBundle.WebglLine(color, 2);
    line.xy = new Float32Array(coords);
    wglp.addAuxLine(line);
}

addLine.fromCanvas = function (from, to, color) {
    return addLine([
        mapRange.ToWebGL.x(from[0]),
        mapRange.ToWebGL.y(from[1]),
        mapRange.ToWebGL.x(to[0]),
        mapRange.ToWebGL.y(to[1])
    ], color);
}

// 6. Grid creation
function createGrid(){

    gridLineX = midPoint.x - 100;
    while (gridLineX >= 0){
      addLine.fromCanvas([gridLineX, 0], [gridLineX, canvas.height]);
      gridLineX -= 100;
    }
    gridLineX = midPoint.x + 100;
    while (gridLineX <= canvas.width) {
        addLine.fromCanvas([gridLineX, 0], [gridLineX, canvas.height]);
        gridLineX += 100;
    }
    gridLineY = midPoint.y - 100;
    while (gridLineY >= 0) {
        addLine.fromCanvas([0, gridLineY], [canvas.width, gridLineY]);
        gridLineY -= 100;
    }
    gridLineY = midPoint.y + 100;
    while (gridLineY <= canvas.height) {
        addLine.fromCanvas([0, gridLineY], [canvas.width, gridLineY]);
        gridLineY += 100;
    }
    
    dashesX = midPoint.x - 20;
    while (dashesX >= 0) {
        addLine.fromCanvas([dashesX, midPoint.y - 5], [dashesX, midPoint.y + 5]);
        dashesX -= 20;
    }
    while (dashesX <= canvas.width) {
        addLine.fromCanvas([dashesX, midPoint.y - 5], [dashesX, midPoint.y + 5]);
        dashesX += 20;
    }
    
    dashesY = midPoint.y - 20;
    while (dashesY >= 0) {
        addLine.fromCanvas([midPoint.x - 5, dashesY], [midPoint.x + 5, dashesY]);
        dashesY -= 20;
    }
    dashesY = midPoint.y + 20;
    while (dashesY <= canvas.height) {
        addLine.fromCanvas([midPoint.x - 5, dashesY], [midPoint.x + 5, dashesY]);
        dashesY += 20;
    }

    addLine([0, 1, 0, -1], colors.grey60);
    addLine([-1, 0., 1, 0], colors.grey60);
}


// Create Auxlines 
for (var i=0; i<AuxLines.length; i++) {
    wglp.addAuxLine(new WebglPlotBundle.WebglLine(colors.white, 2));
}
createGrid();


// 7.1 Begin Audio section ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var AudioContext = (window.AudioContext || window.webkitAudioContext || window.mozAudioContext || window.oAudioContext || window.msAudioContext);

if (AudioContext){
  var audioContext = new AudioContext({latencyHint: 'interactive', sampleRate: AUDIO_SAMPLE_RATE});
  var gainNode = audioContext.createGain();
  var analyser = audioContext.createAnalyser();
  gainNode.gain.value = 3;
  analyser.minDecibels = -90;
  analyser.maxDecibels = 0;
  analyser.smoothingTimeConstant = .1;
  try {
    analyser.fftSize = 4096;
  } catch(e) {
    analyser.fftSize = 2048;
  }
  gainNode.connect(analyser);
  // frequencyBinCount is readonly and set to fftSize/2;
  // Set Buffer to fftSize
  // https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode/getByteTimeDomainData
  var timeDomain = new Uint8Array(analyser.fftSize);
  var sampleRate = audioContext.sampleRate;
  var numSamples = timeDomain.length;
  $('#sampling_rate').text(sampleRate+' Hz (60 fps)');
} else {
  var analyser = {};
  analyser.frequencyBinCount = 512;
}

// unit seconds
var fullSampledTime = function() {
    return Math.ceil(canvas.width/100)/1000;
}

// unit samples
var fullAudioSamples = function() {
    return Math.ceil(fullSampledTime()*sampleRate);
}

// unit samples
var fullStreamSamples = function() {
    return Math.ceil(fullSampledTime()*96000);
}

var animateId;
var generator_refresh = false;
var streaming = [false, false];
streaming.All = function() {
    return streaming.every(function (b) {return b;});
};

streaming.None = function() {
    return streaming.every(function (b) {return !b;});
};

streaming.Some = function() {
    return streaming.some(function (b) {return b;});
};

streaming.Active = function(channel) {
    if (channel >= streaming.length) return false;
    return (streaming[channel] == true && ui['freeze' + (channel>0?channel+1:'')].value == false);
};

streaming.getInputTypes = function() {
    const list = ['inputType', 'inputType2','inputType3', 'inputType4'];
    return list.map(l => ui[l].value);
}

streaming.SomeActive = function() {
    for (var i=0; i<streaming.length; i++) {
        if (streaming.Active(i)) return true;
    }
    return false;
}

streaming.Audio = function() {
    return streaming.getInputTypes().some((t) => t == 1);
}

streaming.Stream = function() {
    return streaming.getInputTypes().some((t) => t == 2);
}

streaming.Generator = function() {
    return streaming.getInputTypes().some((t) => t >= UI_INPUT_TYPE_GENERATOR_INDEX);
}

function gotStream(stream) {
    // Create an AudioNode from the stream.
    window.mediaStreamSource = audioContext.createMediaStreamSource( stream );

    //for testing
    var osc = audioContext.createOscillator();
    osc.frequency.value = 200;
    osc.start(0);

    // switch these lines
    window.mediaStreamSource.connect(gainNode);
    // osc.connect(gainNode);

    streaming[0] = true;
    $('#inputType-interface select').val(1).change();
    animate();
}

function addUiData(data=[]) {
    [].push.apply(ui_data, data);
    var full_samples = fullAudioSamples();
    if (ui_data.length > full_samples) {
        ui_data.splice(0, ui_data.length-full_samples);
    } else {
        var zeros = new Array(full_samples - ui_data.length).fill(0);
        ui_data = [].concat(zeros, ui_data);
    }
}

// 7.2 WebSocket Stream ///////////////////////////////////////////////////////////
const notSupported = document.getElementById('alert2');
if (!('WebSocket' in window || 'MozWebSocket' in window)) {
    notSupported.classList.add('show');
    setTimeout(function() {
        notSupported.classList.add('opacity-0');
        setTimeout(function() {
            notSupported.classList.remove('opacity-0');
            notSupported.classList.remove('show');
        }, 1010);
    }, 3000);
}

var MyStream = function() {
        devGet();

      }
		
      function testWebSocket() {
        
         websocket = new WebSocket(datWS);
			
         websocket.onopen = function(evt) {
            onOpen(evt)
         };
		
         websocket.onmessage = function(evt) {
            onMessage(evt)
         };
		
         websocket.onerror = function(evt) {
            onError(evt)
         };
      }
		
    function controlWebSocket() {
         Cwebsocket = new WebSocket(conWS);
			
         Cwebsocket.onopen = function(evt) {
            ConOpen(evt)
         };
	     Cwebsocket.onerror = function(evt) {
            ConError(evt)
         };
      }
      
       function devGet() {
         devwebsocket = new WebSocket(ipWS);
			
         devwebsocket.onopen = function(evt) {
            devOpen(evt)
         };
		
         devwebsocket.onmessage = function(evt) {
            devMessage(evt)
         };
		
         devwebsocket.onerror = function(evt) {
            devError(evt)
         };
      }

	  function onOpen(evt) {
         console.log("DATA CONNECTED");
      }	
      
      function ConOpen(evt) {
         console.log("CONTROL CONNECTED");
      }
      
      function devOpen(evt) {
         console.log("GET CONNECTED");
      }
      
      function onError(evt) {
         onceFinished();
      }

      function ConError(evt) {
         onceFinished();
      }
      
     function devError(evt) {
         onceFinished();
      }
		
      function doSend(message) {
         //console.log("DATA SENT: " + message); 
         websocket.send(message);   
      }
      
      function controlSend(message) {
            if (isOpen(Cwebsocket) === true) {
                        
                //console.log("CONTROL SENT: " + message); 
                Cwebsocket.send(message);
                        
                    
          } else if ( Cwebsocket.readyState == 2 ||  Cwebsocket.readyState == 3) {
                controlWebSocket();
                
                while(!isCOpen) {
                    //console.log('Connecting');
                }
		setTimeout(() => {  Cwebsocket.send(message); }, 1000);
                //console.log("CONTROL SENT: " + message);
                        
            
            } else {

            }
        }
        
      function devSend(message) {
        if (isOpen(devwebsocket) === true)
                    {
                        //console.log("GET SENT: " + message); 
                        devwebsocket.send(message); 
                    }else{
                        if( devwebsocket.readyState == 2 |  devwebsocket.readyState == 3){
                            devGet();
                        }
                    }
 
      }
      
       function onMessage(evt) {
         store = evt.data;
      }
      
       function devMessage(evt) {
          if (evt.data.includes("DV:") === true){

			 	var device = evt.data.slice(3);
				var devArr = device.split(',');
                var x = document.getElementById("devices");
                document.getElementById("devices").options.length = 0;
          	    for (let i = 0; i < devArr.length; i++) { 
                    var option = document.createElement("option");
                    option.value = devArr[i];
                    option.text = devArr[i];
                    x.add(option);
                }

			}
			
			else if (evt.data.includes("SK:") === true){
				
				var socket = evt.data.slice(3);
				wsSock = socket;
				CwsSock = parseInt(wsSock) + 1;
			}
      }

      function onceFinished(){
      websocket.onclose = function (code, reason) {
            console.log('ws is closed with code: ' + code + ' reason: ' + reason);
         };
      Cwebsocket.onclose = function (code, reason) {
            console.log('Cws is closed with code: ' + code + ' reason: ' + reason);
         };
      devwebsocket.onclose = function (code, reason) {
            console.log('devws is closed with code: ' + code + ' reason: ' + reason);
         };

      }

/**
 * @name LineBreakTransformer
 * TransformStream to parse the stream into lines.
 */
 class LineBreakTransformer {
    constructor() {
      // A container for holding stream data until a new line.
      this.container = '';
    }
  
    transform(chunk, controller) {
      // Handle incoming chunk
      this.container += chunk;
      const lines = this.container.split('\r\n');
      this.container = lines.pop();
      lines.forEach(function(line) {
        if (line.length > 0)
        controller.enqueue(line);
      });
    }
  
    flush(controller) {
      //Flush the stream.
      controller.enqueue(this.container);
    }
}

function nextPower2(x) {
    return Math.pow(2, Math.ceil(Math.log2(x)));
}

function adjustWebglLine() {
    inputTypes = streaming.getInputTypes();
    for(var i=0; i<wglp.linesData.length; i++) {
        var full_samples = (inputTypes[i] == 2) ? fullStreamSamples() : fullAudioSamples();
        wglp.linesData[i].webglNumPoints = full_samples;
        wglp.linesData[i].numPoints = full_samples;
        wglp.linesData[i].xy = new Float32Array(2*full_samples);
        wglp.linesData[i].arrangeX();
    }
}

var my_ports = [new MyStream()];
var draw_time = Date.now();
var sampled_time = {audio: 0, stream: 0};

function animate(){
    var now = Date.now();
    // Fixed to 60 frames per seconds (1s/60 = 16.667ms)
    if (now - draw_time >= 1000.0/60) {
        if (streaming.SomeActive()){
            if (streaming.Audio()) {
                var new_samples = sampled_time.audio > 0 ? (Date.now() - sampled_time.audio) * sampleRate / 1000.0 : numSamples;
                analyser.getByteTimeDomainData(timeDomain);
                sampled_time.audio = Date.now();
                if (new_samples < numSamples) {
                    ui_data = timeDomain.slice(-Math.ceil(new_samples));
                    
                } else {
                    // Nothing. Let's the missing old data go and focus the present. 
                }
            }
            if (streaming.Stream()) {
                if (isOpen(websocket) === true)
                    {
                        doSend("?");
                 
                    }else{
                        if( websocket.readyState == 2 |  websocket.readyState == 3){
                            testWebSocket();
                        }
                    }
                var H = store.substring(1,store.length-1);
                var stream_data2 =H.split('|');

                if(stream_data2[0]){
                    
                    var stream1 = stream_data2[0].split(",");  
                    
                    length =stream1.length;
                    for (var i = 0; i < length; i++){
                        // Instead of parseInt(), Number()
                        // can also be used
                        if(stream1[i] != ''){
                            var V = parseFloat(stream1[i]);

                            if(V != NaN){
                                stream_data.push(V);
                            }
                        }
                    }
                }
                
                if(stream_data2[1]){
                    var stream2 = stream_data2[1].split(",");       
                    length =stream2.length;
                    for (var i = 0; i < length; i++){
                        if(stream2[i] != ''){
                            var V = parseFloat(stream2[i]);
                            if(V != NaN){
                                stream_dataS2.push(V);
                            }
                        }
                    }
                }
               
                if(stream_data2[2]){
                    
                  var stream3= stream_data2[2].split(",");  
                    length =stream3.length;
                    for (var i = 0; i < length; i++){
                        if(stream3[i] != ''){
                            var V = parseFloat(stream3[i]);
                            if(V != NaN){
                                stream_dataS3.push(V);
                            }
                        }
                    }
                }
                
                if(stream_data2[3]){
                    
                  var stream4= stream_data2[3].split(",");        
                    length =stream4.length;
                    for (var i = 0; i < length; i++){
                        if(stream4[i] != ''){
                            var V = parseFloat(stream4[i]);
                            if(V != NaN){
                                stream_dataS4.push(V);
                            }
                        }
                    }
                }

             
                // Iterate through array of string using
                // for loop
                // push all elements of array of string
                // in array of numbers by typecasting
                // them to integers using parseInt function
               
                sampled_time.stream = Date.now();
            }
        }
	drawData();
        draw_time = Date.now();
      }
    if (streaming.SomeActive()) {
        window.requestAnimationFrame(animate);
    }
}

function update(el) {
    var start_animation = false;
    var end_animation = false;
    var source_mode1 = [1,2].includes(parseInt(ui.inputType.value));
    var source_mode2 = [1,2].includes(parseInt(ui.inputType2.value));
    var source_mode3 = [1,2].includes(parseInt(ui.inputType3.value));
    var source_mode4 = [1,2].includes(parseInt(ui.inputType4.value));
    
    //CH1
    if (el == 'inputType' && source_mode1) {
        streaming[0] = true;
        start_animation = true;
    } else if (el == 'inputType' && !source_mode1) {
        streaming[0] = false;
        end_animation = true;
        
    //CH2
    } else if (el == 'inputType2' && source_mode2) {
        streaming[1] = true;
        start_animation = true;
    } else if (el == 'inputType2' && !source_mode2) {
        streaming[1] = false;
        end_animation = true;

    //CH3
    } else if (el == 'inputType3' && source_mode3) {
        streaming[2] = true;
        start_animation = true;
    } else if (el == 'inputType3' && !source_mode3) {
        streaming[2] = false;
        end_animation = true;

    //CH4
    } else if (el == 'inputType4' && source_mode4) {
        streaming[3] = true;
        start_animation = true;
    } else if (el == 'inputType4' && !source_mode4) {
        streaming[3] = false;
        end_animation = true;
        
    } else if (el == 'freeze') {
        if (ui.freeze.value === true) {
            line.freeze = {
                gain: ui.gain.value,
                v_offset: ui.vertOffset.value,
                h_offset: ui.horizOffset.value
            };
        } else {
            delete line.freeze;
        }
        
    } else if (el == 'freeze2') {
        if (ui.freeze2.value === true) {
            line2.freeze = {
                gain: ui.gain2.value,
                v_offset: ui.vertOffset2.value,
                h_offset: ui.horizOffset.value
            };
        } else {
            delete line2.freeze;
        }
        
     } else if (el == 'freeze3') {
        if (ui.freeze3.value === true) {
            line3.freeze = {
                gain: ui.gain3.value,
                v_offset: ui.vertOffset3.value,
                h_offset: ui.horizOffset.value
            };
        } else {
            delete line3.freeze;
        }
        
    } else if (el == 'freeze4') {
        if (ui.freeze4.value === true) {
            line4.freeze = {
                gain: ui.gain4.value,
                v_offset: ui.vertOffset4.value,
                h_offset: ui.horizOffset.value
            };
        } else {
            delete line4.freeze;
        }
        
        
   } else if (el == 'volts1') {
     controlSend("CH 1 VDIV:"+ui.volts1.value);
	 for (var i=0; i<collection_data.length; i++) {
            drawCollection(i);
        }
         } else if (el == 'volts2') {
     controlSend("CH 2 VDIV:"+ui.volts2.value);
         } else if (el == 'volts3') {
     controlSend("CH 3 VDIV:"+ui.volts3.value);
         } else if (el == 'volts4') {
     controlSend("CH 4 VDIV:"+ui.volts4.value);
	     } else if (el == 'timeScale') {
	 adjustWebglLine();
     
	controlSend("TIMEBASE:"+ ui.timeScale.value);
        for (var i=0; i<collection_data.length; i++) {
            drawCollection(i);
        }
    } else if (el == 'collectionSource') {
        if (ui.collectionSource.value > collection_data.length) return;
        if (ui.collectionSource.value > 0) {
            var collection = collection_data[ui.collectionSource.value - 1];
            $('#collectionShow-interface input').prop('checked', collection.show);
            $('#collectionGain-interface').val(collection.gain);
            $('#collectionVertOffset-interface').val(collection.vertOffset);
            $('#collectionShow-interface, #collectionGain-interface, #collectionVertOffset-interface, #delete_collection_btn').show();
        } else {
            $('#collectionShow-interface, #collectionGain-interface, #collectionVertOffset-interface, #delete_collection_btn').hide();
        }
    } else if (el == 'collectionShow') {
        if (ui.collectionSource.value > collection_data.length) return;
        var c = collection_data[ui.collectionSource.value - 1];
        c.show = ui.collectionShow.value;
        const line_index = c.line_index;
        const marker_index = c.marker_index;
        wglp.linesAux[line_index].visible = c.show;
        wglp.surfaces[marker_index].visible = c.show;
    } else if (el == 'collectionGain') {
        if (ui.collectionSource.value > collection_data.length) return;
        var c = collection_data[ui.collectionSource.value - 1];
        c.gain = ui.collectionGain.value;
        drawCollection(ui.collectionSource.value - 1);
    } else if (el == 'collectionVertOffset') {
        if (ui.collectionSource.value > collection_data.length) return;
        var c = collection_data[ui.collectionSource.value - 1];
        c.vertOffset = ui.collectionVertOffset.value;
        drawCollection(ui.collectionSource.value - 1);
    }

    if (el == 'inputType') {
        switch (parseInt(ui.inputType.value)) {
            case 0:
                line.visible = false;
                line_marker1.visible = false;
                wglp.linesData[0].visible = false;
                streaming[0] = false;
                $('#freq-interface, #freeze-interface, #gain-interface, #vertOffset-interface').hide();
                break;
            case 1:
                line.visible = true;
                line_marker1.visible = true;
                streaming[0] = true;
                $('#freeze-interface, #gain-interface, #vertOffset-interface').show();
                $('#freq-interface').hide();
                break;
            case 2:
                line.visible = true;
                line_marker1.visible = true;
                streaming[0] = true;
                $('#freq-interface').hide();
                $('#freeze-interface, #gain-interface, #vertOffset-interface').show();
                break;
            default:
                line.visible = true;
                line_marker1.visible = true;
                streaming[0] = false;
                $('#freq-interface, #gain-interface, #vertOffset-interface').show();
                $('#freeze-interface').hide();
                break;
        }
        
        if (parseInt(ui.inputType.value) == 2) {
            adjustWebglLine();
            } 
            
    }

    if (el == 'inputType2') {
        switch (parseInt(ui.inputType2.value)) {
             case 0:
                line2.visible = false;
                line_marker2.visible = false;
                wglp.linesData[1].visible = false;
                streaming[1] = false;
                $('#freq2-interface, #freeze2-interface, #gain2-interface, #vertOffset2-interface').hide();
                break;
            case 1:
                line2.visible = true;
                line_marker2.visible = true;
                streaming[1] = true;
                $('#freeze2-interface, #gain2-interface, #vertOffset2-interface').show();
                $('#freq2-interface').hide();
                break;
            case 2:
                line2.visible = true;
                line_marker2.visible = true;
                streaming[1] = true;
                $('#freq2-interface').hide();
                $('#freeze2-interface, #gain2-interface, #vertOffset2-interface').show();
                break;
            default:
                line2.visible = true;
                line_marker2.visible = true;
                streaming[1] = false;
                $('#freq2-interface, #gain2-interface, #vertOffset2-interface').show();
                $('#freeze2-interface').hide();
                break;
        }
        
         if (parseInt(ui.inputType2.value) == 2) {
            adjustWebglLine();
            } 
    }
    
     if (el == 'inputType3') {
        switch (parseInt(ui.inputType3.value)) {
             case 0:
                line3.visible = false;
                line_marker3.visible = false;
                wglp.linesData[2].visible = false;
                streaming[2] = false;
                $('#freq3-interface, #freeze3-interface, #gain3-interface, #vertOffset3-interface').hide();
                break;
            case 1:
                line3.visible = true;
                line_marker3.visible = true;
                streaming[2] = true;
                $('#freeze3-interface, #gain3-interface, #vertOffset3-interface').show();
                $('#freq3-interface').hide();
                break;
            case 2:
                line3.visible = true;
                line_marker3.visible = true;
                streaming[2] = true;
                $('#freq3-interface').hide();
                $('#freeze3-interface, #gain3-interface, #vertOffset3-interface').show();
                break;
            default:
                line3.visible = true;
                line_marker3.visible = true;
                streaming[2] = false;
                $('#freq3-interface, #gain3-interface, #vertOffset3-interface').show();
                $('#freeze3-interface').hide();
                break;
        }
        
         if (parseInt(ui.inputType3.value) == 2) {
            adjustWebglLine();
            } 
    }
    
     if (el == 'inputType4') {
        switch (parseInt(ui.inputType4.value)) {
             case 0:
                line4.visible = false;
                line_marker4.visible = false;
                wglp.linesData[3].visible = false;
                streaming[3] = false;
                $('#freq4-interface, #freeze4-interface, #gain4-interface, #vertOffset4-interface').hide();
                break;
            case 1:
                line4.visible = true;
                line_marker4.visible = true;
                streaming[3] = true;
                $('#freeze4-interface, #gain4-interface, #vertOffset4-interface').show();
                $('#freq4-interface').hide();
                break;
            case 2:
                line4.visible = true;
                line_marker4.visible = true;
                streaming[3] = true;
                $('#freq4-interface').hide();
                $('#freeze4-interface, #gain4-interface, #vertOffset4-interface').show();
                break;
            default:
                line4.visible = true;
                line_marker4.visible = true;
                streaming[3] = false;
                $('#freq4-interface, #gain4-interface, #vertOffset4-interface').show();
                $('#freeze4-interface').hide();
                break;
        }
        
         if (parseInt(ui.inputType4.value) == 2) {
            adjustWebglLine();
            } 
    }

    if (streaming.Generator() &&  generator_interface.includes(el)) {
        generator_refresh = true;
    }

    if (start_animation) {
        animate();
        if (!animateId)
            animateId = window.requestAnimationFrame(animate);
    } else if (end_animation) {
        if(animateId && streaming.None()) window.cancelAnimationFrame(animateId);
        drawData();
    } else if (streaming.SomeActive()) {
        animate();
    } else {
        drawData();
    }
}

const freeze_interface = [
    {
        gain: 'gain',
        v_offset: 'vertOffset',
        h_offset: 'horizOffset'
    },
    {
        gain: 'gain',
        v_offset: 'vertOffset',
        h_offset: 'horizOffset'
    }
];
function IsFreezeUpdated(channel) {
    if (!wglp) return false;
    if (channel >= wglp.linesData.length) return false;
    var _line = wglp.linesData[channel];
    if (!_line.freeze) return false;
    console.assert(channel < freeze_interface.length);

    for (var key in _line.freeze) {
        if (key in freeze_interface[channel]) {
            const ui_key = freeze_interface[channel][key];
            if (ui[ui_key].value !== _line.freeze[key])
                return true;
        }
    }
    return false;
}

const inputType_key = ['inputType', 'inputType2', 'inputType3', 'inputType4'];
function updateFreeze(channel) {
    if (!wglp) return;
    if (channel >= wglp.linesData.length) return;
    var _line = wglp.linesData[channel];
    if (!_line.freeze) return;
    console.assert(channel < inputType_key.length);
    if (ui[inputType_key[channel]].value != 1 && ui[inputType_key[channel]].value != 2) return;
    if (!IsFreezeUpdated(channel)) return;

    // Update value from ui
    var new_freeze = {};
    for (var key in _line.freeze) {
        new_freeze[key] = _line.freeze[key];
        if (key in freeze_interface[channel]) {
            const ui_key = freeze_interface[channel][key];
            new_freeze[key] = ui[ui_key].value;
        }
    }
    // Replace new points in both X and Y
    for (var i=0; i<_line.numPoints; i++) {
        var y = mapRange([-1, 1], [0, canvas.height], _line.getY(i));
        y += new_freeze.v_offset - _line.freeze.v_offset;
        y *= new_freeze.gain / _line.freeze.gain;
        y = mapRange.ToWebGL.y(y);
        var x = mapRange([-1, 1], [0, canvas.width], _line.getX(i));
        x += new_freeze.h_offset - _line.freeze.h_offset;
        x = mapRange.ToWebGL.x(x);
        _line.setX(i, x);
        _line.setY(i, y);
    }
    _line.freeze = new_freeze;
}

function printStats(data) {
    var mean = data.reduce(function(a,x){return a+x;}) / data.length;
    var variance = data.reduce(function(a,x){return a+Math.pow(x-mean, 2)}) / data.length; 
    console.log(
        "min: " + data.reduce(function(a,x){return Math.min(a,x);}, data[0]),
        "max: " + data.reduce(function(a,x){return Math.max(a,x);}, data[0]),
        "mean: " + mean,
        "sd: " + Math.sqrt(variance)
    );
}

function drawData(){
    // full_samples is the number of samples to fill full width
    // line.numPoints is the number of pixels filled for full width
    // ui_data is a new data from timeDomain
    if (streaming.Some()){
        if (streaming.Audio()) {
            // Process the audio data
            var full_samples = fullAudioSamples();
            if (ui_data.length > full_samples) {
                ui_data = ui_data.slice(-full_samples);
            }
            var adjust_size = ui_data.length * line.numPoints / full_samples;
            if (full_samples < line.numPoints) {
                ui_data = upsampling(ui_data, adjust_size);
            }
            //CH1
            if (ui.inputType.value == 1 && streaming.Active(0)) {
                var ys = [];
                for (var i=0; i < ui_data.length; i++) {
                    var y = ui.gain.value * ((ui_data[i] / 255) - 0.5)*200/(ui.volts1.value);
                    y += canvas.height/2;
                    ys.push(mapRange.ToWebGL.y(y + ui.vertOffset.value));
                }
            
                line.shiftAdd(ys);
            }
            // CH2
            if (ui.inputType2.value == 1 && streaming.Active(1)) {
                var ys = [];
                for (var i=0; i < ui_data.length; i++) {
                    var y = ui.gain2.value * ((ui_data[i] / 255) - 0.5)*200/(ui.volts2.value);
                    y += canvas.height/2;
                    ys.push(mapRange.ToWebGL.y(y + ui.vertOffset2.value));
                }
            
                line2.shiftAdd(ys);
            }
            //CH3
            if (ui.inputType3.value == 1 && streaming.Active(2)) {
                var ys = [];
                for (var i=0; i < ui_data.length; i++) {
                    var y = ui.gain3.value * ((ui_data[i] / 255) - 0.5)*200/(ui.volts3.value);
                    y += canvas.height/2;
                    ys.push(mapRange.ToWebGL.y(y + ui.vertOffset3.value));
                }
            
                line3.shiftAdd(ys);
            }
            // CH4
            if (ui.inputType4.value == 1 && streaming.Active(3)) {
                var ys = [];
                for (var i=0; i < ui_data.length; i++) {
                    var y = ui.gain4.value * ((ui_data[i] / 255) - 0.5)*200/(ui.volts4.value);
                    y += canvas.height/2;
                    ys.push(mapRange.ToWebGL.y(y + ui.vertOffset4.value));
                }
            
                line4.shiftAdd(ys);
            }
        }
        if (streaming.Stream()) {
        
            var full_samples = fullStreamSamples();
           
            //CH1
            if (stream_data.length > full_samples) {
                stream_data = stream_data.slice(-full_samples);
            }
            var adjust_size = stream_data.length * line.numPoints / full_samples;
        
            if (full_samples < line.numPoints) {
                stream_data = upsampling(stream_data, adjust_size);
            }
            if (ui.inputType.value == 2 && streaming.Active(0)) {
                var ys = [];
                for (var i=0; i < stream_data.length; i++) {
                    var y = ui.gain.value * (stream_data[i])*50;
                    y += canvas.height/2;
                    ys.push(mapRange.ToWebGL.y(y + ui.vertOffset.value));
                }
                line.shiftAdd(ys);
            }
       
            //CH2
            if (stream_dataS2.length > full_samples) {
                stream_dataS2 = stream_dataS2.slice(-full_samples);
              }
              var adjust_sizeS2 = stream_dataS2.length * line2.numPoints / full_samples;
              if (full_samples < line2.numPoints) {
                  stream_dataS2 = upsampling(stream_dataS2, adjust_sizeS2);
              }
            if (ui.inputType2.value == 2 && streaming.Active(1)) {
                var ys = [];
                for (var i=0; i < stream_dataS2.length; i++) {
                    var y = ui.gain2.value * (stream_dataS2[i])*100/(ui.volts1.value);
                    y += canvas.height/2;
                    ys.push(mapRange.ToWebGL.y(y + ui.vertOffset2.value));   
                }
                line2.shiftAdd(ys);
            }
            
            //CH3
            if (stream_dataS3.length > full_samples) {
                stream_dataS3 = stream_dataS3.slice(-full_samples);
                }
                var adjust_sizeS3 = stream_dataS3.length * line3.numPoints / full_samples;
            if (full_samples < line3.numPoints) {
                stream_dataS3 = upsampling(stream_dataS3, adjust_sizeS3);
            }
            if (ui.inputType3.value == 2 && streaming.Active(2)) {
                var ys = [];
                for (var i=0; i < stream_dataS3.length; i++) {
                    var y = ui.gain3.value * (stream_dataS3[i])*100/(ui.volts1.value);
                    y += canvas.height/2;
                    ys.push(mapRange.ToWebGL.y(y + ui.vertOffset3.value));
                }
                line3.shiftAdd(ys);
            }
            
            //CH4
            if (stream_dataS4.length > full_samples) {
                stream_dataS4 = stream_dataS4.slice(-full_samples);
              }
              var adjust_sizeS4 = stream_dataS4.length * line4.numPoints / full_samples;
              if (full_samples < line4.numPoints) {
                  stream_dataS4 = upsampling(stream_dataS4, adjust_sizeS4);
              }
            if (ui.inputType4.value == 2 && streaming.Active(1)) {
                var ys = [];
                for (var i=0; i < stream_dataS4.length; i++) {
                    var y = ui.gain4.value * (stream_dataS4[i])*100/(ui.volts1.value);
                    y += canvas.height/2;
                    ys.push(mapRange.ToWebGL.y(y + ui.vertOffset4.value));
                }
                line4.shiftAdd(ys);
            }
        }
    }
    if (generator_refresh) {
        for (var i = 0; i < line.numPoints; i++) {
            var xc = i * (canvas.width/line.numPoints);
            //Hardcoding 6 is wrong! Gives incorrect values on small screens
            // var amplitude = c.height/6 / ui.volts1.value;
            var amplitude = 100 / ui.volts1.value; //100 pixels per division

            // shift graph to middle of oscilloscpe
            xc = Math.round(xc + canvas.width/2);
            
            //CH1
            if (ui.inputType.value >= UI_INPUT_TYPE_GENERATOR_INDEX) {
                var y = -amplitude * Math.sin(2*Math.PI*(xc + ui.horizOffset.value)*ui.freq.value*0.00001*ui.timeScale.value);
                // square wave modification
                if (ui.inputType.value == 11){
                    if (y > 0) y = amplitude;
                    else y = -amplitude;
                }
                // apply gain and center vertically
                y = ui.gain.value*y + canvas.height/2;
                line.setY(i, mapRange.ToWebGL.y(y + ui.vertOffset.value));
            }
            
            //CH2
            if (ui.inputType2.value >= UI_INPUT_TYPE_GENERATOR_INDEX) {
                var y = -amplitude * Math.sin(2*Math.PI*(xc + ui.horizOffset.value)*ui.freq2.value*0.00001*ui.timeScale.value);;
                if (ui.inputType2.value == 11){
                    if (y > 0) y = amplitude;
                    else y = -amplitude;
                }
                y = ui.gain2.value*y + canvas.height/2;
                line2.setY(i, mapRange.ToWebGL.y(y + ui.vertOffset2.value));
            }
            
             //CH3
            if (ui.inputType3.value >= UI_INPUT_TYPE_GENERATOR_INDEX) {
                var y = -amplitude * Math.sin(2*Math.PI*(xc + ui.horizOffset.value)*ui.freq3.value*0.00001*ui.timeScale.value);
                if (ui.inputType3.value == 11){
                    if (y > 0) y = amplitude;
                    else y = -amplitude;
                }
                y = ui.gain3.value*y + canvas.height/2;
                line3.setY(i, mapRange.ToWebGL.y(y + ui.vertOffset3.value));
            }
            
            //CH4
            if (ui.inputType4.value >= UI_INPUT_TYPE_GENERATOR_INDEX) {
                var y = -amplitude * Math.sin(2*Math.PI*(xc + ui.horizOffset.value)*ui.freq4.value*0.00001*ui.timeScale.value);;
                if (ui.inputType4.value == 11){
                    if (y > 0) y = amplitude;
                    else y = -amplitude;
                }
                y = ui.gain4.value*y + canvas.height/2;
                line4.setY(i, mapRange.ToWebGL.y(y + ui.vertOffset4.value));
            }

        }
        generator_refresh = false;
    }
    // Draw marker
    line_marker1.xy = new Float32Array(webglTriangleMarker(-0.99, mapRange.ToWebGL.y(ui.vertOffset.value)+1));
    line_marker2.xy = new Float32Array(webglTriangleMarker(-0.99, mapRange.ToWebGL.y(ui.vertOffset2.value)+1));
    line_marker3.xy = new Float32Array(webglTriangleMarker(-0.99, mapRange.ToWebGL.y(ui.vertOffset3.value)+1));
    line_marker4.xy = new Float32Array(webglTriangleMarker(-0.99, mapRange.ToWebGL.y(ui.vertOffset4.value)+1));

    // Update freezed data
    updateFreeze(0);
    updateFreeze(1);
    updateFreeze(2);
    updateFreeze(3);

    wglp.custom_update();
}

// 8. Measurement UI and handlers
var is_measurement = false;
var is_touched = false;
var measurement_data = [];

function webglGetXY(e) {
    const bounding = canvas.getBoundingClientRect();
    if (e.changedTouches) e = e.changedTouches[0];
    else if (e.touches) e = e.touches[0];
    const x = (1 / wglp.gScaleX) *
        ((2 * ((e.pageX - bounding.left) * devicePixelRatio - canvas.width / 2)) / canvas.width -
            wglp.gOffsetX);
    const y = (1 / wglp.gScaleY) *
        ((2 * (canvas.height / 2 - (e.pageY - bounding.top) * devicePixelRatio)) / canvas.height -
            wglp.gOffsetY);
    return {x: x,y: y};
}
function webglCross(x,y) {
    const dx = mapRange.ToWebGL.x(10)+1;
    const dy = mapRange.ToWebGL.y(10)+1;
    return [[x-dx, y+dy, x+dx, y-dy], [x-dx, y-dy, x+dx, y+dy]];
}
function webglTriangleMarker(x,y) {
    const dx = mapRange.ToWebGL.x(10)+1;
    const dy = mapRange.ToWebGL.y(10)+1;
    const h = dx;
    const b = dy/2.0;
    return [x, y, x-h, y+b, x-h, y-b];
}

function formatUnit(number, unit='', fixed=3, prefix_unit='') {
    var cnt = 0;
    const units = ['', 'm', 'μ', 'n', 'p', 'f', 'a', 'z', 'y'];
    const zero = '0.' + '0'.repeat(fixed);
    while(parseFloat(number).toFixed(fixed) === zero && cnt < units.length) {
        number *= 1000.0;
        cnt++;
    }
    if (cnt == units.length) {
        number /= 1000.0;
        cnt--;
    }
    return parseFloat(number).toFixed(fixed) + prefix_unit + units[cnt] + unit;
}

function measurementHandler() {
    if (is_measurement) {
        $("#measurementButton").text('Measurement');
        is_measurement = false;
        for (var i=0; i<AuxLines.length; i++) {
            wglp.linesAux[i].visible = false;
            wglp.linesAux[i].xy = new Float32Array(4);
        }
    } else {
        is_measurement = true;
        measurement_data = [];
        for (var i=0; i<AuxLines.length; i++) {
            wglp.linesAux[i].visible = true;
            wglp.linesAux[i].color = colors.white;
        }
        $("#measurementButton").text('Cancel');
    }
    is_touched = false;
    wglp.custom_update();
}

function measurementAddMarker(e) {
    if (!is_measurement) return;
    const xy = webglGetXY(e);
    is_touch_event = (e instanceof TouchEvent);
    if (is_touched && e instanceof PointerEvent) return;
    measurement_data.push(xy);
    if (measurement_data.length >= 2) {
        const d = measurement_data.slice(-2);
        var dx = d[1].x - d[0].x;
        var dy = d[0].y - d[1].y;
        // 100 px = 5V * ui.volts1.value
        dy = mapRange([0,2], [0,canvas.height], dy)*ui.volts1.value*5/100;
        // 100 px = 1ms * ui.timeScale.value
        dx = mapRange([0,2], [0,canvas.width], dx)*ui.timeScale.value/1000/100;
        $('#measurementDeltaV').text(formatUnit(dy, 'V'));
        $('#measurementDeltaT').text(formatUnit(dx, 's'));
        $('#measurementFreq').text(formatUnit(Math.abs(1/dx), 'Hz'));
        $('#toast1').addClass('show');
        // update markers        
        var marker = webglCross(d[0].x, d[0].y);
        const old_color = wglp.linesAux[AuxLines.marker2_1].color;
        const new_color = colors.random();
        wglp.linesAux[AuxLines.marker1_1].xy = new Float32Array(marker[0]);
        wglp.linesAux[AuxLines.marker1_2].xy = new Float32Array(marker[1]);
        wglp.linesAux[AuxLines.marker1_1].color = old_color;
        wglp.linesAux[AuxLines.marker1_2].color = old_color;
        marker = webglCross(d[1].x, d[1].y);
        wglp.linesAux[AuxLines.marker2_1].xy = new Float32Array(marker[0]);
        wglp.linesAux[AuxLines.marker2_2].xy = new Float32Array(marker[1]);
        wglp.linesAux[AuxLines.cross_1].color = new_color;
        wglp.linesAux[AuxLines.cross_2].color = new_color;
        wglp.linesAux[AuxLines.marker2_1].color = new_color;
        wglp.linesAux[AuxLines.marker2_2].color = new_color;
    } else {
        // only one marker
        const cross = webglCross(xy.x, xy.y);
        wglp.linesAux[AuxLines.marker1_1].xy = new Float32Array(cross[0]);
        wglp.linesAux[AuxLines.marker1_2].xy = new Float32Array(cross[1]);
    }
    if (is_touch_event) {
        wglp.linesAux[AuxLines.cross_1].visible = false;
        wglp.linesAux[AuxLines.cross_2].visible = false;
    }
    is_touched = is_touch_event;
    wglp.custom_update();
}

function measurementDrag(e) {
    if (!is_measurement) return;
    const xy = webglGetXY(e);
    const cross = webglCross(xy.x, xy.y);
    wglp.linesAux[AuxLines.cross_1].xy = new Float32Array(cross[0]);
    wglp.linesAux[AuxLines.cross_2].xy = new Float32Array(cross[1]);
    wglp.custom_update();
}

function measurementTouchMove(e) {
    if (!is_measurement) return;
    is_touched = true;
    const xy = webglGetXY(e);
    wglp.linesAux[AuxLines.cross_1].xy = new Float32Array([xy.x, -1, xy.x, 1]);
    wglp.linesAux[AuxLines.cross_2].xy = new Float32Array([-1, xy.y, 1, xy.y]);
    wglp.linesAux[AuxLines.cross_1].visible = true;
    wglp.linesAux[AuxLines.cross_2].visible = true;
    wglp.custom_update();
}

$("#measurementButton").click(measurementHandler);
$(document).keyup(function(e) {
    switch (e.key) {
        case 'm':
        case 'M':
            measurementHandler();
            break;
        case 'Escape':
            if (is_measurement) {
                measurementHandler();
            }
            break;
    }
});
canvas.addEventListener("click", measurementAddMarker);
canvas.addEventListener("touchend", measurementAddMarker, Modernizr.passiveeventlisteners ? {passive: true} : false);
canvas.addEventListener("touchcancel", measurementHandler, Modernizr.passiveeventlisteners ? {passive: true} : false);
canvas.addEventListener("mousemove", measurementDrag);
canvas.addEventListener("touchmove", measurementTouchMove, Modernizr.passiveeventlisteners ? {passive: true} : false);
window.addEventListener("orientationchange", function() {
    location.reload();
}, false);

// 9. Collection UI
$('[data-bs-target="#addCollectionModal"]').click(function (){
    const channel = $(this).attr("data-channel");
    $("#collectionName").val("");
    $("#collectionChannel").val(channel);
});

$('#add_collection_btn').click(function () {
    const channel = $("#collectionChannel").val();
    const name = $("#collectionName").val() || ('ch'+(channel+1)+'_'+Math.ceil(Date.now()/1000));
    const color = $("#collectionColor").val();
    if (!wglp) return;
    console.assert(wglp.linesData[channel]);
    addCollection(
        wglp.linesData[channel],
        wglp.surfaces[channel],
        {
            name: name,
            show: true,
            gain: ui.gain.value,
            offset: ui.vertOffset.value,
            color: colors.fromHex(color),
            inputType: ui.inputType.value
        }
    );
});

$('#delete_collection_btn').click(function() {
    const index = ui.collectionSource.value - 1;
    if (index < 0 || index >= collection_data.length) return;
    const collection = collection_data[index];
    collection_data[index].deleted = true;
    collection_data[index].show = false;
    wglp.linesAux[collection.line_index].visible = false;
    wglp.linesAux[collection.line_index].xy = null;
    wglp.surfaces[collection.marker_index].visible = null;
    wglp.surfaces[collection.marker_index].xy = null;

    $('#collectionSource-interface select').val(0);
    $('#collectionSource-interface select').children().eq(index+1).remove();
    $('#collectionGain-interface, #collectionVertOffset-interface, #collectionShow-interface, #delete_collection_btn').hide();
});

// Add XY data from line to the collection
function addCollection(line, marker, params) {
    var original_xy = line.xy.slice(0);
    for (var i=0; i<original_xy.length; i++) {
        if (i % 2) {
            var y = mapRange([-1, 1], [0, canvas.height], original_xy[i]);
            y -= params.offset + (canvas.height/2);
            if (params.inputType == 2) {
                y /= params.gain * 100 / ui.volts1.value;
            } else if (params.inputType == 1) {
                y /= params.gain * 200 / ui.volts1.value;
                y += 0.5;
                y *= 255;
            } else {
                y /= params.gain;
            }
            original_xy[i] = y;
        }
    }
    collection_data.push({
        line_index: wglp.linesAux.length,
        marker_index: wglp.surfaces.length,
        deleted: false,
        xy: original_xy,
        name: params.name,
        show: params.show,
        gain: params.gain,
        color: params.color,
        inputType: params.inputType,
        vertOffset: params.offset
    });
    // Add line
    const _line = new WebglPlotBundle.WebglLine(params.color, original_xy.length/2);
    _line.xy = line.xy.slice(0);
    _line.visible = params.show;
    wglp.addAuxLine(_line);
    // Add marker
    const _marker = new WebglPlotBundle.WebglLine(params.color, 3);
    _marker.xy = marker.xy.slice(0);
    wglp.addSurface(_marker);
    // Add option box
    ui.collectionSource.values.push([params.name, collection_data.length]);
    $('#collectionSource-interface select').append("<option value='"+(collection_data.length)+"'>"+(params.name)+"</option>")
}

function drawCollection(index) {
    if (index >= collection_data.length) return;
    var collection = collection_data[index];
    if (collection.deleted) return;
    var xy = collection.xy.slice(0);
    for (var i=0; i<xy.length; i++) {
        if (i % 2) {
            if (collection.inputType == 2) {
                var y = collection.gain * (xy[i])*100/(ui.volts1.value);
                y += canvas.height/2;
                y = mapRange.ToWebGL.y(y + collection.vertOffset);
            } else if (collection.inputType == 1) {
                var y = collection.gain * ((xy[i] / 255) - 0.5)*200/(ui.volts1.value);
                y += canvas.height/2;
                y = mapRange.ToWebGL.y(y + collection.vertOffset);
            } else {
                y = collection.gain*xy[i] + canvas.height/2;
                y = mapRange.ToWebGL.y(y + collection.vertOffset);
            }
            xy[i] = y;
        } 
    }

    const full_samples = (collection.inputType == 2) ? fullStreamSamples() : fullAudioSamples();
    if (wglp.linesAux[collection.line_index].numPoints != full_samples) {
        wglp.linesAux[collection.line_index] = new WebglPlotBundle.WebglLine(collection.color, full_samples);
    }
    if (xy.length == full_samples * 2) {
        wglp.linesAux[collection.line_index].xy = xy;
    } else {
        if (xy.length > full_samples * 2) {
            wglp.linesAux[collection.line_index].xy = xy.slice(-full_samples*2);
        } else {
            wglp.linesAux[collection.line_index].xy = new Float32Array(full_samples*2);
            const duplicates = Math.ceil(full_samples * 2 / xy.length);
            for (var i=0; i<duplicates; i++) {
                wglp.linesAux[collection.line_index].xy.set(
                    i < duplicates - 1 ? xy : xy.slice(-(2*full_samples-i*xy.length)), // Array to set
                    i*xy.length // target index to insert
                );
            }
        }
    }
    wglp.linesAux[collection.line_index].arrangeX();
    wglp.surfaces[collection.marker_index].xy = new Float32Array(webglTriangleMarker(-0.99, mapRange.ToWebGL.y(collection.vertOffset)+1));
}

// 10. Events
$(document).on("uiLoaded", function(){
    if (navigator.mediaDevices){
        navigator.mediaDevices.getUserMedia({ audio: true, video: false })
          .then(function(stream) {
            /* use the stream */
            gotStream(stream);
            $("#alert1").removeClass("show");
          })
          .catch(function(err) {
            /* handle the error */
            console.log(err);
          });
    } else {
        animate();
        $("#alert1").addClass("show");
    };

    // The default inputType for channel 2 is Off then hide the generator interface 
    $('#freq2-interface, #freeze2-interface, #gain2-interface, #vertOffset2-interface').hide();
    $('#collectionShow-interface, #collectionGain-interface, #collectionVertOffset-interface, #delete_collection_btn').hide();

    // Click event
    $('.dismiss, .overlay').on('click', function () {
        // hide sidebar
        $('#sidebar1, #sidebar2, #sidebar3, #sidebar4,#sidebar5,#sidebar6').removeClass('active');
        if (is_measurement) measurementHandler();
    });
  
    $('#sidebarCollapse1').on('click', function () {
        // open sidebar
        $('#sidebar1').addClass('active');
        $('#sidebar2, #sidebar3, #sidebar4,#sidebar5,#sidebar6').removeClass('active');
        if (is_measurement) measurementHandler();
    });
  
    $('#sidebarCollapse2').on('click', function () {
      // open sidebar
      $('#sidebar2').addClass('active');
      $('#sidebar1, #sidebar3, #sidebar4,#sidebar5,#sidebar6').removeClass('active');
      if (is_measurement) measurementHandler();
    });
  
    $('#sidebarCollapse3').on('click', function () {
      // open sidebar
      $('#sidebar3').addClass('active');
      $('#sidebar1, #sidebar2, #sidebar4,#sidebar5,#sidebar6').removeClass('active');
      if (is_measurement) measurementHandler();
    });
  
    $('#sidebarCollapse4').on('click', function () {
      // open sidebar
      $('#sidebar4').addClass('active');
      $('#sidebar1, #sidebar2, #sidebar3,#sidebar5,#sidebar6').removeClass('active');
      if (is_measurement) measurementHandler();
    });
    
     $('#sidebarCollapse5').on('click', function () {
      // open sidebar
      $('#sidebar5').addClass('active');
      $('#sidebar1, #sidebar2, #sidebar3,#sidebar4,#sidebar6').removeClass('active');
      if (is_measurement) measurementHandler();
    });
    
     $('#sidebarCollapse6').on('click', function () {
      // open sidebar
      $('#sidebar6').addClass('active');
      $('#sidebar1, #sidebar2, #sidebar3,#sidebar4,#sidebar5').removeClass('active');
      if (is_measurement) measurementHandler();
    });
    
     $('#ipConnect').on('click', function () {
     
     var e = document.getElementById("devices");
        function onChange() {
            var value = e.value;
            var text = e.options[e.selectedIndex].text;
            msg = "CONNECT:" + text;
            devSend(msg);
            datWS = wsUri + wsSock;
            conWS = CwsUri + CwsSock;
            testWebSocket();
            controlWebSocket();    
        }
        
        e.onchange = onChange;
        onChange();
     });
     
     $('#ipScan').on('click', function () {
        
            devSend("SCAN+SOCKET?"); 
      });
      
      $('#setAll').on('click', function () {
     
           let mesg = ["SETALL:" , ui.volts1.value , ui.volts2.value ,ui.volts3.value , ui.volts4.value  , ui.timeScale.value].join(",");
           devSend(mesg);
     }); 
});

/* 11. Main program*/
var line_color = colors.teal;
var line2_color = colors.pink;
var line3_color = colors.random;
var line4_color = colors.blue;
var full_samples = fullAudioSamples();
//full_samples = full_samples > WEBGL_NUM_POINTS_MIN ? full_samples : WEBGL_NUM_POINTS_MIN; 
// CH1
const line = new WebglPlotBundle.WebglLine(line_color, full_samples);
line.arrangeX();
wglp.addLine(line);
const line_marker1 = new WebglPlotBundle.WebglLine(line_color, 3);
line_marker1.xy = new Float32Array(webglTriangleMarker(-0.99, 0));
wglp.addSurface(line_marker1);
// CH2
const line2 = new WebglPlotBundle.WebglLine(line2_color, full_samples);
line2.arrangeX();
line2.visible = false;
wglp.addLine(line2);
const line_marker2 = new WebglPlotBundle.WebglLine(line2_color, 3);
line_marker2.xy = new Float32Array(webglTriangleMarker(-0.99, 0));
line_marker2.visible = false;
wglp.addSurface(line_marker2);
//CH3
const line3 = new WebglPlotBundle.WebglLine(line_color, full_samples);
line3.arrangeX();
line3.visible = false;
wglp.addLine(line3);
const line_marker3 = new WebglPlotBundle.WebglLine(line3_color, 3);
line_marker3.xy = new Float32Array(webglTriangleMarker(-0.99, 0));
line_marker3.visible = false;
wglp.addSurface(line_marker3);
//CH4
const line4 = new WebglPlotBundle.WebglLine(line4_color, full_samples);
line4.arrangeX();
line4.visible = false;
wglp.addLine(line4);
const line_marker4 = new WebglPlotBundle.WebglLine(line4_color, 3);
line_marker4.xy = new Float32Array(webglTriangleMarker(-0.99, 0));
line_marker4.visible = false;
wglp.addSurface(line_marker4);

wglp.custom_update();
animate();

function isOpen(websocket) { return websocket.readyState === websocket.OPEN }
function isCOpen(Cwebsocket) { return Cwebsocket.readyState == 1 }
