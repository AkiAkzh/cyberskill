import React, { FunctionComponent, useMemo, type CSSProperties } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./LanguageSelection.css";

export type LanguageSelectionType = {
  /** Style props */
  languageSelectionHeight?: CSSProperties["height"];
  languageSelectionWidth?: CSSProperties["width"];
  languageSelectionBackgroundColor?: CSSProperties["backgroundColor"];
  languageSelectionPadding?: CSSProperties["padding"];
};

const LanguageSelection: FunctionComponent<LanguageSelectionType> = ({
  languageSelectionHeight,
  languageSelectionWidth,
  languageSelectionBackgroundColor,
  languageSelectionPadding,
}) => {
  const { language, setLanguage } = useLanguage();

  const languageSelectionStyle: CSSProperties = useMemo(() => {
    return {
      height: languageSelectionHeight,
      width: languageSelectionWidth,
      backgroundColor: languageSelectionBackgroundColor,
      padding: languageSelectionPadding,
    };
  }, [
    languageSelectionHeight,
    languageSelectionWidth,
    languageSelectionBackgroundColor,
    languageSelectionPadding,
  ]);

  return (
    <select
      className="languageselection5"
      style={languageSelectionStyle}
      value={language}
      onChange={(e) => setLanguage(e.target.value as 'EN' | 'KZ' | 'RU')}
    >
      <option value="EN">EN</option>
      <option value="KZ">KZ</option>
      <option value="RU">RU</option>
    </select>
  );
};

export default LanguageSelection;
