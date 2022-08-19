import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import HeaderMessage from "./HeaderMessage";
import Message from "./Message";
import MessageField from "./MessageField";
import {
  getAutoMessage,
  getTextMessage,
  loadingForMessage,
  deleteUserInArray,
  setTextMessageObj,
  addUserInArray,
} from "../../redux/reducer";
import { Writing } from "../common/Writing";

const WrapperMassage = styled.div`
  max-height: 100%;

  .bodyMessage {
    height: 70vh;
    overflow-y: scroll;
    width: 90%;
    margin: 0 auto;
    padding: 25px;
    &::-webkit-scrollbar {
      width: 6px;
    }

    &::-webkit-scrollbar-track {
      background-color: transparent;
    }

    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
  }
  & > div:last-child {
    position: sticky;
    width: 100%;
  }
`;

const MessagePageWrapper = (props) => {
  let date = new Date();
  let currentDate =
    date.getMonth() +
    "/" +
    date.getDate() +
    "/" +
    date.getFullYear() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes();

  useEffect(() => {
    props.getAutoMessage(currentDate);
  }, [props.autoAnswer]);

  return (
    <WrapperMassage>
      <HeaderMessage
        url={props.currentUser.url}
        name={props.currentUser.name}
      />
      <div className="bodyMessage">
        {props.currentUser.message !== undefined
          ? props.currentUser.message.map((el, index) => (
              <Message
                key={index}
                message={el.message}
                date={el.date}
                url={props.currentUser.url}
                name={props.currentUser.name}
                idUser={el.idUser}
              />
            ))
          : "Enter Your Friend"}
        {props.loadingMessage ? <Writing /> : ""}
      </div>
      <MessageField
        textMessage={props.textMessage}
        getTextMessage={props.getTextMessage}
        setTextMessageObj={props.setTextMessageObj}
        getAutoMessage={props.getAutoMessage}
        loadingMessage={props.loadingMessage}
        loadingForMessage={props.loadingForMessage}
        autoAnswer={props.autoAnswer}
        deleteUserInArray={props.deleteUserInArray}
        currentDate={currentDate}
        addUserInArray={props.addUserInArray}
      />
    </WrapperMassage>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.app.currentUser,
    textMessage: state.app.textMessage,
    loadingMessage: state.app.loadingMessage,
    autoAnswer: state.app.autoAnswer,
  };
};

export const MessagePage = connect(mapStateToProps, {
  getTextMessage,
  setTextMessageObj,
  getAutoMessage,
  deleteUserInArray,
  loadingForMessage,
  addUserInArray,
})(MessagePageWrapper);
