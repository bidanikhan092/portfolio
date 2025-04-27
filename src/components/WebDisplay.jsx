import React from "react";
import BurgerWeb from "../assets/Burger_King.WebP";
import Restraunt from "../assets/Restraunt.WebP";
import EducationalInstitute from "../assets/Coursezoid-Zarrtash.WebP";

export default function WebDisplay() {
  return (
    <>
      <div className="container my-5">
      <h1 className="text-center text-primary fw-bold mb-4" id="projects">
        Projects Display
      </h1>

      <div className="row">
        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card shadow-sm border-0 rounded overflow-hidden">
            <img
              src={BurgerWeb}
              className="card-img-top"
              alt="Burger Web"
              style={{ objectFit: "cover", height: "200px" }}
              loading="lazy"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold text-primary">BurgerWeb</h5>
              <p className="card-text text-muted">
                A hardcoded template made with HTML and CSS. Perfect for minor
                code modifications to get your burger restaurant site running.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card shadow-sm border-0 rounded overflow-hidden">
            <img
              src={Restraunt}
              className="card-img-top"
              alt="Restaurant Web"
              style={{ objectFit: "cover", height: "200px" }}
              loading="lazy"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold text-primary">Restaurant</h5>
              <p className="card-text text-muted">
                A hardcoded template made with HTML and CSS. Perfect for minor
                code modifications to get your restaurant site running.
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
          <div className="card shadow-sm border-0 rounded overflow-hidden">
            <img
              src={EducationalInstitute}
              className="card-img-top"
              alt="Educational Institute Web"
              style={{ objectFit: "cover", height: "200px" }}
              loading="lazy"
            />
            <div className="card-body text-center">
              <h5 className="card-title fw-bold text-primary">Educational Institute</h5>
              <p className="card-text text-muted">
                A hardcoded template made with HTML, CSS, and JavaScript (for
                custom sliders). Perfect for minor code modifications to get
                your educational site running.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
