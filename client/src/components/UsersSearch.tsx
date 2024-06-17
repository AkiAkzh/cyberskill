import { FunctionComponent, useContext, useEffect, useState } from "react";
import "./UsersSearch.css";
import { data_users } from "../data_users"
import { Context } from "..";
import CourseService from "../services/CourseServies";
import UserService from "../services/UserServies";
import { IUser } from "../models/IUser";
import { observer } from "mobx-react-lite";

const UsersSearch: FunctionComponent = () => {
  const [search, setSearch] = useState('')
  const [visibleUsers, setVisibleUsers] = useState(5); // начальное количество видимых пользователей
  const [selectedRole, setSelectedRole] = useState('All'); // начально выбран фильтр "All" для роли
  const [selectedUniversity, setSelectedUniversity] = useState('All'); // начально выбран фильтр "All" для университета
  const {store} = useContext(Context);
  const [user, setUser] = useState('');
  const [users, setUsers] = useState<IUser[]>([]);;
  const showMoreUsers = () => {
    setVisibleUsers(visibleUsers + 5); // увеличиваем количество видимых пользователей на 7
  };
  const handleRoleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  const handleUniversityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedUniversity(e.target.value);
  };

  useEffect( ()=>{
    if(store.isAuth){
    setUser(store.user.email);
    }
    
    async function fetchData() {
      const response = await UserService.fetchUsers();
      setUsers(response.data);
    }
    fetchData();
  },[])

  return (
    <div className="user-search-main">
      <div className="search-container">
        <div className="filter-search">
          <select className="role-select" onChange={handleRoleChange}>
            <option value="" disabled selected>Role</option>
            <option value="All">All</option>
            <option value="Student">Student</option>
            <option value="Creator">Creator</option>
            <option value="Admin">Admin</option>
          </select>
          <select className="university-select" onChange={handleUniversityChange}>
            <option value="" disabled selected>University</option>
            <option value="All">All</option>
            <option value="Astana IT University">Astana IT University</option>
            <option value="Nazarbayev University">Nazarbayev University</option>
            <option value="IITU">IITU</option>
          </select>
        </div>
        <div className="search-users-input">
          <div className="search-input-box-parent">
            <div className="search-input-box" />
            <div className="search-icon-container">
              <img
                className="search-icon"
                loading="lazy"
                alt=""
                src="/search-icon.svg"
              />
            </div>
            <div className="search-placeholder-wrapper">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="search-placeholder"
                placeholder="Find users by email..."
                type="search"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="admin-search-table">
        {users
          .filter(item => selectedRole === "All" ? true : item.role === selectedRole)
          .filter(item => selectedUniversity === "All" ? true : item.university === selectedUniversity)
          .filter((item) => {
            return search.toLowerCase() === '' ? item : item.email.toLowerCase().includes(search.toLowerCase());
          }).slice(0, visibleUsers).map((item) => (
            <div className="user-row" key={item.id}>
              <button className="user-avatar">
                <img className="avatar-icon1" alt="" src="/avatar-1@2x.png" />
              </button>
              <div className="user-email">{item.email}</div>
              <div className="user-role">{item.role}</div>
              <div className="user-role">Completed tasks: {item.completedTask}</div>
              <div className="user-university">{item.university}</div>
              <button className="reset-password-button">
                <div className="reset-password-button-text">Reset password</div>
              </button>
              <button className="delete-user-button">
                <div className="delete-user-button-text">Delete</div>
              </button>
            </div>
          ))}

      </div>
      <div className="show-more-button-wrapper">
        {visibleUsers <= data_users.length && ( // показываем кнопку "Show more" только если есть еще пользователи для показа
          <button className="show-more-button-course" onClick={showMoreUsers}>
            <div className="show-more-text-course">Show more</div>
          </button>
        )}
      </div>
    </div>
  );
};

export default observer(UsersSearch);

