import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Card.css";

export type CardType = {
  hard?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
  propColor?: CSSProperties["color"];
  propPadding1?: CSSProperties["padding"];
};

const Card: FunctionComponent<CardType> = ({
  hard,
  propBackgroundColor,
  propPadding,
  propColor,
  propPadding1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBackgroundColor, propPadding]);

  const hardStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const continueButtonStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className="card13">
      <div className="network-security-wrapper1">
        <h2 className="network-security3">Network Security</h2>
      </div>
      <div className="lorem-ipsum-dolor-sit-amet-co-wrapper1">
        <div className="lorem-ipsum-dolor3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Varius.wadfwafwfsafsafasfsa
        </div>
      </div>
      <div className="person-fill1-wght400-grad0-ops-parent1">
        <img
          className="person-fill1-wght400-grad0-ops-icon3"
          alt=""
          src="/person-fill1-wght400-grad0-opsz24-11.svg"
        />
        <div className="cyberskills-wrapper1">
          <div className="cyberskills8">Cyberskills</div>
        </div>
      </div>
      <div className="difficulty-parent1">
        <div className="difficulty3">Difficulty:</div>
        <div className="hard-container" style={frameDivStyle}>
          <div className="hard1" style={hardStyle}>
            {hard}
          </div>
        </div>
      </div>
      <button className="frame-button">
        <button className="continuebutton3" style={continueButtonStyle}>
          <div className="start-course1">Start course</div>
        </button>
      </button>
    </div>
  );
};

export default Card;
