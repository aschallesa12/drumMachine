import { useState } from "react";
import Pad from "./Pad";

const DrumMachine = ({ myDrumPadArray }) => {
  const [clickedId, setClickedId] = useState("");
  
  

  return (
    <div id="display">
      {myDrumPadArray.map((item) => {
        return <Pad srcAudio={item.srcAudio} text={item.text} id={item.id} setClickedId={setClickedId} />;
      })}
      <p className="clicked-id">{clickedId}</p>
    </div>
  );
};

export default DrumMachine;
