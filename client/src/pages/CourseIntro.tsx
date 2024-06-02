import { FunctionComponent } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";
import FooterContainer from "../components/FooterContainer";
import "./CourseIntro.css";

const CourseIntroPentest: FunctionComponent = () => {
  const easy = "easy"
  return (
    <div className="course-intro">
      <NavBar />
      <section className="courseinformationcontainer">
      <div className="coursetitle">
        <h1 className="coursetitleheading">{/* Здеся тайтл*/}</h1>
      </div>
      <div className="course-page-tags-container">
          <div className="difficulty-container">
            <div className="difficulty-course-page">Difficulty:</div>
            <div className={`${easy}-color-difficult`}>
              <div className="type-value">{/* Здеся сложность*/}</div>
            </div>
          </div>
          <div className="category-container">
            <div className="category">Category:</div>
            <div className="category-type">
              <div className="categorytypetext">{/*Здеся категориa*/}</div>
            </div>
          </div>
          <div className="author-container">
            <div className="author">Author:</div>
            <div className="cyberskills">{/* ЗДеся автор */}</div>
          </div>
        </div>
      <div className="coursedescriptioncontainer">
        <p className="coursedescriptiontext">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mauris felis, vehicula eu dapibus et, tristique vel nisl. Duis venenatis sapien eget turpis laoreet placerat.
          <ul className="">
            <li className="">
              Curabitur a hendrerit lacus. Duis in nisi malesuada, molestie
              dolor a, bibendum urna. Nullam sagittis vestibulum feugiat. Ut
              sapien mauris, tincidunt imperdiet augue vel, tristique dignissim
              nisi.
            </li>
            <li className="">
              Duis viverra commodo eros, quis placerat risus consequat eu. Donec
              ut dictum quam, vitae rutrum velit. Sed magna tortor, dapibus ut
              magna eu, viverra volutpat felis. Sed auctor purus id iaculis
              hendrerit.
            </li>
          </ul>
          Curabitur ac metus nec odio rhoncus imperdiet. Donec non ex eu erat molestie elementum. Nunc vehicula feugiat arcu in aliquet. Quisque ac velit sed ligula dictum accumsan sit amet tempor ante. Aenean tristique dui nec aliquet suscipit.
        </p>
      </div>
      <div className="buttonscontainer">
        <Link className="startlearningbutton" to="/course-page-pentest" >
          <div className="startlearningcontainer">
            <div className="startlearningbuttontext">Start learning</div>
            <div className="arrowiconcontainer">
              <img className="arrowicon" alt="" src="/arrowicon.svg" />
            </div>
          </div>
        </Link>
        <button className="continuebutton">
          <div className="continuebuttontext">CONTINUE</div>
        </button>
      </div>
    </section>
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
      <FooterContainer />
    </div>
  );
};

export default CourseIntroPentest;
