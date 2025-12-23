import BurgerWeb from "../assets/Burger_King.WebP";
import Restraunt from "../assets/Restraunt.WebP";
import EducationalInstitute from "../assets/Coursezoid-Zarrtash.WebP";
import TextEditor from "../assets/TextEditor.webp";
import NewsFree from "../assets/NewsFree.webp";
import iNotebook from "../assets/Inotebook.webp";
import Skotix from "../assets/Skotix.webp";

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
                <h5 className="card-title fw-bold text-primary">
                  Educational Institute
                </h5>
                <p className="card-text text-muted">
                  A hardcoded template made with HTML, CSS, and JavaScript (for
                  custom sliders). Perfect for minor code modifications to get
                  your educational site running.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow-sm border-0 rounded overflow-hidden">
              <img
                src={TextEditor}
                className="card-img-top"
                alt="A professional Text Editor"
                style={{ objectFit: "cover", height: "200px" }}
                loading="lazy"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-primary">
                  Skotix Text Editor
                </h5>
                <p className="card-text text-muted">
                  A Text Editor made with React js and bootstrap, it has
                  multiple functions which makes copywriting, blog writing, or
                  story telling smoother and easier. You can check how much time
                  an average person would take to read your text because first
                  impression is last impression.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow-sm border-0 rounded overflow-hidden">
              <img
                src={NewsFree}
                className="card-img-top"
                alt="A news application"
                style={{ objectFit: "cover", height: "200px" }}
                loading="lazy"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-primary">NewsFree</h5>
                <p className="card-text text-muted">
                  NewsFree is a user-friendly website for getting
                  up-to-the-minute news. It's built with technologies called
                  React.js and Bootstrap. These tools allow it to pull live news
                  updates from a service called{" "}
                  <b>
                    <a href="https://newsapi.org" target="_blank">
                      newsAPI
                    </a>
                  </b>
                  , so you stay informed with the latest happenings.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow-sm border-0 rounded overflow-hidden">
              <img
                src={iNotebook}
                className="card-img-top"
                alt="iNotebook a full stack notebook application"
                style={{ objectFit: "cover", height: "200px" }}
                loading="lazy"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-primary">iNotebook</h5>
                <p className="card-text text-muted">
                  iNotebook is a full stack web application that allows users to
                  write down there notes, its primary purpose is for tasks that
                  a person wants to save to overview later. It is built with
                  React for the FrontEnd, bootstrap for the styling and node js
                  with Express for the backend and it uses MongoDB for its
                  Database.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
            <div className="card shadow-sm border-0 rounded overflow-hidden">
              <img
                src={Skotix}
                className="card-img-top"
                alt="WordPress portfolio"
                style={{
                  objectFit: "cover",
                  height: "200px",
                  objectPosition: "top",
                }}
                loading="lazy"
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold text-primary">
                  Skotix Portfolio <br /><span className="redirected">(Permanent Redirected to <a href="https://skotix.vercel.app/">new site</a>)</span>
                </h5>
                <p className="card-text text-muted">
                  Skotix is my brand baseed portfolio made with WordPress, it
                  has been implemented with top level SEO making it rank 1st on
                  any search realted to "Skotix Web Development". Its main
                  purpose is to showcase my skillset and experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
