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

const CoursePageCryptography: FunctionComponent = () => {
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
            <div className="checkboxgreencontainer">
              <img
                className="checkboxgreen-icon"
                alt=""
                src="/checkboxgreen.svg"
              />
            </div>
            <div className="dropdown-name">Cryptography</div>
          </div>
          <div className="arrowdowncontainer">
            <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
          </div>
        </div>
        {isOpenArray[0] && (
          <div className="course-section-dropdown-container">
            <p className="course-section-paragraph">
              Криптография – это наука о методах обеспечения конфиденциальности, целостности и подлинности информации. История криптографии уходит корнями в глубокую древность, начиная с простых шифров Цезаря до сложных современных алгоритмов. Основные цели криптографии включают в себя:
              <ol>
                <li>Конфиденциальность: защита данных от несанкционированного доступа.</li>
                <li>Целостность: защита данных от несанкционированного изменения.</li>
                <li>Аутентификация: подтверждение подлинности участников обмена информацией.</li>
                <li>Неотрекаемость: невозможность отречения от авторства сообщения.</li>
              </ol>
            </p>

            <p className="course-section-paragraph">
              Основные виды криптографии делятся на <b>симметричную и асимметричную</b>. <br />
              Симметричная криптография использует один ключ для шифрования и дешифрования данных. Примером такого алгоритма является AES (Advanced Encryption Standard). <br />
              Асимметричная криптография использует два ключа: открытый для шифрования и закрытый для дешифрования. Примером является алгоритм RSA.
            </p>

            <p className="course-section-paragraph">
              Пример: <br />
              Предположим, мы хотим зашифровать сообщение "HELLO" с использованием симметричного алгоритма Цезаря с ключом смещения 3. <br />
              Шифрование:
              <ul>
                <li>H → K</li>
                <li>E → H</li>
                <li>L → O</li>
                <li>L → O</li>
                <li>O → R</li>
              </ul>
              Таким образом, зашифрованное сообщение будет "KHOOR". <br />
            </p>

            <p className="course-section-paragraph">
              Дешифрование:
              <ul>
                <li>K → H</li>
                <li>H → E</li>
                <li>O → L</li>
                <li>O → L</li>
                <li>R → O</li>
              </ul>
            </p>

            <div className="questions-container">
              <div className="questions-heading">Практическая часть</div>

              <div className="question-box-container">
                <div className="question-text">
                  Реализуйте симметричное шифрование и дешифрование с использованием алгоритма Цезаря. Напишите программу на любом языке программирования, которая принимает текст и ключ смещения, шифрует текст и затем расшифровывает его.
                </div>
                <div className="anser-box-container">
                  <textarea className="answer-box-input-field-textarea" />
                  <button className="submit-button">
                    <div className="submit-button-text">Submit</div>
                  </button>
                  <button className="hint-button" onClick={() => showHint("Hint: Use the ASCII values of characters.")}>
                    <div className="hint-button-text" >Hint</div>
                  </button>
                </div>
              </div>
              <div className="question-box-container">
                <div className="question-text">
                  Напишите программу для генерации пары открытого и закрытого ключей с использованием алгоритма RSA. Реализуйте функции шифрования и дешифрования сообщений с использованием этой пары ключей.
                </div>
                <div className="anser-box-container">
                  <input
                    className="answer-box-input-field"
                    placeholder="Answer"
                    type="text"
                  />
                  <button className="submit-button">
                    <div className="submit-button-text">Submit</div>
                  </button>
                  <button className="hint-button" onClick={() => showHint("Hint: Use a library like PyCryptodome for Python.")}>
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
              <img
                className="checkboxgray-icon1"
                alt=""
                src="/checkboxgray.svg"
              />
            </div>
            <div className="coursesectionnametext">Passive Reconnaissance</div>
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
      {/* Course sections Container END */}
      {hintPopupVisible && <HintPopup hint={hintText} onClose={closeHintPopup} />}
      <FooterContainer />
    </div>
  );
};

export default CoursePageCryptography;
