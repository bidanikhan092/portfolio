import React from "react";


export default function About() {
  return (
    <div className="container my-5 About" id="about">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h1 className="text-center fw-bold text-primary mb-4">About Me</h1>
          <p className="fs-5 text-muted text-justify">
            Hi, I'm{" "}
            <span className="fw-bold text-primary">Muhammad Ahmad Ghazi</span>,
            a<span className="fw-bold"> Full Stack Developer</span> and
            <span className="fw-bold"> WordPress Expert</span> with over
            <span className="fw-bold"> half a decade</span> of experience in creating
            high-quality, custom-built websites. My expertise lies in
            <span className="fw-bold">
              {" "}
              React Development
            </span>
            , as well as{" "}
            <span className="fw-bold">
              Nest api development
            </span>
            , enabling me to build visually stunning and highly functional
            websites with ease.
          </p>

          <h2 className="fw-bold text-primary text-center my-4">What I Do</h2>
          <ul className="fs-5 list-unstyled">
            <li>
              ✔{" "}
              <span className="fw-bold">
                Custom WordPress Theme Development
              </span>{" "}
              – Crafting unique, fully responsive themes
            </li>
            <li>
              ✔ <span className="fw-bold">WordPress Plugin Development</span> –
              Extending functionality with custom plugins
            </li>
            <li>
              ✔ <span className="fw-bold">Elementor & Page Builders</span> –
              Creating modern, dynamic, and flexible layouts
            </li>
            <li>
              ✔ <span className="fw-bold">Performance Optimization</span> –
              Ensuring speed, efficiency, and smooth user experience
            </li>
                        <li>
              ✔ <span className="fw-bold">React Development</span> –
              Creating modern React sites which allow for a better user experience
            </li>
                        <li>
              ✔ <span className="fw-bold">Nest/Node API Development</span> –
              making API's that make your website functional while being protected and secure
            </li>
          </ul>

          <p className="fs-5 text-center fw-bold text-primary mt-4">
            I am passionate about building{" "}
            <span className="text-dark">
              efficient, fast, and high-quality solutions
            </span>{" "}
            that blend functionality with design excellence. Let's build
            something amazing! 🚀
          </p>
        </div>
      </div>
      <div className="text-center mt-3 mb-2">
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=bidanikhan092@gmail.com"
          className="btn btn-primary btn-lg fw-bold me-3"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Work Together
        </a>
      </div>
    </div>
  );
}
