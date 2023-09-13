import React, { useState } from "react";
import { TTS_API } from "../api";

function TTS_Page() {
  const [audioSrc, setAudioSrc] = useState("");
  const handleButtonClick = async () => {
    try {
      const response = await TTS_API.brianTTS("");

      if (response.status !== 200) {
        const errorText = await response.text();
        alert(errorText);
        return;
      }

      const mp3 = await response.blob();
      const blobUrl = URL.createObjectURL(mp3);
      setAudioSrc(blobUrl);

      const audio = document.getElementById("audio");
      audio.pause();
      audio.load();
      audio.play();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };
  return (
    <div>
      <button onClick={handleButtonClick}>Fetch and Play Audio</button>
      <audio id="audio" controls>
        <source id="source" src={audioSrc} type="audio/mpeg" />
      </audio>
    </div>
  );
}

export default TTS_Page;
