import { FunctionComponent, useContext, useEffect, useState } from "react";
import "./ProfileContainer.css";
import { Context } from "..";

const FrameComponent: FunctionComponent = () => {
  const {store} = useContext(Context);
  const [email, setEmail] = useState<string>('');
  const [password, serPassword] = useState<string>('');
  
  useEffect( ()=>{
    if(store.isAuth){
    setEmail(store.user.email);
    }
  },[])
  return (
     <section className="profile-container-wrapper">
      <div className="profile-container">
        <div className="my-profile-container">
          <h1 className="my-profile-heading">My Profile</h1>
        </div>
        <div className="profile-photo-email">
          <div className="avatar-profile-container">
            <img
              className="avatar-image-icon"
              loading="lazy"
              alt=""
              src="/avatar-image@2x.png"
            />
          </div>
          <div className="profile-email-name-container">
            <div className="profile-email-name">{email}</div>
          </div>
        </div>
        <form className="profile-information-container">
          <div className="email-profile-container">
            <div className="email-label-text">Email:</div>
            <div className="email-change-container">
              <input
                className="email-change-input-box"
                placeholder="Email"
                type="text"
              />
              <button className="button">
                <div className="button-text">Edit</div>
              </button>
            </div>
          </div>
          <div className="password-profile-container">
            <div className="password-container">
              <div className="password-label-text">Password:</div>
              <div className="password-change-container">
                <input
                  className="password-change-input-box"
                  placeholder="Password"
                  type="password"
                />
                <button className="button">
                  <div className="button-text">Edit</div>
                </button>
              </div>
            </div>
            <div className="confirm-password-profile-conta">
              <div className="confirm-password-label">Confirm password:</div>
              <div className="confirm-password-change-contai">
                <input
                  className="confirm-password-change-input"
                  placeholder="Confirm password"
                  type="password"
                />
              </div>
            </div>
          </div>
        </form>
        <div className="profile-status-university">
          <div className="status-profile-container">
            <div className="status-label-text">Status:</div>
            <button className="status-container">
              <div className="status-input-box">
                <div className="status-text">Student</div>
              </div>
            </button>
          </div>
          <div className="university-profile-container">
            <div className="university-label-text">University:</div>
            <button className="university-container">
              <div className="university-input-box">
                <div className="university-text">Astana IT University</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
