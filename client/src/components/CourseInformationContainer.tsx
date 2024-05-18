import { FunctionComponent } from "react";
import "./CourseInformationContainer.css";
import { Link } from "react-router-dom";

const CourseInformationContainer: FunctionComponent = () => {
  return (
    <section className="courseinformationcontainer">
      <div className="coursetitle">
        <h1 className="coursetitleheading">Network Security fundamentals</h1>
      </div>
      <div className="coursetagscontainer">
        <div className="difficultycontainer">
          <div className="difficulty">Difficulty:</div>
          <div className="difficultytype-easy">
            <div className="difficultytypetext">Easy</div>
          </div>
          <div className="difficultytype-medium">
            <div className="difficultytypetext">Medium</div>
          </div>
          <div className="difficultytype-hard">
            <div className="difficultytypetext">Hard</div>
          </div>
        </div>
        <div className="categorycontainer">
          <div className="category">Category:</div>
          <div className="categorytype">
            <div className="type-name">Network Security</div>
          </div>
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
        <Link className="startlearningbutton" to="/coursepage" >
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
  );
};

export default CourseInformationContainer;
