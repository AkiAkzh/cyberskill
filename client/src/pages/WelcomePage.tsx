import React,{ FunctionComponent } from "react";
import { Link } from "react-router-dom";
import LanguageSelection from "../components/LanguageSelection";
import FooterContainer from "../components/FooterContainer";
import NavBar from "../components/NavBar";
import "./WelcomePage.css";

const WelcomePage: FunctionComponent = () => {
  return (
    <div className="welcome-page-main">
      <section className="welcome-page-header">
        <div className="welcome-page-header-container">
          <div className="welcome-page-header-photo">
            <img
              className="image-6-icon"
              loading="lazy"
              alt=""
              src="/image-61@2x.png"
            />
          </div>
          <div className="welcome-page-text-container">
            <h1 className="welcome-page-text-header">
              Discover your path to <br></br>cybersecurity proficiency here
            </h1>
            <div className="welcome-page-text">
              Dive into real-world scenarios with tasks designed to sharpen your
              cybersecurity skills through practical experience.
            </div>
            <Link className="welcome-page-start-button" to="/courses">
              <div className="welcome-page-start-now-text">Start now</div>
            </Link>
          </div>
        </div>
        
        <NavBar/>
      </section>
      <section className="welcome-page-landing">
        <div className="welcome-page-landing-container">
          <div className="welcome-page-landing-info-block">
            <div className="info-block">
              <div className="info-block-inner">
                <div className="info-block-text-container">
                  <h1 className="info-block-header-text">
                    Learn the theory and practice
                  </h1>
                  <div className="info-block-main-text">
                    Master the fundamentals and apply them in real-world
                    scenarios with our comprehensive approach to cybersecurity
                    education.
                  </div>
                  <Link className="info-block-button" to="/login-page">
                    <div className="begin-learning">begin learning</div>
                  </Link>
                </div>
              </div>
              <div className="info-block-frame-container">
                <div className="elipse">
                  <div className="elipse-child" />
                </div>
                <div className="info-block-frame-field">
                  <img
                    className="info-block-frame-icon"
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
      <FooterContainer/>
    </div>
  );
};

export default WelcomePage;
