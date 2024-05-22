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
  const [flagInput, setFlagInput] = useState('');
  const [isCorrect, setIsCorrect] = useState(false);

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

  const checkFlag = () => {
    if (flagInput === 'Lol') {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="course-page">
      <NavBar />
      <div className="course-page-information-container">
        <h1 className="course-page-title">Pentest Introduction</h1>
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
              <div className="categorytypetext">Pentest</div>
            </div>
          </div>
          <div className="author-container">
            <div className="author">Author:</div>
            <div className="cyberskills">CyberSkills</div>
          </div>
        </div>
        <div className="course-page-description">
          Start learning Pentest to master your
          information security skills.
        </div>
      </div>
      <main className="coursesectionscontainer">
        <div className="coursesectioncontainer" onClick={() => toggleSection(0)} >
          <div className="coursesectionbox">
            <div className="checkboxgraycontainer">
              <img className="checkboxgray-icon" alt="" src="/checkboxgray.svg" />
            </div>
            <div className="coursesectionnametext">Pentest intro</div>
          </div>
          <div className="arrowdowncontainer">
            <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
          </div>
        </div>
        {isOpenArray[0] && (
          <div className="course-section-dropdown-container">
            <p className="course-section-paragraph">
              In this task, you need to find the flag hidden on the server. 
              Connect to the server using the following command:
              <pre>docker-compose up</pre>
              Then, navigate to <code>http://localhost:8000/flag</code> to find the flag.
            </p>

            <div className="questions-container">
              <div className="questions-heading">Questions</div>
              <div className="question-box-container">
                <div className="question-text">
                  Enter the flag
                </div>
                <div className="answer-box-container">
                  <input
                    className="answer-box-input-field"
                    placeholder="Answer"
                    type="text"
                    value={flagInput}
                    onChange={(e) => setFlagInput(e.target.value)}
                    disabled={isCorrect} // Делаем поле ввода неактивным, если ответ уже правильный
                  />
                  <button className={`submit-button ${isCorrect ? 'correct' : ''}`} onClick={checkFlag} disabled={isCorrect}>
                    <div className="submit-button-text">{isCorrect ? 'Correct!' : 'Submit'}</div>
                  </button>
                  {isCorrect && <p className="success-text">Correct!</p>}
                  {!isCorrect && flagInput && <p className="error-text">Incorrect, try again.</p>}
                  <button className="hint-button" onClick={() => showHint("Hint: The flag is in the /flag endpoint.")}>
                    <div className="hint-button-text">Hint</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="coursesectioncontainer" onClick={() => toggleSection(2)}>
          <div className="coursesectionbox">
            <div className="checkboxgraycontainer">
              <img className="checkboxgray-icon1" alt="" src="/checkboxgray.svg" />
            </div>
            <div className="coursesectionnametext">Pentest 2</div>
          </div>
          <div className="arrowdowncontainer">
            <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
          </div>
        </div>
        {isOpenArray[2] && (
          <div className="course-section-dropdown-container">
            Drop Down Test 2
          </div>
        )}
      </main>
      {hintPopupVisible && <HintPopup hint={hintText} onClose={closeHintPopup} />}
      <FooterContainer />
    </div>
  );
};

export default CoursePage;

