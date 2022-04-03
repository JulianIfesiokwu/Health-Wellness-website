import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 8px;
  border: 1px solid #efefef;
  padding: 1.5rem;
  text-align: start;

  h3,
  img,
  p {
    margin-bottom: 1rem;
  }

  img {
    border-radius: 8px;
    width: 100%;
  }

  Button {
    background-color: #155bd5;
    color: white;
  }

  &:hover {
    box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
      0px 8px 16px rgba(96, 97, 112, 0.16);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 425px) {
    margin-bottom: 1rem;
    img {
      height: 200px;
    }
  }
`;

export default StyledCard;
