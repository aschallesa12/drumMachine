import { useEffect } from "react";

const Pad = ({ srcAudio, text, id, setClickedId }) => {

  useEffect (() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);
  
  const handleKeyPress = (event) => {
    
    if (event.keyCode === text.charCodeAt(0)) {
      
      document.getElementById(text).play();
      setClickedId(id)
    }
  };

  return (
    <div
      className="drum-pad"
      id={id}
      onClick={() => {
        document.getElementById(text).play();
        setClickedId(id);
      }}

    >
      <p>{text}</p>
      <audio src={srcAudio} className="clip" id={text}>
        <source src={srcAudio} type="audio/mp3" />
      </audio>
    </div>
    
  );
};

export default Pad;
