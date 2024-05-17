import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import CoursesHeader from "../components/CoursesHeader";
import SearchCoursesBlock from "../components/SearchCoursesBlock";
import "./Courses.css";

const Courses1: FunctionComponent = () => {
  return (
    <div className="courses">
      <NavBar />
      <CoursesHeader />
      <SearchCoursesBlock />
      <section className="homes-wrapper">
        <div className="homes">
          <div className="card1">
            <div className="network-security-wrapper">
              <h2 className="network-security">Network Security</h2>
            </div>
            <div className="lorem-ipsum-dolor-sit-amet-co-wrapper">
              <div className="lorem-ipsum-dolor">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Varius.wadfwafwfsafsafasfsa
              </div>
            </div>
            <div className="person-fill1-wght400-grad0-ops-parent">
              <img
                className="person-fill1-wght400-grad0-ops-icon"
                loading="lazy"
                alt=""
                src="/person-fill1-wght400-grad0-opsz24-11.svg"
              />
              <div className="cyberskills-wrapper">
                <div className="cyberskills1">Cyberskills</div>
              </div>
            </div>
            <div className="difficulty-parent">
              <div className="difficulty">Difficulty:</div>
              <div className="easy-wrapper">
                <div className="easy">Easy</div>
              </div>
            </div>
            <div className="continuebutton-wrapper">
              <button className="continuebutton">
                <div className="start-course">Start course</div>
              </button>
            </div>
          </div>
          <div className="card11">
            <div className="network-security-container">
              <h2 className="network-security1">Network Security</h2>
            </div>
            <div className="lorem-ipsum-dolor-sit-amet-co-container">
              <div className="lorem-ipsum-dolor1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Varius.wadfwafwfsafsafasfsa
              </div>
            </div>
            <div className="person-fill1-wght400-grad0-ops-group">
              <img
                className="person-fill1-wght400-grad0-ops-icon1"
                alt=""
                src="/person-fill1-wght400-grad0-opsz24-11.svg"
              />
              <div className="cyberskills-container">
                <div className="cyberskills2">Cyberskills</div>
              </div>
            </div>
            <div className="difficulty-group">
              <div className="difficulty1">Difficulty:</div>
              <div className="medium-wrapper">
                <div className="medium">Medium</div>
              </div>
            </div>
            <button className="continuebutton-container">
              <button className="continuebutton1" disabled={true}>
                <div className="added">Added</div>
              </button>
            </button>
          </div>
          <div className="card12">
            <div className="network-security-frame">
              <h2 className="network-security2">Network Security</h2>
            </div>
            <div className="lorem-ipsum-dolor-sit-amet-co-frame">
              <div className="lorem-ipsum-dolor2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Varius.wadfwafwfsafsafasfsa
              </div>
            </div>
            <div className="person-fill1-wght400-grad0-ops-container">
              <img
                className="person-fill1-wght400-grad0-ops-icon2"
                alt=""
                src="/person-fill1-wght400-grad0-opsz24-11.svg"
              />
              <div className="cyberskills-frame">
                <div className="cyberskills3">Cyberskills</div>
              </div>
            </div>
            <div className="difficulty-container">
              <div className="difficulty2">Difficulty:</div>
              <button className="frame-wrapper">
                <div className="easy-container">
                  <div className="easy1">Easy</div>
                </div>
              </button>
            </div>
            <button className="continuebutton-frame">
              <button className="continuebutton2" disabled={true}>
                <div className="added1">Added</div>
              </button>
            </button>
          </div>
        </div>
      </section>
      <div className="footer-container">
        <button className="show-more-button">
          <div className="show-more-text">Show more</div>
        </button>
      </div>
      <section className="footer">
        <div className="footercontainer">
          <Link className="logo1" to="/dashboard">
            CyberSkills
          </Link>
          <div className="fotterlinks">
            <Link className="dashboard1" to="/dashboard">
              Dashboard
            </Link>
            <a className="courses2">Courses</a>
            <a className="about-us1">About us</a>
          </div>
          <a className="accountbutton">
            <div className="account">Account</div>
          </a>
        </div>
        <div className="emails">
          <div className="vector-parent">
            <img className="vector-icon" alt="" src="/vector-11.svg" />
            <div className="astanaitedukz">212456@astanait.edu.kz</div>
          </div>
          <div className="vector-group">
            <img className="vector-icon1" alt="" src="/vector-11.svg" />
            <div className="astanaitedukz1">212456@astanait.edu.kz</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses1;
