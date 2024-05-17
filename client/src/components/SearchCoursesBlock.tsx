import React,{ FunctionComponent } from "react";
import "./SearchCoursesBlock.css";

const SearchCoursesBlock: FunctionComponent = () => {
  return (
    <section className="continue-button1">
      <div className="frame-parent3">
        <div className="frame-wrapper3">
          <div className="frame-parent4">
            <button className="all-wrapper">
              <div className="all">All</div>
            </button>
            <button className="easy-frame">
              <div className="easy2">Easy</div>
            </button>
            <button className="medium-container">
              <div className="medium1">Medium</div>
            </button>
            <button className="hard-wrapper">
              <div className="hard">Hard</div>
            </button>
            <select className="course-category">
              <option value="All">All</option>
              <option value="Pentest">Pentest</option>
              <option value="Cryptography">Cryptography</option>
            </select>
          </div>
        </div>
        <div className="frame-wrapper4">
          <div className="rectangle-group">
            <div className="frame-child2" />
            <div className="search-fill0-wght400-grad0-ops">
              <img
                className="vector-icon7"
                loading="lazy"
                alt=""
                src="/vector2.svg"
              />
            </div>
            <div className="find-courses-by-title-wrapper">
              <input
                className="find-courses-by"
                placeholder="Find courses by title..."
                type="search"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchCoursesBlock;
