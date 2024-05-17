import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import LanguageSelection from "../components/LanguageSelection";
import NavBar from "../components/NavBar";
import "./WelcomePage.css";

const WelcomePage1: FunctionComponent = () => {
  return (
    <div className="welcomepage1">
      <section className="herocontainer-parent">
        <div className="herocontainer">
          <div className="wrapper-image-6">
            <img
              className="image-6-icon"
              loading="lazy"
              alt=""
              src="/image-61@2x.png"
            />
          </div>
          <div className="herocontent">
            <h1 className="welcomeheader">
              Discover your path to <br></br>cybersecurity proficiency here
            </h1>
            <div className="welcomesubtext">
              Dive into real-world scenarios with tasks designed to sharpen your
              cybersecurity skills through practical experience.
            </div>
            <Link className="startbutton" to="/courses">
              <div className="start-now">Start now</div>
            </Link>
          </div>
        </div>
        
        <NavBar/>
      </section>
      <section className="welcomepage-inner">
        <div className="frame-parent1">
          <div className="learnthetheory-wrapper">
            <div className="learnthetheory">
              <div className="learnthetheory-inner">
                <div className="learn-the-theory-and-practice-parent">
                  <h1 className="learn-the-theory">
                    Learn the theory and practice
                  </h1>
                  <div className="master-the-fundamentals">
                    Master the fundamentals and apply them in real-world
                    scenarios with our comprehensive approach to cybersecurity
                    education.
                  </div>
                  <Link className="beginlearningbutton4" to="/login-page">
                    <div className="begin-learning">begin learning</div>
                  </Link>
                </div>
              </div>
              <div className="shieldicon">
                <div className="elipse">
                  <div className="elipse-child" />
                </div>
                <div className="shield">
                  <img
                    className="icon2"
                    loading="lazy"
                    alt=""
                    src="/5-21@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="frame-wrapper1">
            <div className="our-main-goal-group">
              <h1 className="our-main-goal1">Our main goal</h1>
              <div className="firewallicon-group">
                <div className="firewallicon1">
                  <div className="firewallicon-child">
                    <div className="ellipse-div" />
                  </div>
                  <div className="wrapper">
                    <img
                      className="icon3"
                      loading="lazy"
                      alt=""
                      src="/4-11@2x.png"
                    />
                  </div>
                </div>
                <div className="the-platform-prepares1">
                  The platform prepares students for the ever-changing
                  cybersecurity landscape by promoting comprehensive information
                  security education.
                </div>
              </div>
              <a className="beginlearningbutton5">
                <div className="about-us9">About us</div>
              </a>
            </div>
          </div>
          <div className="multilingual">
            <div className="multilingual-inner">
              <div className="multilingual-education-parent">
                <h1 className="multilingual-education">
                  Multilingual education
                </h1>
                <div className="the-platform-integrates">
                  The platform integrates a multilingual approach, presenting
                  educational content in Kazakh, Russian, and English to
                  accommodate the diverse linguistic backgrounds of IT
                  university students in Kazakhstan.
                </div>
                <Link className="beginlearningbutton6" to="/login-page">
                  <div className="begin-learning1">begin learning</div>
                </Link>
              </div>
            </div>
            <div className="virusicon">
              <div className="virusicon-inner">
                <div className="frame-child1" />
              </div>
              <div className="container">
                <img
                  className="icon4"
                  loading="lazy"
                  alt=""
                  src="/3-11@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="readytostart-wrapper">
            <div className="readytostart1">
              <div className="readytostart-child">
                <div className="ready-to-start-learning-inform-group">
                  <h1 className="ready-to-start1">
                    Ready to start learning information security?
                  </h1>
                  <div className="getstartedbutton2">
                    <Link className="get-started1" to="/sign-up-page">
                      Register
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-wrapper">
        <div className="footer3">
          <div className="footercontainer3">
            <a className="logo9">CyberSkills</a>
            <div className="fotterlinks3">
              <Link className="frame-a" to="/login-page">
                <div className="dashboard11">Dashboard</div>
              </Link>
              <Link className="courses-frame" to="/login-page">
                <div className="courses10">Courses</div>
              </Link>
              <a className="about-us-frame">
                <a className="about-us10">About us</a>
              </a>
            </div>
            <Link className="loginbutton2" to="/login-page">
              <div className="login8">Login</div>
            </Link>
          </div>
          <div className="emails3">
            <div className="vector-parent2">
              <img
                className="vector-icon5"
                loading="lazy"
                alt=""
                src="/vector3@2x.png"
              />
              <div className="astanaitedukz6">212456@astanait.edu.kz</div>
            </div>
            <div className="vector-parent3">
              <img className="vector-icon6" alt="" src="/vector3@2x.png" />
              <div className="astanaitedukz7">212456@astanait.edu.kz</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WelcomePage1;
