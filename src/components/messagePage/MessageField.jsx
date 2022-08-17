import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const WrapperField = styled.div`
  background-color: var(--color-ui);
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 90%;
  }

  & > div > div {
    width: 70%;
    margin: 0 auto;
    border: 1px solid red;
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Field = styled.textarea.attrs({
  type: "text",
  placeholder: "Type your message",
})`
  width: 90%;
  outline: none;
  border: none;
  padding: 10px 0px;
  color: var(--color-text);
  background-color: var(--color-bg);
  resize: none;
  overflow-y: hidden;
  :focus::-webkit-input-placeholder {
    color: transparent;
  }
  :focus::-moz-placeholder {
    color: transparent;
  }
  :focus:-moz-placeholder {
    color: transparent;
  }
  :focus:-ms-input-placeholder {
    color: transparent;
  }
`;

const MessageField = ({
  textMessage,
  getTextMessage,
  setTextMessageObj,
  autoAnswer,
  saveMessage,
  loadingForMessage,
}) => {
  let date = new Date();
  let userMessage = {
    date:
      date.getMonth() +
      "/" +
      date.getDate() +
      "/" +
      date.getFullYear() +
      " " +
      date.getHours() +
      ":" +
      date.getMinutes(),
    message: textMessage,
    idUser: 100,
  };
  let sendMessage = () => {
    loadingForMessage(true);
    setTextMessageObj(userMessage);
    setTimeout(() => {
      setTextMessageObj(autoAnswer);
      loadingForMessage(false);
      saveMessage();
    }, 10000);
    getTextMessage("");
    saveMessage();
  };
  return (
    <WrapperField>
      <div>
        <div>
          <Field
            onChange={(e) => getTextMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.keyCode === 13 && textMessage !== "") {
                sendMessage();
              }
            }}
            value={textMessage}
          />
          <FontAwesomeIcon
            icon={faPaperPlane}
            style={{
              color: "var(--color-text)",
              opacity: "0.5",
              cursor: "pointer",
            }}
            onClick={sendMessage}
          />
        </div>
      </div>
    </WrapperField>
  );
};

export default MessageField;
