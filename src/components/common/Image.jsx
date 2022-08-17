import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";


const UserImage = styled.div`
  position: relative;
  width: 60px;
  @media (max-width: 600px) {
    width: 40px;
  }
  & > div:first-child {
    width: 60px;
    height: 60px;
    margin: 0 auto;
    overflow: hidden;
    border-radius: 50%;
    @media (max-width: 600px) {
      width: 40px;
      height: 40px;
    }
    img {
      width: auto;
      height: 100%;
      margin: 0 auto;
    }
  }
  & > div:last-child {
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;

const Image = ({ url, name, checked }) => {
  return (
    <UserImage>
      <div>
        <img src={url} alt={name} />
      </div>
      <div>
        {checked ? (
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#129712" }} />
        ) : (
          ""
        )}
      </div>
    </UserImage>
  );
};

export default Image;
