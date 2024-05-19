import React,{ FunctionComponent } from "react";
import { Link } from "react-router-dom";
import FooterContainer from "../components/FooterContainer";
import NavBar from "../components/NavBar";
import { useLanguage } from '../context/LanguageContext';
import "./WelcomePage.css";

const translations = {
  EN: {
    header: "Discover your path to information security proficiency here",
    subtext: "Dive into real-world scenarios with tasks designed to sharpen your information security skills through practical experience.",
    startButton: "Start now",
    theory: "Learn the theory and practice",
    theory_subtext: "Master the fundamentals and apply them in real-world scenarios with our comprehensive approach to information security education.",
    begin_learning_button: "Begin Learning",
    our_goal: "Our main goal",
    our_goal_subtext: "The platform prepares students for the ever-changing information security landscape by promoting comprehensive information security education.",
    about_us_button: "About us",
    multilingual: "Multilingual education",
    multilingual_subtext: "The platform integrates a multilingual approach, presentingeducational content in Kazakh, Russian, and English to accommodate the diverse linguistic backgrounds of IT university students in Kazakhstan.",
    ready_start: "Ready to start learning information security?",
    register_button: "Register",
    // Добавьте остальные переводы
  },
  KZ: {
    header: "Ақпараттық қауіпсіздікті меңгеру жолын осы жерден табыңыз",
    subtext: "Практикалық тәжірибе арқылы киберқауіпсіздік дағдыларыңызды жетілдіруге арналған тапсырмалармен нақты жағдайларға терең үңіліңіз.",
    startButton: "Бастау",
    theory: "Теория мен практиканы үйреніңіз",
    theory_subtext: "Ақпараттық қауіпсіздікті оқытуға кешенді көзқарасымызды қолдана отырып, негіздерді меңгеріңіз және оларды нақты әлем сценарийлерінде қолданыңыз.",
    begin_learning_button: "Оқуды Бастаңыз",
    our_goal: "Біздің басты мақсатымыз",
    our_goal_subtext: "Платформа студенттерді ақпараттық қауіпсіздік бойынша жан-жақты білім беруді ілгерілету арқылы ақпараттық қауіпсіздіктің үнемі өзгеріп отыратын ландшафтына дайындайды.",
    about_us_button: "Біз туралы",
    multilingual: "Көптілді білім беру",
    multilingual_subtext: "Платформа Қазақстандағы IT-университет студенттерінің алуан түрлі лингвистикалық негіздерін ескере отырып, қазақ, орыс және ағылшын тілдеріндегі білім беру мазмұнын ұсына отырып, көптілді тәсілді біріктіреді.",
    ready_start: "Ақпараттық қауіпсіздікті үйренуге дайынсыз ба?",
    register_button: "Тіркелу",
    // Добавьте остальные переводы
  },
  RU: {
    header: "Узнайте о своем пути к повышению квалификации в области информационной безопасности здесь",
    subtext: "Погружайтесь в реальные сценарии с заданиями, разработанными для улучшения ваших навыков в области кибербезопасности через практический опыт.",
    startButton: "Начать",
    theory: "Изучайте теорию и практику",
    theory_subtext: "Овладейте основами и применяйте их в реальных ситуациях благодаря нашему комплексному подходу к обучению информационной безопасности.",
    begin_learning_button: "Начините обучение",
    our_goal: "Наша главная цель",
    our_goal_subtext: "Платформа готовит студентов к постоянно меняющимся условиям информационной безопасности, продвигая всестороннее образование в области информационной безопасности.",
    about_us_button: "О нас",
    multilingual: "Многоязычное обучение",
    multilingual_subtext: "Платформа использует многоязычный подход, представляя образовательный контент на казахском, русском и английском языках, чтобы учесть различные языковые особенности студентов ИТ-вузов Казахстана.",
    ready_start: "Готовы начать изучать информационную безопасность?",
    register_button: "Регистрация",
    // Добавьте остальные переводы
  },
};

const WelcomePage: FunctionComponent = () => {
  const { language, setLanguage } = useLanguage();
  const t = translations[language];
  return (
    <div className="welcome-page-main">
      <section className="welcome-page-header">
      <NavBar/>
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
            {t.header}
            </h1>
            <div className="welcome-page-text">
            {t.subtext}
            </div>
            <Link className="welcome-page-start-button" to="/courses">
              <div className="welcome-page-start-now-text">{t.startButton}</div>
            </Link>
          </div>
        </div>
      </section>
      <section className="welcome-page-landing">
        <div className="welcome-page-landing-container">
          <div className="welcome-page-landing-info-block">
            <div className="info-block">
              <div className="info-block-inner">
                <div className="info-block-text-container">
                  <h1 className="info-block-header-text">
                  {t.theory}
                  </h1>
                  <div className="info-block-main-text">
                  {t.theory_subtext}
                  </div>
                  <Link className="info-block-button" to="/login-page">
                    <div className="begin-learning">{t.begin_learning_button}</div>
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
              <h1 className="our-main-goal1">{t.our_goal}</h1>
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
                {t.our_goal_subtext}
                </div>
              </div>
              <a className="beginlearningbutton5">
                <div className="about-us9">{t.about_us_button}</div>
              </a>
            </div>
          </div>
          <div className="multilingual">
            <div className="multilingual-inner">
              <div className="multilingual-education-parent">
                <h1 className="multilingual-education">
                {t.multilingual}
                </h1>
                <div className="the-platform-integrates">
                {t.multilingual_subtext}
                </div>
                <Link className="beginlearningbutton6" to="/login-page">
                  <div className="begin-learning1">{t.begin_learning_button}</div>
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
                  {t.ready_start}
                  </h1>
                  <div className="getstartedbutton2">
                    <Link className="get-started1" to="/sign-up-page">
                    {t.register_button}
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
