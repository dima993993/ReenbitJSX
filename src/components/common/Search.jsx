import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


const SearchWrapper = styled.div`
  width: 100%;
  text-align: center;
  padding: 5px;
  border-radius: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: var(--color-bg);
`;

const Input = styled.input.attrs({
  type: "text",
  placeholder: "Search or start new chat",
})`
  width: 85%;
  outline: none;
  border: none;
  padding: 5px;
  background-color: var(--color-bg);
  color: var(--color-text);
`;

export const Search = ({ setTextInput, textInput }) => {
  return (
    <SearchWrapper>
      <FontAwesomeIcon icon={faSearch} style={{ color: "var(--color-ui)" }} />
      <Input onChange={(e) => setTextInput(e.target.value)} value={textInput} />
    </SearchWrapper>
  );
};
