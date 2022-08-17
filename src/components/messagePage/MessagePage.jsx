import styled from "styled-components";
import HeaderMessage from "./HeaderMessage";
import Message from "./Message";
import MessageField from "./MessageField";
import { connect } from "react-redux";
import {
  getAutoMessage,
  getTextMessage,
  loadingForMessage,
  saveMessage,
  setTextMessageObj,
} from "../../redux/reducer";
import { useEffect, useState } from "react";
import { Writing } from "../common/Writing";

const WrapperMassage = styled.div`
  max-height: 100%;

  .bodyMessage {
    height: 70vh;
    overflow-y: scroll;
    width: 90%;
    margin: 0 auto;
    padding: 25px;
    position: relative;
  }
  & > div:last-child {
    position: sticky;
    width: 100%;
  }
`;

const MessagePageWrapper = (props) => {
  useEffect(() => {
    props.getAutoMessage();
  }, [props.autoAnswer]);
  return (
    <WrapperMassage>
      <HeaderMessage
        url={props.currentUser.url}
        name={props.currentUser.name}
      />
      <div className='bodyMessage'>
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
        saveMessage={props.saveMessage}
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
  saveMessage,
  loadingForMessage,
})(MessagePageWrapper);
