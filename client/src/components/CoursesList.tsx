import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import "./MyCoursesBlock.css";
import { CourseInfo } from "../models/CourseInfo";
import CourseService from "../services/CourseServies";
import { IUser } from "../models/IUser";
import { Context } from "..";
import { redirect } from "react-router-dom";
import { CLIENT_URL } from "../http";

const CoursesList: FunctionComponent = () => {
  const [search, setSearch] = useState('')
  const [visibleCourses, setVisibleCourses] = useState(7); // начальное количество видимых курсов
  const [selectedCategory, setSelectedCategory] = useState('All'); // начально выбран фильтр "All" категорий
  const [course, setCourses] = useState<CourseInfo[]>([]);
  const [user, setUser] = useState<IUser>();
  const [selectedFilter, setSelectedFilter] = useState('All'); // начально выбран фильтр "All"

  const {store} = useContext(Context);
  useEffect( ()=>{
    if(store.isAuth){
    setUser(store.user);
    }
    
    async function fetchData() {
      const response = await CourseService.getAllCourses();
      setCourses(response.data);
    }
    fetchData();
  },[])
  
  const showMoreCourses = () => {
    setVisibleCourses(visibleCourses + 7); // увеличиваем количество видимых курсов на 7
  };

  
  const handleFilterChange = (filter: string) => {
    setSelectedFilter(filter);
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleClickStart = async ( title: string) => {
    store.setCourse(title);
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
            <select className="course-category" onChange={handleCategoryChange}>
              <option value="All">All</option>
              <option value="Pentest">Pentest</option>
              <option value="Cryptography">Cryptography</option>
              <option value="Network Security">Network Security</option>
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
        
        {course
          .filter(item => selectedFilter === 'All' ? true : item.difficulty === selectedFilter)
          .filter(item => selectedCategory === "All" ? true : item.category === selectedCategory)
          .filter((item) => {
            return search.toLowerCase() === '' ? item : item.title.toLowerCase().includes(search.toLowerCase());
          }).slice(0, visibleCourses).map((item) => (
            <div className="Course-card" key={item.title}>
              <div className="Course-title-wrapper">
                <div className="Course-title-label">
                  {item.title}
                </div>
              </div>
              <div className="Description-wrapper">
                <div className="Description-label">
                  {item.description}
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
                    {item.author}
                  </div>
                </div>
              </div>
              <div className="Difficulty-Category">
                <div className="Difficulty-wrapper">
                  <div className="Difficulty-label">Difficulty:</div>
                  <div className={`${item.difficulty}-color-difficult`}>
                    <div className={`${item.difficulty}-label`}>
                      {item.difficulty}
                    </div>
                  </div>
                </div>
                <div className="Category-wrapper">
                  <div className="Category-label">Category:</div>
                  <div className="Category-color">
                    <div className="Category-block">
                      {item.category}
                    </div>
                  </div>
                </div>
              </div>
              <div className="continue-remove-container">
                {user?.Course && user.Course.length > 0&& user?.Course.includes(item.title) ?  (
                  <>
                    <button className="continue-button-container">
                      <div className="continue-label">Continue</div>
                    </button>
                    <button className="remove-button-container">
                      <div className="remove-label">Remove</div>
                    </button>
                  </>
                ):(
                  <>
                  <button className="start-course-button-container" onClick={() => handleClickStart( item.title) }>
                    <a className="start-course-label" href={`/courses/${item.title}`} >Start</a>
                  </button>
                  <div>
                    <div></div>
                  </div>
                  </>
                ) }
              </div>

            </div>
          ))}
      </div>
      <div className="showmore-container">
      {visibleCourses < course.length && ( // показываем кнопку "Show more" только если есть еще курсы для показа
          <button className="show-more-button-course" onClick={showMoreCourses}>
            <div className="show-more-text-course">Show more</div>
          </button>
        )}
        </div>
        
    </section>
  );
};

export default (CoursesList);
