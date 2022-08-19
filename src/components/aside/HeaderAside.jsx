import styled from "styled-components";
import Image from "../common/Image";
import { Search } from "../common/Search";
import { Theme } from "../common/Theme";

const HeaderAsideWrapper = styled.div`
  padding: 20px;
  background-color: var(--color-ui);
  border-bottom: 1px solid var(--color-border);
  .theme_block {
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 500px) {
      display: block;
      text-align: center;
    }
  }
  & > div:last-child {
    margin-top: 20px;
  }
`;

export const HeaderAside = ({ setTextInput, textInput }) => {
  return (
    <HeaderAsideWrapper>
      <div className="theme_block">
        <Image
          url={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
          name="User"
          checked={true}
        />
        <Theme />
      </div>
      <div>
        <Search setTextInput={setTextInput} textInput={textInput} />
      </div>
    </HeaderAsideWrapper>
  );
};
