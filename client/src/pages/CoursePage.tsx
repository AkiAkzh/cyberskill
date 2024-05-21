import { FunctionComponent, useState } from "react";
import NavBar from "../components/NavBar";
import FooterContainer from "../components/FooterContainer";
import "./CoursePage.css";


const CoursePage: FunctionComponent = () => {
  const [isOpenArray, setIsOpenArray] = useState(new Array(3).fill(false));

  const toggleSection = (index: number) => {
    const updatedIsOpenArray = [...isOpenArray];
    updatedIsOpenArray[index] = !updatedIsOpenArray[index];
    setIsOpenArray(updatedIsOpenArray);
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
            <div className="coursesectionnametext">Passive Reconnaissance</div>
          </div>
          <div className="arrowdowncontainer">
            <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
          </div>
        </div>
        {isOpenArray[0] && (
          <div className="course-section-dropdown-container">
            <p className="course-section-paragraph">
              In essence, Burp Suite is a Java-based framework designed to
              serve as a comprehensive solution for conducting web application
              penetration testing. It has become the industry standard tool
              for hands-on security assessments of web and
              mobile applications, including those that rely
              on application programming interfaces (APIs).
            </p>
            <p className="course-section-paragraph">
              Simply put, Burp Suite captures and enables manipulation of all
              the HTTP/HTTPS traffic between a browser and a web server. This
              fundamental capability forms the backbone of the framework. By
              intercepting requests, users have the flexibility to route them
              to various components within the Burp Suite framework, which we
              will explore in upcoming sections. The ability to intercept,
              view, and modify web requests before they reach the target
              server or even manipulate responses before they are received by
              our browser makes Burp Suite an invaluable tool for manual web
              application testing.
            </p>

            <img
              className="image1-icon"
              loading="lazy"
              alt=""
              src="/image1@2x.png"
            />
            <p className="course-section-paragraph">
              Before the dawn of computer systems and networks, in the Art of
              War, Sun Tzu taught, “If you know the enemy and know yourself,
              your victory will not stand in doubt.” If you are playing the
              role of an attacker, you need to gather information about your
              target systems. If you are playing the role of a defender, you
              need to know what your adversary will discover about your
              systems and networks.
            </p>
            <p className="blank-line">&nbsp;</p>
            <p className="course-section-paragraph">
              Reconnaissance <i className="recon"> (recon) </i> can be defined as a preliminary survey to gather information
              about a target. It is the first step in
              <b className="the-unified-kill">The Unified Kill Chain</b> to gain an initial foothold on a system. We divide reconnaissance into:
              <ol className="">
                <li className="">
                  Passive Reconnaissance
                </li>
                <li>
                  Active Reconnaissance
                </li>
              </ol>
            </p>


            <img
              className="image2-icon"
              loading="lazy"
              alt=""
              src="/image2@2x.png"
            />

            <p className="course-section-paragraph">
              This record shows a web server;
              <i> however, as mentioned already, Shodan.io collects information related to any device it can find connected online. </i>
              Searching for
              <b>tryhackme.com</b> on Shodan.io will display at least the record shown in the
              screenshot above. Via this Shodan.io search result, we can
              learn several things related to our search, such as:
              <ul className="">
                <li className="">
                  IP address
                </li>
                <li className="">
                  hosting company
                </li>
                <li className="">
                  geographic location
                </li>
                <li>
                  server type and version
                </li>
              </ul>
            </p>


            <div className="questions-container">
              <div className="questions-heading">Questions</div>
              <div className="question-box-container">
                <div className="question-text">
                  According to Shodan.io, what is the 2nd country in the world
                  in terms of the number of publicly accessible Apache servers?
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
                  <button className="hint-button">
                    <div className="hint-button-text">Hint</div>
                  </button>
                </div>
              </div>
              <div className="question-box-container">
                <div className="question-text">
                  According to Shodan.io, what is the 2nd country in the world
                  in terms of the number of publicly accessible Apache servers?
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
                  <button className="hint-button">
                    <div className="hint-button-text">Hint</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className="coursesectioncontainer" onClick={() => toggleSection(1)} >
          <div className="coursesectionbox">
            <div className="checkboxgreencontainer">
              <img
                className="checkboxgreen-icon"
                alt=""
                src="/checkboxgreen.svg"
              />
            </div>
            <div className="dropdown-name">Passive Reconnaissance</div>
          </div>
          <div className="arrowdowncontainer">
            <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
          </div>
        </div>
        {isOpenArray[1] && (
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
                  <button className="hint-button">
                    <div className="hint-button-text">Hint</div>
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
                  <button className="hint-button">
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
      <FooterContainer />
    </div>
  );
};

export default CoursePage;
