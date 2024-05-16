import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./WelcomeFooter.css";

const WelcomeFooter: FunctionComponent = () => {
  return (
    <section className="platform-prepares">
      <div className="footer5">
        <div className="footercontainer5">
          <a className="logo16" href="#">
            CyberSkills
          </a>
          <div className="fotterlinks5">
            <div className="dashboard-wrapper4">
              <Link className="dashboard18" to="/login-page">
                Dashboard
              </Link>
            </div>
            <div className="courses-wrapper1">
              <Link className="courses19" to="/login-page">
                Courses
              </Link>
            </div>
            <div className="about-us-wrapper1">
              <a className="about-us16" href="#">
                About us
              </a>
            </div>
          </div>
          <Link className="loginbutton5" to="/login-page">
            <div className="login13">Login</div>
          </Link>
        </div>
        <div className="emails5">
          <div className="vector-parent6">
            <img
              className="vector-icon11"
              loading="lazy"
              alt=""
              src="/vector1@2x.png"
            />
            <div className="astanaitedukz10">212456@astanait.edu.kz</div>
          </div>
          <div className="vector-parent7">
            <img className="vector-icon12" alt="" src="/vector1@2x.png" />
            <div className="astanaitedukz11">212456@astanait.edu.kz</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeFooter;
