import React,{ FunctionComponent, useMemo, type CSSProperties } from "react";
import { Link } from "react-router-dom";
import "./WelcomeBlocks.css";

export type WelcomeBlocksType = {
  learnTheTheoryAndPractice?: string;
  masterTheFundamentalsAndA?: string;
  prop?: string;

  /** Style props */
  learnTheTheoryPadding?: CSSProperties["padding"];
  frameDivPadding?: CSSProperties["padding"];
  frameDivMinHeight?: CSSProperties["minHeight"];
  beginLearningButtonHeight?: CSSProperties["height"];
  beginLearningButtonPadding?: CSSProperties["padding"];
  shieldIconHeight?: CSSProperties["height"];
  shieldWidth?: CSSProperties["width"];
  shieldLeft?: CSSProperties["left"];
  propHeight?: CSSProperties["height"];
};

const WelcomeBlocks: FunctionComponent<WelcomeBlocksType> = ({
  learnTheTheoryAndPractice,
  masterTheFundamentalsAndA,
  prop,
  learnTheTheoryPadding,
  frameDivPadding,
  frameDivMinHeight,
  beginLearningButtonHeight,
  beginLearningButtonPadding,
  shieldIconHeight,
  shieldWidth,
  shieldLeft,
  propHeight,
}) => {
  const learnTheTheoryStyle: CSSProperties = useMemo(() => {
    return {
      padding: learnTheTheoryPadding,
    };
  }, [learnTheTheoryPadding]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      padding: frameDivPadding,
      minHeight: frameDivMinHeight,
    };
  }, [frameDivPadding, frameDivMinHeight]);

  const beginLearningButtonStyle: CSSProperties = useMemo(() => {
    return {
      height: beginLearningButtonHeight,
      padding: beginLearningButtonPadding,
    };
  }, [beginLearningButtonHeight, beginLearningButtonPadding]);

  const shieldIconStyle: CSSProperties = useMemo(() => {
    return {
      height: shieldIconHeight,
    };
  }, [shieldIconHeight]);

  const shieldStyle: CSSProperties = useMemo(() => {
    return {
      width: shieldWidth,
      left: shieldLeft,
    };
  }, [shieldWidth, shieldLeft]);

  const aboutUsLinkStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className="learnthetheory1" style={learnTheTheoryStyle}>
      <div className="learnthetheory-child" style={frameDiv3Style}>
        <div className="learn-the-theory-and-practice-group">
          <h1 className="learn-the-theory1">{learnTheTheoryAndPractice}</h1>
          <div className="master-the-fundamentals1">
            {masterTheFundamentalsAndA}
          </div>
          <Link
            className="beginlearningbutton8"
            to="/login-page"
            style={beginLearningButtonStyle}
          >
            <div className="begin-learning2">begin learning</div>
          </Link>
        </div>
      </div>
      <div className="shieldicon1" style={shieldIconStyle}>
        <div className="elipse1">
          <div className="dashboard-link" />
        </div>
        <div className="shield1" style={shieldStyle}>
          <img
            className="about-us-link2"
            loading="lazy"
            alt=""
            src={prop}
            style={aboutUsLinkStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default WelcomeBlocks;
