import styled from "styled-components";
import { ChatUser } from "./ChatUser";


const WrapperChats = styled.div`
  & > div:first-child {
    font-size: 1.5rem;
    font-weight: 400;
    padding: 20px 10px;
  }
`;

export const Chats = ({ users, setCurrentUser }) => {
  return (
    <WrapperChats>
      <div>Chats</div>
      <div>
        {users.length !== 0 ? (
          users.map((el, index) => (
            
            <ChatUser key={index} setCurrentUser={setCurrentUser} user={el} />
          ))
        ) : (
          <div style={{ margin: "20px" }}>No results</div>
        )}
      </div>
    </WrapperChats>
  );
};
