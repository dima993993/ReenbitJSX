import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
height: 20px;
width: 60px;
position: relative;
border-radius: 40px;
border: 1px solid #000000;
box-shadow: 1px 1px 5px inset #000000;
padding: 5px;
.switcher {
  position: absolute;
  bottom: 0;
  height: 18px;
  width: 18px;
  z-index: 99;
  background-color: #ffffff;
  border-radius: 50%;
}
.moon {
  left: 0;
}
.sun {
  right: 0;
}
.items {
  display: flex;
  justify-content: space-between;
  align-items: center;
  div {
    font-size: 10px;
  }
}
`;

export const Theme = () => {
  const getTheme = localStorage.getItem('themeLocal');
  const [theme, setTheme] = useState(getTheme != null ? getTheme : 'light');
  const [switcher, setSwitcher] = useState(getTheme === 'dark' ? true : false);

  localStorage.setItem('themeLocal', theme);

  const changeTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);
  return (
    <Container onClick={() => {
      changeTheme();
       setSwitcher(switcher ? false : true)
    }}>
      <div className='items'>
        <div><FontAwesomeIcon icon={faSun} /></div>
        <div><FontAwesomeIcon icon={faMoon} /></div>
      </div>
      <div className={switcher ? 'switcher moon' : 'switcher sun'}></div>
    </Container>
  );
};
