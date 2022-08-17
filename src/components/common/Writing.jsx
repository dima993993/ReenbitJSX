import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const WrapperWriting = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  /* @keyframes shake {
    0% {
        margin-top: 3px;
    }
    25% {

    }
  } */
  span {
    margin-left: 10px;
  }
`;

export const Writing = () => {
  return (
    <WrapperWriting>
      <FontAwesomeIcon icon={faPencil} />
      <span>Writing...</span>
    </WrapperWriting>
  );
};
