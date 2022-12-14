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
    <User
      to={`dialog/${user.id}`}
      onClick={() => {
        localStorage.setItem("currentUser", JSON.stringify(user));
        setCurrentUser(user);
      }}>
      <div>
        <Image name={user.name} url={user.url} checked={true} />
        <div style={{ marginLeft: "10px" }}>
          <div>{user.name}</div>
          <div style={{ opacity: "0.5", fontSize: "12px" }}>
            {sizePrevMessage}
          </div>
        </div>
      </div>
      <div style={{ textAlign: "right" }}>
        {user.message[user.message.length - 1].date.split(" ")[0]}
      </div>
    </User>
  );
};
