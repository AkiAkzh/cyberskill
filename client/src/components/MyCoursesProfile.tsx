import { FunctionComponent } from "react";
import "./MyCoursesProfile.css";

const FrameComponent: FunctionComponent = () => {
  return (
    <div className="my-courses">
      <div className="courses-inner">
        <h1 className="my-courses-heading">My Courses</h1>
        <div className="difficulty-buttons">
          <button className="all-button">
            <div className="all">All</div>
          </button>
          <button className="easy-button">
            <div className="filter-text">Easy</div>
          </button>
          <button className="medium-button">
            <div className="filter-text">Medium</div>
          </button>
          <button className="hard-button">
            <div className="filter-text">Hard</div>
          </button>
        </div>
      </div>
      <div className="search-input">
        <div className="search-bar">
          <div className="search-input-box" />
          <div className="search-icon-container">
            <img
              className="search-icon"
              loading="lazy"
              alt=""
              src="/search-icon.svg"
            />
          </div>
          <div className="search-placeholder">
            <input
              className="find-courses-by"
              placeholder="Find courses by title..."
              type="search"
            />
          </div>
        </div>
      </div>
      <div className="homes">
      <div className="card1">
        <div className="course-title-container">
          <div className="course-title">Network Security</div>
        </div>
        <div className="course-description-container">
          <div className="course-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius.wadfwafwfsafsafasfsaLorem ipsum dolor sit amet,
          </div>
        </div>
        <div className="author-container">
          <img
            className="author-icon-container"
            loading="lazy"
            alt=""
            src="/author-icon-container.svg"
          />
          <div className="author-name-container">
            <div className="author-name">Cyberskills</div>
          </div>
        </div>
        <div className="difficulty-container">
          <div className="difficulty-text">Difficulty:</div>
          <div className="difficulty-type-container">
            <div className="difficlty-easy">Easy</div>
          </div>
          <div className="difficulty-type-container-medium">
            <div className="difficlty-medium">Medium</div>
          </div>
        </div>
        <button className="continuebutton">
          <div className="continue">continue</div>
        </button>
      </div>
      <div className="card1">
        <div className="course-title-container">
          <div className="course-title">Network Security</div>
        </div>
        <div className="course-description-container">
          <div className="course-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Varius.wadfwafwfsafsafasfsaLorem ipsum dolor sit amet,
          </div>
        </div>
        <div className="author-container">
          <img
            className="author-icon-container"
            alt=""
            src="/author-icon-container.svg"
          />
          <div className="author-name-container">
            <div className="author-name">Cyberskills</div>
          </div>
        </div>
        <div className="difficulty-container">
          <div className="difficulty-text">Difficulty:</div>
          <div className="difficulty-type-hard">
            <div className="difficulty-hard">Hard</div>
          </div>
        </div>
        <button className="completed-button-disabled" disabled={true}>
          <div className="completed">COMPLETED</div>
        </button>
      </div>
    </div>
    </div>
  );
};

export default FrameComponent;
