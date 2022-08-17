import styled from "styled-components";
import Image from "../common/Image";


const MessageWrapper = styled.div`
  overflow: hidden;
  margin-top: 10px;
  & > div {
    display: flex;
    align-items: center;
  }
  .message {
    padding: 8px 15px;
    border-radius: 20px;
  }
  .date {
    margin-top: 10px;
    font-size: 12px;
    opacity: 0.5;
  }
`;
const UserMessage = styled.div`
  & > div:last-child {
    margin-left: 20px;
  }
  .message {
    background-color: var(--color-user-message);
    color: var(--color-text-user-message);
  }
  .date {
    text-align: left;
    margin-left: 10px;
  }
`;
const MyMessage = styled.div`
  justify-content: end;
  .message {
    background-color: var(--color-my-message);
    color: var(--color-text-my-message);
  }
  .date {
    text-align: right;
  }
`;

const Message = ({ message, url, name, date, idUser }) => {
  return (
    <MessageWrapper>
      {idUser !== 100 ? (
        <UserMessage>
          <div>
            <Image url={url} name={name} />
          </div>
          <div>
            <div className="message">{message}</div>
            <div className="date">{date}</div>
          </div>
        </UserMessage>
      ) : (
        <MyMessage>
          <div>
            <div className="message">{message}</div>
            <div className="date">{date}</div>
          </div>
        </MyMessage>
      )}
    </MessageWrapper>
  );
};

export default Message;
