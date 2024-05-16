import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./MyCourseCard.css";

export type MyCourseCardType = {
  loremIpsumDolorSitAmetCon?: string;
  medium?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propPadding?: CSSProperties["padding"];
  propColor?: CSSProperties["color"];
  propMinWidth?: CSSProperties["minWidth"];
  card1BoxShadow?: CSSProperties["boxShadow"];
  frameDivWidth?: CSSProperties["width"];
  loremIpsumDolorFlex?: CSSProperties["flex"];
  loremIpsumDolorWidth?: CSSProperties["width"];
  loremIpsumDolorDisplay?: CSSProperties["display"];
  loremIpsumDolorMaxHeight?: CSSProperties["maxHeight"];
  loremIpsumDolorWordBreak?: CSSProperties["wordBreak"];
};

const MyCourseCard: FunctionComponent<MyCourseCardType> = ({
  loremIpsumDolorSitAmetCon,
  medium,
  propBackgroundColor,
  propPadding,
  propColor,
  propMinWidth,
  card1BoxShadow,
  frameDivWidth,
  loremIpsumDolorFlex,
  loremIpsumDolorWidth,
  loremIpsumDolorDisplay,
  loremIpsumDolorMaxHeight,
  loremIpsumDolorWordBreak,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
      padding: propPadding,
    };
  }, [propBackgroundColor, propPadding]);

  const mediumStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
      minWidth: propMinWidth,
    };
  }, [propColor, propMinWidth]);

  const card1Style: CSSProperties = useMemo(() => {
    return {
      boxShadow: card1BoxShadow,
    };
  }, [card1BoxShadow]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      width: frameDivWidth,
    };
  }, [frameDivWidth]);

  const loremIpsumDolorStyle: CSSProperties = useMemo(() => {
    return {
      flex: loremIpsumDolorFlex,
      width: loremIpsumDolorWidth,
      display: loremIpsumDolorDisplay,
      maxHeight: loremIpsumDolorMaxHeight,
      wordBreak: loremIpsumDolorWordBreak,
    };
  }, [
    loremIpsumDolorFlex,
    loremIpsumDolorWidth,
    loremIpsumDolorDisplay,
    loremIpsumDolorMaxHeight,
    loremIpsumDolorWordBreak,
  ]);

  return (
    <div className="card17" style={card1Style}>
      <div className="network-security-wrapper3">
        <h2 className="network-security7">Network Security</h2>
      </div>
      <div
        className="lorem-ipsum-dolor-sit-amet-co-wrapper5"
        style={frameDiv2Style}
      >
        <div className="lorem-ipsum-dolor7" style={loremIpsumDolorStyle}>
          {loremIpsumDolorSitAmetCon}
        </div>
      </div>
      <div className="person-fill1-wght400-grad0-ops-parent4">
        <img
          className="person-fill1-wght400-grad0-ops-icon7"
          alt=""
          src="/person-fill1-wght400-grad0-opsz24-1.svg"
        />
        <div className="cyberskills-wrapper4">
          <div className="cyberskills15">Cyberskills</div>
        </div>
      </div>
      <div className="difficulty-parent4">
        <div className="difficulty7">Difficulty:</div>
        <div className="medium-wrapper1" style={frameDiv1Style}>
          <div className="medium4" style={mediumStyle}>
            {medium}
          </div>
        </div>
      </div>
      <div className="continuebutton-parent">
        <button className="continuebutton7">
          <div className="continue">continue</div>
        </button>
        <button className="removebutton">
          <div className="remove-wrapper">
            <div className="remove">Remove</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default MyCourseCard;
