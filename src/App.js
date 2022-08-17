import React, { useState } from "react";
import styled from "styled-components";
import { Aside } from "./components/aside/Aside";
import { Route, Routes } from "react-router-dom";
import { MessagePage } from "./components/messagePage/MessagePage";
import { usersData } from "./data/data";

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
  const [currentUser, setCurrentUser] = useState({});

  return (
    <WrapperApp>
      <Aside users={usersData} setCurrentUser={setCurrentUser} />
      <div>
        <Routes>
          <Route
            path="/"
            element={<MessagePage currentUser={usersData[0]} />}
          ></Route>
          <Route
            path="/dialog/:id"
            element={<MessagePage currentUser={currentUser} />}
          ></Route>
        </Routes>
      </div>
    </WrapperApp>
  );
};

export default App;
