import { MdDarkMode, MdLightMode } from "react-icons/md";
import "../styles/components/darkmode.css";

export const DarkMode = (isDark = true, changeDark) => {
  return (
    <div className="darkmode-container">
      {!isDark ? (
        <MdLightMode className="darkmode-button" />
      ) : (
        <MdDarkMode className="darkmode-button" />
      )}
    </div>
  );
};
