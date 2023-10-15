import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { TTS_API } from "../api";

import "../App.css";

function Home() {
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const handleButtonClick = async () => {
    try {
      const response = await TTS_API.brianTTS(
        `Hello, ${name}! Welcome to our website. We're glad to have you here.`
      );
      if (response.status !== 200) {
        const errorText = await response.text();
        alert(errorText);
        return;
      }
      const mp3 = await response.blob();
      const blobUrl = URL.createObjectURL(mp3);
      const audio = new Audio(blobUrl);
      audio.pause();
      audio.load();
      audio.play();
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  useEffect(() => {
    adjustWidth();
  });

  const adjustWidth = () => {
    if (flag) {
      const inputField = document.querySelector(".name-field");
      let width = name.length;
      console.log(width);
      if (width < 1) {
        inputField.style.width = "initail";
      } else {
        inputField.style.width = width + "ch";
      }
    }
  };

  return (
    <>
      <div className="head">
        <div>
          {flag ? (
            <div>Hello World!👋</div>
          ) : (
            <TypeAnimation
              cursor={false}
              sequence={[
                `Hello World!👋`,
                1000,
                () => {
                  setFlag(true);
                },
              ]}
              speed={10}
            />
          )}
        </div>
      </div>
      <div className="middle">
        <div>
          {flag ? (
            <>
              <div>Hi there!👀 What's your name?</div>
              <input
                className="name-field"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setIsSubmit(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setIsSubmit(true);
                    handleButtonClick();
                  }
                }}
              ></input>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="body">
        {isSubmit ? (
          <div className="body-text">
            <TypeAnimation
              sequence={[
                `Hello, ${name}! Welcome to our website. We're glad to have you here.`,
                1000,
                () => {
                  setFlag(true);
                },
              ]}
              speed={20}
            ></TypeAnimation>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default Home;
