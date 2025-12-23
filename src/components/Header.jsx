import React from "react";
import MainCharacter from "../assets/main_character.WebP";
import CV from "/WebDev-CV.pdf";

export default function Header() {
  return (
    <div className="main_content d-flex justify-content">
      <div className="main_para">
        <h1> Hi, I'm
        <br />
        <span className="nameHighlight">Muhammad Ahmad,</span>
        <br />
        <span className="smallinH1">and I have been</span> <span className="HighlightH1">making websites for over 6 years! </span></h1> 
        <div className="mt-3">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=bidanikhan092@gmail.com"
            className="btn btn-primary btn-lg fw-bold me-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Let's Work Together
          </a>
          <a
            href={CV}
            className="btn btn-outline-secondary btn-lg fw-bold"
            download
          >
            Download My CV
          </a>
        </div>
      </div>
      <div className="main_image">
        <img src={MainCharacter} alt="main character" loading="lazy" />
      </div>
    </div>
  );
}
