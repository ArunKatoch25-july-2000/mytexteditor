import React, { useState } from "react";
import Navbar from "./Navbar";
import "../css/home.css";
import cut from "../images/cut.png";
import closeBlack from "../images/closeBlack.png";
import copy from "../images/copy.png";
import paste from "../images/paste.png";

const Home = () => {
  const [value, setValue] = useState("");
  const copyText = async () => {
    let textarea = document.getElementById("textarea").value;
    let alertMsg = document.getElementById("alertMsg");
    let alert_span = document.querySelector(".alert_span");
    navigator.clipboard.writeText(textarea).then(() => {
      alertMsg.style.display = "flex";
      if (textarea.length >= 1) {
        alert_span.innerText = "Text Copied successfully...";
      } else {
        alert_span.innerText = "Nothing to copy";
      }
    });
  };
  const pasteData = async () => {
    navigator.clipboard
      .readText()
      .then(
        (textarea) => (document.querySelector("#textarea").value += textarea)
      );
  };

  const alertClose = () => {
    document.getElementById("alertMsg").style.display = "none";
  };
  const capitalize = () => {
    document.getElementById("textarea").style.textTransform = "capitalize";
  };
  const lowercase = () => {
    document.getElementById("textarea").style.textTransform = "lowercase";
  };
  const uppercase = () => {
    document.getElementById("textarea").style.textTransform = "uppercase";
  };
  const bold = () => {
    document.getElementById("textarea").style.fontWeight = "bold";
  };
  const italic = () => {
    document.getElementById("textarea").style.fontStyle = "italic";
  };
  const underline = () => {
    document.getElementById("textarea").style.textDecoration = "underline";
  };
  const removespaces = () => {
    let newText = value.split(/[ ]+/);
    setValue(newText.join(" "));
  };
  return (
    <>
      <Navbar />
      <main className="main_container">
        <section className="main_content_section">
          <h1>
            Welcome to My Text Editor-
            <span> Format your text here as per your need</span>
          </h1>
          <textarea
            type="text"
            id="textarea"
            value={value}
            onChange={({ target: { value } }) => setValue(value)}
          />
          <div className="btns_container">
            <div className={"btns_inside"}>
              <button onClick={capitalize}>Capitalize</button>
              <button onClick={lowercase}>lowercase</button>
              <button onClick={uppercase}>UPPERCASE</button>
              <button onClick={removespaces}>Remove Spaces</button>
            </div>
          </div>
          <div className="format_styles_right">
            <button onClick={bold}>B</button>
            <button onClick={italic}>
              <i>I</i>
            </button>
            <button onClick={underline}>
              <u>U</u>
            </button>
            <button title="copy" id="copy" onClick={copyText}>
              <img src={copy} alt="cut_img" />
            </button>
            <button title="paste" id="paste" onClick={pasteData}>
              <img src={paste} alt="cut_img" />
            </button>
          </div>
        </section>
      </main>
      <div id="alertMsg" className="">
        <span className="alert_span"></span>
        <img src={closeBlack} alt="closeBlack" onClick={alertClose} />
      </div>
    </>
  );
};

export default Home;
