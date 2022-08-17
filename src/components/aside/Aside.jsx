import styled from "styled-components";
import { Chats } from "./Chats";
import { HeaderAside } from "./HeaderAside";
import {connect} from 'react-redux';
import { getCurrentUser, setTextSearch } from "../../redux/reducer";

const AsideStyled = styled.div`
  border-right: 1px solid var(--color-border);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: #b0b0b0;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #707070;
  }
`;

const AsideWrapper = (props) => {
  // let filterUsers = props.users.filter((user) => {
  //   let nameUser = user.name.slice(0, props.textSearch.length);
  //   return nameUser.toLowerCase() === props.textSearch.toLowerCase();
  // });
  return (
    <AsideStyled>
      <HeaderAside setTextInput={props.setTextSearch} textInput={props.textSearch} />
      <Chats users={props.users} setCurrentUser={props.getCurrentUser} />
    </AsideStyled>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.app.users,
    textSearch: state.app.textSearch

  }
}

export const Aside = connect(mapStateToProps, {setTextSearch, getCurrentUser})(AsideWrapper);
