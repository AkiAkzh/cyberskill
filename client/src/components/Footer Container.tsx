import { FunctionComponent, useState } from "react";
import "./MyCoursesBlock.css";
import {data} from "../data"

const MyCoursesBlock: FunctionComponent = () => {
  const [search, setSearch] = useState('')

  return (
    
    <section className="footer-container2">
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
        <h1 className="my-courses1">My Courses</h1>
      </div>
      <div className="homes3">
        {data.filter((item) => {
          return search.toLowerCase() === '' ? item : item.Title.toLowerCase().includes(search.toLowerCase());
        }).map((item) => (
          <div className="card18" key={item.id}>
          <div className="network-security-wrapper4">
            <div className="network-security8">{item.Title}</div>
          </div>
          <div className="lorem-ipsum-dolor-sit-amet-co-wrapper6">
            <div className="lorem-ipsum-dolor8">
              {item.Description}
            </div>
          </div>
          <div className="remove-button-set">
            <img
              className="person-fill1-wght400-grad0-ops-icon8"
              loading="lazy"
              alt=""
              src="/person-fill1-wght400-grad0-opsz24-11.svg"
            />
            <div className="email-instances">
              <div className="cyberskills17">{item.Author}</div>
            </div>
          </div>
          <div className="account-button">
            <div className="difficulty8">Difficulty:</div>
            <div className={`${item.Difficulty}-color-difficult`}>
                <div className={`${item.Difficulty}`}>{item.Difficulty}</div>
          </div>
          </div>
          <div className="footer-container-background">
            <button className="continuebutton8">
              <div className="continue1">continue</div>
            </button>
            <button className="removebutton1">
              <div className="remove-container">
                <div className="remove1">Remove</div>
              </div>
            </button>
          </div>
        </div>
        ))}
        

        {/* <div className="card19">
          <div className="network-security-wrapper5">
            <div className="network-security9">Pentest</div>
          </div>
          <div className="lorem-ipsum-dolor-sit-amet-co-wrapper7">
            <div className="lorem-ipsum-dolor9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius.
            </div>
          </div>
          <div className="person-fill1-wght400-grad0-ops-parent5">
            <img
              className="person-fill1-wght400-grad0-ops-icon9"
              alt=""
              src="/person-fill1-wght400-grad0-opsz24-11.svg"
            />
            <div className="cyberskills-wrapper5">
              <div className="cyberskills18">Cyberskills</div>
            </div>
          </div>
          <div className="difficulty-parent5">
            <div className="difficulty9">Difficulty:</div>
            <div className="medium-wrapper2">
              <div className="medium5">Medium</div>
            </div>
          </div>
          <div className="continuebutton-group">
            <button className="continuebutton9">
              <div className="continue2">continue</div>
            </button>
            <button className="removebutton2">
              <div className="remove-frame">
                <div className="remove2">Remove</div>
              </div>
            </button>
          </div>
        </div>
        <div className="card110">
          <div className="network-security-wrapper6">
            <div className="network-security10">Network Security</div>
          </div>
          <div className="lorem-ipsum-dolor-sit-amet-co-wrapper8">
            <div className="lorem-ipsum-dolor10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius.
            </div>
          </div>
          <div className="person-fill1-wght400-grad0-ops-parent6">
            <img
              className="person-fill1-wght400-grad0-ops-icon10"
              alt=""
              src="/person-fill1-wght400-grad0-opsz24-11.svg"
            />
            <div className="cyberskills-wrapper6">
              <div className="cyberskills19">Cyberskills</div>
            </div>
          </div>
          <div className="difficulty-parent6">
            <div className="difficulty10">Difficulty:</div>
            <div className="hard-frame">
              <div className="hard3">Hard</div>
            </div>
          </div>
          <div className="continuebutton-parent1">
            <button className="continuebutton10">
              <div className="continue3">continue</div>
            </button>
            <button className="removebutton3">
              <div className="remove-wrapper1">
                <div className="remove3">Remove</div>
              </div>
            </button>
          </div>
        </div>
        <div className="card111">
          <div className="network-security-wrapper7">
            <div className="network-security11">Network Security</div>
          </div>
          <div className="lorem-ipsum-dolor-sit-amet-co-wrapper9">
            <div className="lorem-ipsum-dolor11">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius.
            </div>
          </div>
          <div className="person-fill1-wght400-grad0-ops-parent7">
            <img
              className="person-fill1-wght400-grad0-ops-icon11"
              alt=""
              src="/person-fill1-wght400-grad0-opsz24-11.svg"
            />
            <div className="cyberskills-wrapper7">
              <div className="cyberskills20">Cyberskills</div>
            </div>
          </div>
          <div className="difficulty-parent7">
            <div className="difficulty11">Difficulty:</div>
            <div className="easy-wrapper3">
              <div className="easy7">Easy</div>
            </div>
          </div>
          <div className="continuebutton-parent2">
            <button className="continuebutton11">
              <div className="continue4">continue</div>
            </button>
            <button className="removebutton4">
              <div className="remove-wrapper2">
                <div className="remove4">Remove</div>
              </div>
            </button>
          </div>
        </div>
        <div className="card112">
          <div className="network-security-wrapper8">
            <div className="network-security12">Network Security</div>
          </div>
          <div className="lorem-ipsum-dolor-sit-amet-co-wrapper10">
            <div className="lorem-ipsum-dolor12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius.
            </div>
          </div>
          <div className="person-fill1-wght400-grad0-ops-parent8">
            <img
              className="person-fill1-wght400-grad0-ops-icon12"
              alt=""
              src="/person-fill1-wght400-grad0-opsz24-11.svg"
            />
            <div className="cyberskills-wrapper8">
              <div className="cyberskills21">Cyberskills</div>
            </div>
          </div>
          <div className="difficulty-parent8">
            <div className="difficulty12">Difficulty:</div>
            <div className="easy-wrapper4">
              <div className="easy8">Easy</div>
            </div>
          </div>
          <div className="continuebutton-parent3">
            <button className="continuebutton12">
              <div className="continue5">continue</div>
            </button>
            <button className="removebutton5">
              <div className="remove-wrapper3">
                <div className="remove5">Remove</div>
              </div>
            </button>
          </div>
        </div>
        <div className="card113">
          <div className="network-security-wrapper9">
            <div className="network-security13">Network Security</div>
          </div>
          <div className="lorem-ipsum-dolor-sit-amet-co-wrapper11">
            <div className="lorem-ipsum-dolor13">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius.
            </div>
          </div>
          <div className="person-fill1-wght400-grad0-ops-parent9">
            <img
              className="person-fill1-wght400-grad0-ops-icon13"
              alt=""
              src="/person-fill1-wght400-grad0-opsz24-11.svg"
            />
            <div className="cyberskills-wrapper9">
              <div className="cyberskills22">Cyberskills</div>
            </div>
          </div>
          <div className="difficulty-parent9">
            <div className="difficulty13">Difficulty:</div>
            <div className="easy-wrapper5">
              <div className="easy9">Easy</div>
            </div>
          </div>
          <div className="continuebutton-parent4">
            <button className="continuebutton13">
              <div className="continue6">continue</div>
            </button>
            <button className="removebutton6">
              <div className="remove-wrapper4">
                <div className="remove6">Remove</div>
              </div>
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default MyCoursesBlock;
