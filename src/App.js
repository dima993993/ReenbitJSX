import React from "react";
import styled from "styled-components";
import { Aside } from "./components/aside/Aside";
import { Route, Routes } from "react-router-dom";
import { MessagePage } from "./components/messagePage/MessagePage";

const WrapperApp = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const App = () => {
  return (
    <WrapperApp>
      <Aside />
      <div>
        <Routes>
          <Route path="/" element={<MessagePage />}></Route>
          <Route path="/dialog/:id" element={<MessagePage />}></Route>
        </Routes>
      </div>
    </WrapperApp>
  );
};

export default App;
