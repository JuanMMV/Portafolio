import "../styles/components/darkmode.css";
import { MdDarkMode, MdLightMode } from "react-icons/md";

export const DarkMode = ({ theme, toggleTheme }) => {
  return (
    <>
      <input
        checked={theme === "light"}
        onChange={toggleTheme}
        className="darkmode-checkbox"
        id={`darkmode-new`}
        type="checkbox"
      />
      <label className="darkmode-label" htmlFor={`darkmode-new`}>
        <span className={`darkmode-button`}>
          {theme === "dark" ? (
            <MdDarkMode className="darkmode-button" />
          ) : (
            <MdLightMode className="darkmode-button" />
          )}
        </span>
      </label>
    </>
  );
};
