
import './App.css'
import DrumMachine from './components/DrumMachine'
import Pad from './components/Pad'

const myDrumPadArray = [
  { srcAudio: "src/assets/Heater-1.mp3", text: "Q", id: "q-heater-1" },
  { srcAudio: "src/assets/Heater-2.mp3", text: "W", id: "w-heater-2" },
  { srcAudio: "src/assets/Heater-3.mp3", text: "E", id: "e-heater-3" },
  { srcAudio: "src/assets/Heater-4_1.mp3", text: "A", id: "a-heater-4" },
  { srcAudio: "src/assets/Heater-6.mp3", text: "S", id: "s-heater-6" },
  { srcAudio: "src/assets/Dsc_Oh.mp3", text: "D", id: "d-dsc-oh" },
  { srcAudio: "src/assets/Kick_n_Hat.mp3", text: "Z", id: "z-kick-hat" },
  { srcAudio: "src/assets/RP4_KICK_1.mp3", text: "X", id: "x-rp4-kick" },
  { srcAudio: "src/assets/Cev_H2.mp3", text: "C", id: "c-cev-h2" }
];

function App() {
return (
    
    <div id="drum-machine">
      <h1 className="title">Drum Machine</h1>
      <DrumMachine myDrumPadArray={myDrumPadArray} />
    </div>
  
  );
};

export default App
