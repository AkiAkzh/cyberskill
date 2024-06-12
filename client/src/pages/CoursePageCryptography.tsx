import { FunctionComponent, useContext, useState } from "react";
import NavBar from "../components/NavBar";
import FooterContainer from "../components/FooterContainer";
import "./CoursePage.css";
import { Context } from "..";

import { useLanguage } from '../context/LanguageContext';
import { SHA256 } from "crypto-js";

const HintPopup: FunctionComponent<{ hint: string, onClose: () => void }> = ({ hint, onClose }) => (
  <div className="popup">
    <div className="popup-content">
      <button className="close-button" onClick={onClose}>&times;</button>
      <p>{hint}</p>
    </div>
  </div>
);
const translations = {
  EN: {
    answer0: "eadgtumknnu",
    answer1: "vulnerabilities",
    answer2: "external",
    answer3: "internal",
    answer4: "social",
    answer10: "active",
    answer11: "passive",
    CodePlaceholder: "Your function",
    incorrect: "Oops.. The answer is incorrect"
  },
  KZ: {
    answer0: "eadgtumknnu",
    answer1: "осалдықтар",
    answer2: "сыртқы",
    answer3: "ішкі",
    answer4: "әлеуметтік",
    answer10: "белсенді",
    answer11: "пассивті",
    CodePlaceholder: "Сіздің функцияңыз",
    incorrect: "Жауап дұрыс емес"
  },
  RU: {
    answer0: "eadgtumknnu",
    answer1: "уязвимости",
    answer2: "внешний",
    answer3: "внутренний",
    answer4: "социальный",
    answer10: "активный",
    answer11: "пассивный",
    CodePlaceholder: "Ваша функция",
    incorrect: "Ой.. Ответ неверен"
  },
}


const CoursePageCryptography: FunctionComponent = () => {


  const [code, setCode] = useState('');
  const [Prolanguage, setProLanguage] = useState('python');
  const {store} = useContext(Context);

  const initialAnswerState = { isCorrect: false, isSubmitted: false };
  const [userAnswers, setUserAnswers] = useState(["", ""]);
  const [answerStates, setAnswerStates] = useState(Array(120).fill(initialAnswerState));
  const [alertVisible, setAlertVisible] = useState(false);

  const { language, setLanguage } = useLanguage(); // Использование кастомного хука для управления языком
  const t = translations[language]; // Получение переводов на основе выбранного языка

  const studentEmail = "actual_user" // e-mail юзера
  const studentHashFlag1 = SHA256(studentEmail + "_pentest1").toString(); // зашифрованный flag юзера
  const studentHashFlag2 = SHA256(studentEmail + "_pentest2").toString();
  const studentHashFlag3 = SHA256(studentEmail + "_pentest3").toString();
  const studentHashFlag4 = SHA256(studentEmail + "_pentest4").toString();

  const correctAnswers = [t.answer0, t.answer1, t.answer2, t.answer3, t.answer4]; // массивых ответов на Задания
// Функция для обработки изменений в ответах пользователя
const handleAnswerChange = (index: number, value: string) => {
  setUserAnswers(prevState => {
    const updatedAnswers = [...prevState];
    updatedAnswers[index] = value.toLowerCase();
    return updatedAnswers;
  });
};

// Функция для обработки отправки ответа
const handleSubmits = (index: number) => {
  const isCorrect = userAnswers[index] === correctAnswers[index];
  const updatedAnswerStates = [...answerStates];
  updatedAnswerStates[index] = { isCorrect, isSubmitted: true };
  setAnswerStates(updatedAnswerStates);

  // Показывает ошибку на 3 сек, если ответ не правильный
  if (!isCorrect) {
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 3000);
  }
};
// Смена стиля кнопки в завимиости от правильности ответа
const getButtonStyle = (index: number) => {
  const { isCorrect, isSubmitted } = answerStates[index];
  return {
    backgroundColor: isSubmitted && isCorrect ? '#47dd00' : '',
    borderColor: isSubmitted && isCorrect ? '#47dd00' : '',
    color: isSubmitted && isCorrect ? 'white' : '',
    cursor: isSubmitted && isCorrect ? 'auto' : '',
  };
};

// Проверка правильности ответа при сабмишне
const isDisabled = (index: number) => answerStates[index].isSubmitted && answerStates[index].isCorrect;

// Смена текста кнопки в завимиости от правильности ответа
const getButtonText = (index: number) => answerStates[index].isSubmitted && answerStates[index].isCorrect ? 'Correct' : 'Submit';

  const pythonCodeSymmetrical = 
  `   def caesar_cipher_encrypt(text, shift):
        encrypted_text = ""
        for char in text:
            if char.isalpha():
                shift_base = 65 if char.isupper() else 97
                encrypted_text += chr((ord(char) - shift_base + shift) % 26 + shift_base)
            else:
                encrypted_text += char
        return encrypted_text
      message = "Hello, World!"
      shift = 3
      encrypted_message = caesar_cipher_encrypt(message, shift)
      print(f"Encrypted Message: {encrypted_message}")`
  const pythonCodeAsymmetric = 
    `   from Crypto.PublicKey import RSA
      key = RSA.generate(2048)
      private_key = key.export_key()
      public_key = key.publickey().export_key()

      print(f"Private Key: {private_key.decode('utf-8')}")
      print(f"Public Key: {public_key.decode('utf-8')}")`

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    store.answerSumbit(code, Prolanguage)

  };

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
        <h1 className="course-page-title">Introduction to Cryptography</h1>
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
              <div className="categorytypetext"> Cryptography</div>
            </div>
          </div>
          <div className="author-container">
            <div className="author">Author:</div>
            <div className="cyberskills">CyberSkills</div>
          </div>
        </div>
        <div className="course-page-description">
        Fundamental knowledge of cryptography
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
            <div className="dropdown-name">Introduction to Cryptography</div>
          </div>
          <div className="arrowdowncontainer">
            <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
          </div>
        </div>
        {isOpenArray[0] && (
          <div className="course-section-dropdown-container">
          <div className="questions-heading">Теоретическая часть</div>
            <p className="course-section-paragraph">
              Криптография – это наука о методах обеспечения конфиденциальности, целостности и подлинности информации. 
              История криптографии уходит корнями в глубокую древность, начиная с простых шифров Цезаря до сложных современных алгоритмов.
              <br/>Основные цели криптографии включают в себя:<br/>
              <p className="course-section-paragraph">
              <ol>
                <li>Конфиденциальность: защита данных от несанкционированного доступа.</li>
                <li>Целостность: защита данных от несанкционированного изменения.</li>
                <li>Аутентификация: подтверждение подлинности участников обмена информацией.</li>
                <li>Неотрекаемость: невозможность отречения от авторства сообщения.</li>
              </ol>
              </p>
            </p>

            <p className="course-section-paragraph">
              История криптографии начинается с древних времен, когда люди использовали простые шифры, такие как шифр Цезаря,
              для скрытия своих сообщений. С развитием технологий криптографические методы стали сложнее и безопаснее.
              <br/>Основные виды криптографии:<br/>
              <p className="course-section-paragraph">
              <ol>
                <li>Симметричная криптография: использует один ключ для шифрования и дешифрования данных. Примером является шифр Цезаря.</li>
                <li>Асимметричная криптография: использует два ключа – открытый для шифрования и закрытый для дешифрования. Примером является алгоритм RSA.</li>
              </ol>
              </p>
            </p>

            <hr />

            <p className="course-section-paragraph">Симметричное шифрование:<br/>
            Рассмотрим простой пример использования шифра Цезаря, который заменяет каждый символ в тексте на символ, 
            находящийся на несколько позиций вперед в алфавите.
              <div className="code-block-container">
                <div className="code-block">
                  <pre>
                    <code>
                      {pythonCodeSymmetrical}
                    </code>
                  </pre>
                </div>
              </div>
            </p>

            <p className="course-section-paragraph">
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
            
            <p className="course-section-paragraph">Асимметричное шифрование:<br/>
            Для генерации пары ключей в алгоритме RSA:<br/>
              <div className="code-block-container">
                <div className="code-block">
                  <pre>
                    <code>
                      {pythonCodeAsymmetric}
                    </code>
                  </pre>
                </div>
              </div>
            </p>

            <hr />

            <div className="questions-container">
              <div className="questions-heading">Практическая часть</div>
              <div className="question-box-container">
                <div className="question-text">
                <h4>Шифрование и дешифрование с использованием симметричного алгоритма:</h4>
                Напишите функцию для шифрования текста с использованием шифра Цезаря. 
                Зашифруйте слово "CyberSkills" с сдвигом 2. Затем расшифруйте его.<br/>
                </div><br/>
                <form className="anser-box-container" onSubmit={handleSubmit}>
                  <textarea className="answer-box-input-field-area" 
                      value={userAnswers[0]}
                      onChange={ (e) => handleAnswerChange(0, e.target.value)}
                      disabled = {isDisabled(0)}
                      placeholder= {`${t.CodePlaceholder}`}
                  />
                  <button className="submit-button" 
                    onClick={() => handleSubmits(0)}
                    disabled={isDisabled(0)}
                    style={getButtonStyle(0)}>
                      <div className="submit-button-text"
                      style={getButtonStyle(0)}>{getButtonText(0)}</div>
                  </button>
                  <button className="hint-button" onClick={() => showHint("Hint: Use the ASCII values of characters.")}>
                    <div className="hint-button-text" >Hint</div>
                  </button>
                  <select value={Prolanguage}
                   onChange={(e) => setProLanguage(e.target.value as 'python'|| 'java' || 'cpp')}>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </form>
              </div>
              <hr />
              <div className="question-box-container">
                <div className="question-text">
                <h4>Генерация и использование пары открытого и закрытого ключей в асимметричной криптографии:</h4>
                Используйте библиотеку PyCryptodome для генерации пары ключей RSA. 
                Реализуйте шифрование сообщения с использованием открытого ключа и его дешифрование с использованием закрытого ключа.
                </div><br/>
                  <form className="anser-box-container" onSubmit={handleSubmit}>
                    <textarea className="answer-box-input-field-area" 
                        value={userAnswers[1]}
                        onChange={ (e) => handleAnswerChange(1,e.target.value)}
                        disabled = {isDisabled(1)}
                        placeholder= {`${t.CodePlaceholder}`}
                    />
                    <button className="submit-button" 
                    onClick={() => handleSubmits(1)}
                    disabled={isDisabled(1)}
                    style={getButtonStyle(1)}>
                      <div className="submit-button-text"
                      style={getButtonStyle(1)}
                      >{getButtonText(1)}</div>
                    </button>
                    <button className="hint-button" onClick={() => showHint("Hint: Use the ASCII values of characters.")}>
                      <div className="hint-button-text" >Hint</div>
                    </button>
                    <select value={Prolanguage}
                    onChange={(e) => setProLanguage(e.target.value as 'python'|| 'java' || 'cpp')}>
                      <option value="python">Python</option>
                      <option value="java">Java</option>
                      <option value="cpp">C++</option>
                    </select>
                </form>
              </div>
            </div>
          </div>
        )}
        <div className="coursesectioncontainer" onClick={() => toggleSection(1)}>
          <div className="coursesectionbox">
            <div className="checkboxgraycontainer">
              <img
                className="checkboxgray-icon1"
                alt=""
                src="/checkboxgray.svg"
              />
            </div>
            <div className="coursesectionnametext">Symmetric algorithms</div>
          </div>
          <div className="arrowdowncontainer">
            <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
          </div>
        </div>
        {isOpenArray[1] && (
          <div className="course-section-dropdown-container">
            <p className="course-section-paragraph">
              Симметричные алгоритмы криптографии предполагают использование одного ключа как для шифрования, так и для расшифрования данных.
              Основные принципы работы симметричных алгоритмов заключаются в следующем: данные шифруются с использованием ключа, 
              затем зашифрованные данные можно расшифровать только с тем же ключом. Это обеспечивает высокий уровень безопасности,
               поскольку для расшифровки данных злоумышленнику необходимо узнать ключ, который должен быть хранится в безопасном месте.
            </p>
            
            <p className="course-section-paragraph">
              Пример: Представим, что Алиса хочет отправить сообщение Бобу, но хочет, чтобы только он мог его прочитать. 
              Она использует симметричный алгоритм шифрования, например, AES, чтобы зашифровать сообщение с помощью ключа.
              Затем она отправляет зашифрованное сообщение Бобу. Теперь только Боб может расшифровать сообщение, поскольку 
              только у него есть ключ.
            </p>

            <div className="questions-container">
              <hr/>
            <div className="questions-heading">Практическая часть</div>

              <div className="question-box-container">
                <div className="question-text">
                  Шифрование и дешифрование с использованием алгоритма AES.<br />
                  Напишите программу на языке программирования вашего выбора, которая позволяет пользователю ввести
                  текстовое сообщение и ключ, а затем шифрует это сообщение с использованием алгоритма AES.
                  После этого программа должна позволить пользователю расшифровать зашифрованное сообщение, введя ключ.
                </div><br />
                <form className="anser-box-container" onSubmit={handleSubmit}>
                  <textarea className="answer-box-input-field-area"
                    value={userAnswers[2]}
                    onChange={ (e) => handleAnswerChange(2, e.target.value)}
                    disabled = {isDisabled(2)}
                    placeholder= {`${t.CodePlaceholder}`}
                    
                  />
                  <button className="submit-button" 
                    onClick={() => handleSubmits(2)}
                    disabled={isDisabled(2)}
                    style={getButtonStyle(2)}>
                      <div className="submit-button-text"
                      style={getButtonStyle(2)}>{getButtonText(2)}</div>
                  </button>
                  <select value={Prolanguage}
                    onChange={(e) => setProLanguage(e.target.value as 'python' || 'java' || 'cpp')}>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </form>
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
            <div className="coursesectionnametext">Asymmetric algorithms</div>
          </div>
          <div className="arrowdowncontainer">
            <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
          </div>
        </div>
        {isOpenArray[2] && (
          <div className="course-section-dropdown-container">
            
            <div className="questions-heading">Теоретическая часть</div>
            <p className="course-section-paragraph">
            Асимметричная криптография, или криптография с открытым ключом, предполагает использование двух ключей: открытого и закрытого.<br/> 
              <p className="course-section-paragraph">
                <ol>
                  <li>Открытый ключ известен всем пользователям и используется для шифрования данных.</li>
                  <li>Закрытый ключ остается в секрете и используется для дешифрования зашифрованных сообщений.</li>
                </ol> 
              </p>
            </p>
              <img className="image-bii"
              loading="lazy"
              alt=""
              src="/asymmetric-encryption-public-key-cryptography.jpeg"
              /><br/> 
            <p className="course-section-paragraph">
            В отличие от симметричной криптографии, где один и тот же ключ используется для шифрования и дешифрования,
            асимметричная криптография обеспечивает высокий уровень безопасности благодаря использованию разных ключей для разных операций.
            Это означает, что даже если кто-то получит открытый ключ, он не сможет дешифровать сообщения, 
            зашифрованные с его помощью, без доступа к соответствующему закрытому ключу.
            </p>

            <p className="course-section-paragraph">
            Основные принципы работы асимметричных алгоритмов:<br/>
            <p className="course-section-paragraph">
            <ol>
                <li>Генерация пары ключей: Открытый ключ может быть свободно распространен, тогда как закрытый ключ должен храниться в секрете.</li>
                <li>Шифрование: Открытый ключ используется для шифрования данных.</li>
                <li>Дешифрование: Закрытый ключ используется для дешифрования данных, зашифрованных открытым ключом.</li>
                <li>Электронная подпись: Закрытый ключ используется для создания цифровой подписи, которую можно проверить с помощью открытого ключа, обеспечивая целостность и аутентичность данных.</li>
            </ol>
            </p>
            </p>

            <p className="course-section-paragraph">
            Применение асимметричной криптографии:<br/>
              <p className="course-section-paragraph">
              <ol>
                    <li>Шифрование данных: Обеспечение конфиденциальности при передаче данных.</li>
                    <li>Электронная подпись: Подтверждение подлинности и целостности данных.</li>
              </ol>
              </p>
            </p>
            <div className="questions-container">
              <div className="questions-heading">Практическая часть</div>

              <div className="question-box-container">
                <div className="question-text">
                Шифрование сообщения:<br/>
                После генерации ключей можно приступить к шифрованию сообщения. Например, у нас есть сообщение "CyberSkills".
                </div><br/>
                <form className="anser-box-container" onSubmit={handleSubmit}>
                  <textarea className="answer-box-input-field-area"
                    value={userAnswers[3]}
                    onChange={ (e) => handleAnswerChange(3, e.target.value)}
                    disabled = {isDisabled(3)}
                    placeholder= {`${t.CodePlaceholder}`}
                    
                  />
                  <button className="submit-button" 
                    onClick={() => handleSubmits(3)}
                    disabled={isDisabled(3)}
                    style={getButtonStyle(3)}>
                      <div className="submit-button-text"
                      style={getButtonStyle(3)}>{getButtonText(3)}</div>
                  </button>
                  <button className="hint-button" onClick={() => showHint("Hint: Use the ASCII values of characters.")}>
                    <div className="hint-button-text" >Hint</div>
                  </button>
                  <select value={Prolanguage}
                    onChange={(e) => setProLanguage(e.target.value as 'python' || 'java' || 'cpp')}>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </form>
              </div>
              <div className="question-box-container">
                <div className="question-text">
                Дешифрование сообщения:<br/>
                После шифрования сообщения мы можем попробовать его дешифровать с помощью закрытого ключа
                </div><br/>
                <form className="anser-box-container" onSubmit={handleSubmit}>
                  <textarea className="answer-box-input-field-area"
                    value={userAnswers[4]}
                    onChange={ (e) => handleAnswerChange(4, e.target.value)}
                    disabled = {isDisabled(4)}
                    placeholder= {`${t.CodePlaceholder}`}
                    
                  />
                  <button className="submit-button" 
                    onClick={() => handleSubmits(4)}
                    disabled={isDisabled(4)}
                    style={getButtonStyle(4)}>
                      <div className="submit-button-text"
                      style={getButtonStyle(4)}>{getButtonText(4)}</div>
                  </button>
                  <button className="hint-button" onClick={() => showHint("Hint: Use the ASCII values of characters.")}>
                    <div className="hint-button-text" >Hint</div>
                  </button>
                  <select value={Prolanguage}
                    onChange={(e) => setProLanguage(e.target.value as 'python' || 'java' || 'cpp')}>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
        )}
        <div className="coursesectioncontainer" onClick={() => toggleSection(3)}>
          <div className="coursesectionbox">
            <div className="checkboxgraycontainer">
              <img
                className="checkboxgray-icon1"
                alt=""
                src="/checkboxgray.svg"
              />
            </div>
            <div className="coursesectionnametext">Hash functions</div>
          </div>
          <div className="arrowdowncontainer">
            <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
          </div>
        </div>
        {isOpenArray[3] &&(
          <div className="course-section-dropdown-container">
            <p className="course-section-paragraph">
              Хэш-функции - это специальные математические функции, которые преобразуют входные данные произвольной
              длины в фиксированный набор битов, называемый хэшем. Одно из основных свойств хэш-функций - это односторонность, 
              что означает, что вычисление хэша от данных просто, но по хэшу невозможно восстановить исходные данные.
              Еще одно важное свойство - равномерность распределения, которая гарантирует, что любое изменение во входных 
              данных значительно изменит исходный хэш. Эти свойства делают хэш-функции незаменимыми в криптографических приложениях.
            </p>

            <p className="course-section-paragraph">
              <h4>Пример:</h4> 
              Представим, что у нас есть текстовый документ, и мы хотим проверить его целостность.
              Мы можем использовать хэш-функцию, чтобы создать уникальный хэш от содержимого этого документа.
              Если даже один символ в документе изменится, хэш будет сильно отличаться. Таким образом, при получении документа снова, 
              мы можем вычислить хэш снова и сравнить его с исходным хэшем, чтобы проверить, были ли изменения в документе.
            </p>

          <hr></hr>
            <div className="questions-container">
              <div className="questions-heading">Практическая часть</div>
              <div className="question-box-container">
                <div className="question-text">
                <h4>Создание и проверка цифровой подписи с использованием хэш-функций.</h4>
                Напишите программу на Python, которая принимает на вход текстовую строку, 
                создает цифровую подпись этой строки, используя хэш-функцию SHA-256, 
                а затем проверяет целостность сообщения, сравнивая полученную подпись с ожидаемой.
                </div><br/>
                <form className="anser-box-container" onSubmit={handleSubmit}>
                  <textarea className="answer-box-input-field-area"
                    value={userAnswers[5]}
                    onChange={ (e) => handleAnswerChange(5, e.target.value)}
                    disabled = {isDisabled(5)}
                    placeholder= {`${t.CodePlaceholder}`}
                    
                  />
                  <button className="submit-button" 
                    onClick={() => handleSubmits(5)}
                    disabled={isDisabled(5)}
                    style={getButtonStyle(5)}>
                      <div className="submit-button-text"
                      style={getButtonStyle(5)}>{getButtonText(5)}</div>
                  </button>
                  <button className="hint-button" onClick={() => showHint("Hint: Use the ASCII values of characters.")}>
                    <div className="hint-button-text" >Hint</div>
                  </button>
                  <select value={Prolanguage}
                    onChange={(e) => setProLanguage(e.target.value as 'python' || 'java' || 'cpp')}>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </form>
              </div>
              <div className="question-box-container">
                <div className="question-text">
                <h4>Реализация алгоритма MD5 или SHA-256 для хэширования данных.</h4>
                Напишите функцию на языке программирования по вашему выбору, 
                которая принимает на вход данные и возвращает их хэш с использованием алгоритма MD5 или SHA-256. 
                Затем протестируйте эту функцию на нескольких различных входных данных и убедитесь, что она возвращает
                 ожидаемые результаты.
                </div><br/>
                <form className="anser-box-container" onSubmit={handleSubmit}>
                  <textarea className="answer-box-input-field-area"
                    value={userAnswers[6]}
                    onChange={ (e) => handleAnswerChange(6, e.target.value)}
                    disabled = {isDisabled(6)}
                    placeholder= {`${t.CodePlaceholder}`}
                    
                  />
                  <button className="submit-button" 
                    onClick={() => handleSubmits(6)}
                    disabled={isDisabled(6)}
                    style={getButtonStyle(6)}>
                      <div className="submit-button-text"
                      style={getButtonStyle(6)}>{getButtonText(6)}</div>
                  </button>
                  <button className="hint-button" onClick={() => showHint("Hint: Use the ASCII values of characters.")}>
                    <div className="hint-button-text" >Hint</div>
                  </button>
                  <select value={Prolanguage}
                    onChange={(e) => setProLanguage(e.target.value as 'python' || 'java' || 'cpp')}>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </form>
              </div>
            </div>
          </div>
          
        )}
        <div className="coursesectioncontainer" onClick={() => toggleSection(4)}>
        <div className="coursesectionbox">
          <div className="checkboxgraycontainer">
            <img
              className="checkboxgray-icon1"
              alt=""
              src="/checkboxgray.svg"
            />
          </div>
          <div className="coursesectionnametext">Cryptographic attacks and protection against them</div>
        </div>
        <div className="arrowdowncontainer">
          <img className="arrowdownicon" alt="" src="/arrowdownicon.svg" />
        </div>
        </div>
        {isOpenArray[4] &&(
          <div className="course-section-dropdown-container">
            <p className="course-section-paragraph">
              Криптография играет ключевую роль в обеспечении безопасности данных, но она также подвержена различным атакам.
              Основные типы криптографических атак включают переборный поиск, атаки по времени и атаки на длину ключа. 
              Переборный поиск предполагает попытки всевозможных комбинаций ключей для расшифровки зашифрованных данных.
              Атаки по времени основаны на анализе времени, затрачиваемого на выполнение криптографических операций,
              чтобы извлечь информацию о ключе. Атаки на длину ключа направлены на уязвимости в алгоритмах шифрования,
              связанные с использованием слишком коротких ключей.
            </p>

            <p className="course-section-paragraph">
              <h4>Пример:</h4> 
              Предположим, у нас есть зашифрованное сообщение с использованием алгоритма шифрования AES с 128-битным ключом.
              Злоумышленник, зная алгоритм шифрования и видя зашифрованное сообщение, может запустить атаку переборного поиска,
              чтобы попытаться найти правильный ключ, путем последовательного проверяя все возможные комбинации битов ключа.
            </p>

          <hr></hr>
            <div className="questions-container">
              <div className="questions-heading">Практическая часть</div>
              <div className="question-box-container">
                <div className="question-text">
                <h4>Использование устойчивых алгоритмов шифрования для защиты данных.</h4>
                  Дано задание зашифровать текстовое сообщение с использованием алгоритма шифрования AES с ключом длиной не менее 256 бит.
                  Затем они должны расшифровать полученное зашифрованное сообщение, используя правильный ключ, 
                  чтобы проверить целостность данных.
                </div><br/>
                <form className="anser-box-container" onSubmit={handleSubmit}>
                  <textarea className="answer-box-input-field-area"
                    value={userAnswers[7]}
                    onChange={ (e) => handleAnswerChange(7, e.target.value)}
                    disabled = {isDisabled(7)}
                    placeholder= {`${t.CodePlaceholder}`}
                    
                  />
                  <button className="submit-button" 
                    onClick={() => handleSubmits(7)}
                    disabled={isDisabled(7)}
                    style={getButtonStyle(7)}>
                      <div className="submit-button-text"
                      style={getButtonStyle(7)}>{getButtonText(7)}</div>
                  </button>
                  <button className="hint-button" onClick={() => showHint("Hint: Use the ASCII values of characters.")}>
                    <div className="hint-button-text" >Hint</div>
                  </button>
                  <select value={Prolanguage}
                    onChange={(e) => setProLanguage(e.target.value as 'python' || 'java' || 'cpp')}>
                    <option value="python">Python</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                  </select>
                </form>
              </div>
              <div className="question-box-container">
                <div className="question-text">
                <h4>Экспериментальное определение уязвимостей алгоритмов шифрования с помощью известных атак.</h4>
                Студентам предоставляется набор зашифрованных сообщений с использованием различных алгоритмов шифрования и длин ключей.
                Используя известные методы криптоанализа, они должны попытаться восстановить исходные сообщения
                 и определить уязвимости каждого алгоритма.
                </div><br/>
                <div className="anser-box-container">
                  <input className="answer-box-input-field"
                    placeholder={`${t.CodePlaceholder}`}
                    type="text"
                    value={userAnswers[8]}
                    onChange={(e) => handleAnswerChange(8, e.target.value)}
                    disabled={isDisabled(8)}
                  />
                  <button className="submit-button"
                    onClick={() => handleSubmits(8)}
                    disabled={isDisabled(8)}
                    style={getButtonStyle(8)}
                  >
                    <div className="submit-button-text"
                      style={getButtonStyle(8)}
                    >{getButtonText(8 )}</div>
                  </button>
                </div>
              </div>
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

export default CoursePageCryptography;
