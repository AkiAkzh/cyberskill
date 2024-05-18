import { FunctionComponent } from "react";
import "./CourseSections.css";

const CourseSections: FunctionComponent = () => {
  return (
    <section className="coursesections">
      <div className="coursesectionheadingconainer">
        <h2 className="coursesectionheading">
          Course
          <span className="sections"> sections</span>
        </h2>
      </div>
      <div className="coursesectionslist">
        <div className="coursesectiontitlecontainer">
          <div className="coursesectiontitle">
            <ul className="">
              <li>Passive Reconnaissance</li>
            </ul>
          </div>
        </div>
        <div className="coursesectiontitlecontainer">
          <div className="coursesectiontitle">
            <ul className="">
              <li>Active Reconnaissance</li>
            </ul>
          </div>
        </div>
        <div className="coursesectiontitlecontainer">
          <div className="coursesectiontitle">
            <ul className="">
              <li>Nmap Live Host Discovery</li>
            </ul>
          </div>
        </div>
        <div className="coursesectiontitlecontainer">
          <div className="coursesectiontitle">
            <ul className="">
              <li>Nmap Post Port Scans</li>
            </ul>
          </div>
        </div>
        <div className="coursesectiontitlecontainer">
          <div className="coursesectiontitle">
            <ul className="">
              <li>Nmap Post Port Scans</li>
            </ul>
          </div>
        </div>
        <div className="coursesectiontitlecontainer">
          <div className="coursesectiontitle">
            <ul className="">
              <li>Nmap Post Port Scans</li>
            </ul>
          </div>
        </div>
        <div className="coursesectiontitlecontainer">
          <div className="coursesectiontitle">
            <ul className="">
              <li>Nmap Post Port Scans</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseSections;
