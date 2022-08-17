import styled from "styled-components";
import HeaderMessage from "./HeaderMessage";
import Message from "./Message";
import MessageField from "./MessageField";
import { connect } from "react-redux";
import { getTextMessage, setTextMessageObj } from "../../redux/reducer";

const WrapperMassage = styled.div`
  max-height: 100%;

  .bodyMessage {
    height: 70vh;
    overflow-y: scroll;
    width: 90%;
    margin: 0 auto;
    padding: 25px;
  }
  & > div:last-child {
    position: sticky;
    width: 100%;
  }
`;

const MessagePageWrapper = (props) => {
  // const [textMessage, setTextMessage] = useState("");
  // const [newMessageObj, setNewMessageObj] = useState({});

  // useEffect(() => {
  //   if (Object.keys(newMessageObj).length !== 0) {
  //     console.log(props.currentUser.message);
  //     props.currentUser.message.push(newMessageObj);
  //   }
  // }, [newMessageObj]);

  return (
    <WrapperMassage>
      <HeaderMessage url={props.currentUser.url} name={props.currentUser.name} />
      <div className="bodyMessage">
        {props.currentUser.message.map((el, index) => (
          <Message
            key={index}
            message={el.message}
            date={el.date}
            url={props.currentUser.url}
            name={props.currentUser.name}
            idUser={el.idUser}
          />
        ))}
      </div>
      <MessageField
        textMessage={props.textMessage}
        getTextMessage={props.getTextMessage}
        setTextMessageObj={props.setTextMessageObj}
      />
    </WrapperMassage>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.app.currentUser,
    textMessage: state.app.textMessage
  }
}
export const MessagePage = connect(mapStateToProps, {getTextMessage, setTextMessageObj})(MessagePageWrapper);


