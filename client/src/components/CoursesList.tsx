import React, { FunctionComponent, useState } from "react";
import "./MyCoursesBlock.css";
import {data} from "../data"

const CoursesList: FunctionComponent = () => {
  const [search, setSearch] = useState('')
  const [visibleCourses, setVisibleCourses] = useState(7); // начальное количество видимых курсов

  const showMoreCourses = () => {
    setVisibleCourses(visibleCourses + 7); // увеличиваем количество видимых курсов на 7
  };
  const [selectedFilter, setSelectedFilter] = useState('All'); // начально выбран фильтр "All"

  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };
  return (
    
    <section className="Courses-container">
      <section className="SearchBlock-container">
      <div className="Filter-parent">
        <div className="Frame-wrapper">
          <div className="Frame-parent">
            <button className={selectedFilter === 'All' ? 'filter-option-selected' : 'filter-option'} onClick={() => handleFilterChange('All')}>
              <div className={selectedFilter === 'All' ? "option-label-selected" : 'option-label'}>All</div>
            </button>
            <button className={selectedFilter === 'Easy' ? 'filter-option-selected' : 'filter-option'} onClick={() => handleFilterChange('Easy')}>
              <div className={selectedFilter === 'Easy' ? "option-label-selected" : 'option-label'}>Easy</div>
            </button>
            <button className={selectedFilter === 'Medium' ? 'filter-option-selected' : 'filter-option'} onClick={() => handleFilterChange('Medium')}>
              <div className={selectedFilter === 'Medium' ? "option-label-selected" : 'option-label'}>Medium</div>
            </button>
            <button className={selectedFilter === 'Hard' ? 'filter-option-selected' : 'filter-option'} onClick={() => handleFilterChange('Hard')}>
              <div className={selectedFilter === 'Hard' ? "option-label-selected" : 'option-label'}>Hard</div>
            </button>
            <select className="course-category">
              <option value="All">All</option>
              <option value="Pentest">Pentest</option>
              <option value="Cryptography">Cryptography</option>
            </select>
          </div>
        </div>
        <div className="Search-wrapper">
          <div className="Search-input-group">
            <div className="frame-child2" />
            <div className="icon-search">
              <img
                className="icon-search-vector"
                loading="lazy"
                alt=""
                src="/vector2.svg"
              />
            </div>
            <div className="find-courses-by-title-wrapper">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="find-courses-by"
                placeholder="Find courses by title..."
                type="search"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
      <div className="my-courses-container">
        <h1 className="my-courses">My Courses</h1>
      </div>
      <div className="courses-list-container">
      { data
      .filter(item => selectedFilter === 'All' ? true : item.Difficulty === selectedFilter)
      .filter((item) => {
          return search.toLowerCase() === '' ? item : item.Title.toLowerCase().includes(search.toLowerCase());
        }).slice(0, visibleCourses).map((item) => (
          <div className="Course-card" key={item.id}>
          <div className="Course-title-wrapper">
            <div className="Course-title-label">
              {item.Title}
            </div>
          </div>
          <div className="Description-wrapper">
            <div className="Description-label">
              {item.Description}
            </div>
          </div>
          <div className="Author-info-wrapper">
            <img
              className="Person-icon"
              loading="lazy"
              alt=""
              src="/person-fill1-wght400-grad0-opsz24-11.svg"
            />
            <div className="Author-name-container">
              <div className="Author-label">
                {item.Author}
              </div>
            </div>
          </div>
          <div className="Difficulty-wrapper">
            <div className="Difficulty-label">Difficulty:</div>
            <div className={`${item.Difficulty}-color-difficult`}>
                <div className={`${item.Difficulty}-label`}>
                  {item.Difficulty}
                </div>
          </div>
          </div>
          <div className="continue-remove-container">
            <button className="continue-button-container">
              <div className="continue-label">continue</div>
            </button>
            <button className="remove-button-container">
                <div className="remove-label">Remove</div>
            </button>
          </div>
        </div>
        ))}
      </div>
      <div className="footer-container">
      {visibleCourses < data.length && ( // показываем кнопку "Show more" только если есть еще курсы для показа
          <button className="show-more-button" onClick={showMoreCourses}>
            <div className="show-more-text">Show more</div>
          </button>
        )}
        </div>
        
    </section>
  );
};

export default CoursesList;
