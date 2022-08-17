import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export const Theme = () => {
  const [theme, setTheme] = useState("light");

  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <div onClick={changeTheme}>
      {theme === "light" ? (
        <>
          <FontAwesomeIcon icon={faSun} />
          <span>Light Theme</span>
        </>
      ) : (
        <>
          <FontAwesomeIcon icon={faMoon} />
          <span>Dark Theme</span>
        </>
      )}
    </div>
  );
};
