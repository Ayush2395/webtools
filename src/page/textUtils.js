import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/animation/53357-typing-in-the-office.json";
import { useState } from "react";

function TextUtils() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [text, setText] = useState("");

  function uppercase() {
    setText(text.toUpperCase());
  }

  function lowercase() {
    setText(text.toLowerCase());
  }

  function copy() {
    const copyText = document.querySelector("textarea");
    copyText.select();
    copyText.setSelectionRange(0, 999999);

    navigator.clipboard.writeText(copyText.value);
  }

  function clear() {
    setText("");
  }

  return (
    <>
      <div className="section textUtils">
        <div className="banner">
          <h1 style={{ color: "var(--yellow-color)" }}>Text Utility</h1>
          <div className="animation">
            <Lottie options={defaultOptions} width={305} height={305} />
          </div>
        </div>
        <div className="input_fields">
          <div className="textarea">
            <textarea
              placeholder=""
              className="textarea_input"
              name="text"
              id="text"
              cols="30"
              rows="10"
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <label htmlFor="text">Type your text here</label>
          </div>
          <div className="grid btn_utils">
            <button className="button" onClick={uppercase}>
              Uppercase
            </button>
            <button className="button" onClick={lowercase}>
              Lowercase
            </button>
            <button className="button" onClick={copy}>
              Copy
            </button>
            <button className="button" onClick={clear}>
              Clear
            </button>
          </div>
          <h1 className="title">Your Summary</h1>
          <p>
            {text.length} has characters and {text.split(" ").length} has words
          </p>
        </div>
      </div>
    </>
  );
}

export default TextUtils;
