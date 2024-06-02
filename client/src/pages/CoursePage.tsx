import { FunctionComponent, useState } from "react";
import NavBar from "../components/NavBar";
import FooterContainer from "../components/FooterContainer";
import "./CoursePage.css";

const HintPopup: FunctionComponent<{ hint: string, onClose: () => void }> = ({ hint, onClose }) => (
  <div className="popup">
    <div className="popup-content">
    <button className="close-button" onClick={onClose}>&times;</button>
      <p>{hint}</p>
    </div>
  </div>
);

const CoursePage: FunctionComponent = () => {
  const [isOpenArray, setIsOpenArray] = useState(new Array(3).fill(false));

  const toggleSection = (index: number) => {
    const updatedIsOpenArray = [...isOpenArray];
    updatedIsOpenArray[index] = !updatedIsOpenArray[index];
    setIsOpenArray(updatedIsOpenArray);
  };

  const [hintPopupVisible, setHintPopupVisible] = useState(false);
  const [hintText, setHintText] = useState("");

  const showHint = (hint: string) => {
    setHintText(hint);
    setHintPopupVisible(true);
  };

  const closeHintPopup = () => {
    setHintPopupVisible(false);
    setHintText("");
  };

  

  return (
    <div className="course-page">
      <NavBar />
      <div className="course-page-information-container">
        <h1 className="course-page-title">Network Security fundamentals</h1>
        <div className="course-page-tags-container">
          <div className="difficulty-container">
            <div className="difficulty-course-page">Difficulty:</div>
            <div className="difficulty-type">
              <div className="type-value">Easy</div>
            </div>
          </div>
          <div className="category-container">
            <div className="category">Category:</div>
            <div className="category-type">
              <div className="categorytypetext">Network Security</div>
            </div>
          </div>
          <div className="author-container">
            <div className="author">Author:</div>
            <div className="cyberskills">CyberSkills</div>
          </div>
        </div>
        <div className="course-page-description">
          Start learning Network Security fundamentals to master your
          information security skills.
        </div>
      </div>
      {/* Course sections Container */}
      <main className="coursesectionscontainer">
        <div className="coursesectioncontainer" onClick={() => toggleSection(0)} >
          <div className="coursesectionbox">
            <div className="checkboxgraycontainer">
              <img className="checkboxgray-icon" alt="" src="/checkboxgray.svg" />
            </div>
            <div className="coursesectionnametext">{/* здеся Название секции */}</div>
          </div>
          <div className="arrowdowncontainer">
            <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
          </div>
        </div>
        {isOpenArray[0] && (
          <div className="course-section-dropdown-container">
            {/* здеся теория */}
            <div className="questions-container">
              {/* Здеся должен быть задачи */}

            </div>
          </div>
        )}    
        
      </main>
      {/* Course sections Container END */}
      {hintPopupVisible && <HintPopup hint={hintText} onClose={closeHintPopup} />}
      <FooterContainer />
    </div>
  );
};

export default CoursePage;
