import React from "react";
import Navbar from "./Navbar";
import "../css/about.css";

const About = () => {
  return (
    <>
      <Navbar />
      <section className="main_about_section">
        <h1>My Text Editor:</h1>
        <p>
          My text editor is free online text editor platform where you can play
          with your text. You can easily modify your text by using the tools
          provided in this app. You can easily bold, italic, underline, change
          your text lowercase to UPPERCASE, UPPERCASE to lowercase, Capitalize
          your text & Remove extra spaces from your text. After edit your text
          you easily copy your text into your clipboard and paste anywhere you
          want.
        </p>

        <div className="about_details">
          <span>Tags:</span>
          <ul>
            <li>
              <strong>Bold</strong>
            </li>
            <li>
              <i>Italic</i>
            </li>
            <li>
              <u>Underline</u>
            </li>
            <li>Capitalize</li>
            <li>lowercase</li>
            <li>UPPERCASE</li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default About;
