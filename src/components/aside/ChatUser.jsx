import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Image from "../common/Image";

const User = styled(NavLink)`
  border-bottom: 1px solid var(--color-border);
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
  color: var(--color-text);
  transition: 0.3s;
  & > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  &:hover {
    background-color: var(--color-ui);
  }
`;

export const ChatUser = ({ user, setCurrentUser }) => {
  let sizePrevMessage = user.message[user.message.length - 1].message;
  return (
    <User to={`dialog/${user.id}`} onClick={() => setCurrentUser(user)}>
      <div>
        <Image name={user.name} url={user.url} checked={true} />
        <div style={{ marginLeft: "10px" }}>
          <div>{user.name}</div>
          <div style={{ opacity: "0.5" }}>{sizePrevMessage}</div>
        </div>
      </div>
      <div>{user.message[user.message.length - 1].date}</div>
    </User>
  );
};
