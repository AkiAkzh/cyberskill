import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./StartCourseCard.css";

export type StartCourseCardType = {
  easy?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
  propColor?: CSSProperties["color"];
};

const StartCourseCard: FunctionComponent<StartCourseCardType> = ({
  easy,
  propBackgroundColor,
  propPadding,
  propColor,
}) => {
  const similarNamesStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBackgroundColor, propPadding]);

  const easyStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className="card14">
      <div className="begin-learning-button">
        <h2 className="network-security4">Network Security</h2>
      </div>
      <div className="lorem-ipsum-dolor-sit-amet-co-wrapper2">
        <div className="lorem-ipsum-dolor4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Varius.wadfwafwfsafsafasfsa
        </div>
      </div>
      <div className="person-fill1-wght400-grad0-ops-parent2">
        <img
          className="person-fill1-wght400-grad0-ops-icon4"
          loading="lazy"
          alt=""
          src="/person-fill1-wght400-grad0-opsz24-1.svg"
        />
        <div className="similar-names">
          <div className="cyberskills11">Cyberskills</div>
        </div>
      </div>
      <div className="similar-names1">
        <div className="difficulty4">Difficulty:</div>
        <div className="similar-names2" style={similarNamesStyle}>
          <div className="easy4" style={easyStyle}>
            {easy}
          </div>
        </div>
      </div>
      <button className="similar-names3">
        <div className="continuebutton4">
          <div className="start-course2">Start course</div>
        </div>
      </button>
    </div>
  );
};

export default StartCourseCard;
