import styled from "styled-components";

const StyledCard = styled.div`
  border-radius: 5px;
  border: 1px solid #efefef;
  text-align: start;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    font-family: "Open sans", "sans-serif";
    font-weight: 300;
    color: #155bd5;
    margin-bottom: 1rem;
  }
  .details {
    padding: 1rem;
  }

  img {
    border-radius: 5px 5px 0 0;
    margin-bottom: 1rem;
    width: 100%;
  }

  p {
    font-family: "Open sans", "sans-serif";
  }

  Button {
    background-color: #155bd5;
    color: white;
    width: 100%;
  }

  &:hover {
    box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
      0px 8px 16px rgba(96, 97, 112, 0.16);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }

  @media (max-width: 426px) {
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;

    img {
      height: 200px;
    }
  }
`;

export default StyledCard;
