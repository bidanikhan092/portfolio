import React from "react";
import BurgerWeb from "../assets/Burger_King.png";
import Restraunt from "../assets/Restraunt.png";
import EducationalInstitute from "../assets/Coursezoid-Zarrtash.png";

export default function WebDisplay() {
  return (
    <>
      <h1 className="my-5" id="projects">Projects Display</h1>
      <div className="row">
        <div className="col-md">
          <div className="card mx-3" style={{maxHeight: "380px", minHeight: "380px"}}>
            <img src={BurgerWeb} className="card-img-top" alt="Burger Web" />
            <div className="card-body">
              <h5 className="card-title">BurgerWeb</h5>
              <p className="card-text">
                A hardcoded template made with HTML and Css, Perfect to make a
                few changes in the code and get your Burger restraunt site running
              </p>
            </div>
          </div>
        </div>
        <div className="col-md">
        <div className="card mx-3" style={{maxHeight: "380px", minHeight: "380px"}}>
            <img src={Restraunt} className="card-img-top" alt="Burger Web" />
            <div className="card-body">
              <h5 className="card-title">Restraunt</h5>
              <p className="card-text">
                A hardcoded template made with HTML and Css, Perfect to make a
                few changes in the code and get your restraunt site running
              </p>
            </div>
          </div>
        </div>
        <div className="col-md">
        <div className="card mx-3" style={{maxHeight: "380px", minHeight: "380px"}}>
            <img src={EducationalInstitute} className="card-img-top" alt="Burger Web" />
            <div className="card-body">
              <h5 className="card-title">Educational Institute</h5>
              <p className="card-text">
                A hardcoded template made with HTML,Css And Javascript(for custom sliders), Perfect to make a
                few changes in the code and get your Educational site running
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
