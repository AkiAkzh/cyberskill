import { FunctionComponent } from "react";
import "./UsersSearch.css";

const UsersSearch: FunctionComponent = () => {
  return (
    <div className="user-search-main">
      <div className="search-container">
        <div className="filter-search">
          <select className="role-select">
            <option value="" disabled selected>Role</option>
            <option value="Student">Student</option>
            <option value="Creator">Creator</option>
            <option value="Admin">Admin</option>
          </select>
          <select className="university-select">
            <option value="" disabled selected>University</option>
            <option value="AITU">Astana IT University</option>
            <option value="NU">Nazarbayev University</option>
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
                className="search-placeholder"
                placeholder="Find users by email..."
                type="search"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="admin-search-table">
        <div className="user-row">
          <button className="user-avatar">
            <img className="avatar-icon1" alt="" src="/avatar-1@2x.png" />
          </button>
          <div className="user-email">212456@astanait.edu.kz</div>
          <div className="user-role">Student</div>
          <div className="user-university">Astana IT University</div>
          <button className="reset-password-button">
            <div className="reset-password-button-text">Reset password</div>
          </button>
          <button className="view-profile-button">
            <div className="view-profile-button-text ">View profile</div>
          </button>
          <button className="delete-user-button">
            <div className="delete-user-button-text">Delete</div>
          </button>
        </div>
        <div className="user-row">
          <div className="user-avatar">
            <img className="avatar-icon1" alt="" src="/avatar-2@2x.png" />
          </div>
          <div className="user-email">testemail@oulook.com</div>
          <div className="user-role">Creator</div>
          <div className="user-university">Nazarbayev University</div>
          <button className="reset-password-button">
            <div className="reset-password-button-text">Reset password</div>
          </button>
          <button className="view-profile-button">
            <div className="view-profile-button-text">View profile</div>
          </button>
          <button className="delete-user-button">
            <div className="delete-user-button-text">Delete</div>
          </button>
        </div>
        <div className="user-row">
          <div className="user-avatar">
            <img className="avatar-icon1" alt="" src="/avatar-2@2x.png" />
          </div>
          <div className="user-email">administrator@gmail.com</div>
          <div className="user-role">Admin</div>
          <div className="user-university">CyberSkills</div>
          <button className="reset-password-button">
            <div className="reset-password-button-text">Reset password</div>
          </button>
          <button className="view-profile-button">
            <div className="view-profile-button-text">View profile</div>
          </button>
          <button className="delete-user-button">
            <div className="delete-user-button-text">Delete</div>
          </button>
        </div>
        
      </div>
      <div className="show-more-button-wrapper">
        <button className="show-more-button">
          <div className="show-more-text">Show more</div>
        </button>
      </div>
    </div>
  );
};

export default UsersSearch;
