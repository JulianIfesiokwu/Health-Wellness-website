import styled from "styled-components";

const StyledHero = styled.div`
  width: 100%;
  h1 {
    color: white;
    position: absolute;
    left: 4rem;
    top: 40%;
    z-index: 6;
    font-size: 42px;
  }
  p {
    color: white;
    position: absolute;
    left: 4rem;
    width: 40%;
    top: 50%;
    z-index: 7;
    font-size: 1.2rem;
    line-height: 30px;
    text-align: start;
  }
  Button {
    color: white;
    background-color: #155bd5;
    position: absolute;
    left: 4rem;
    top: 65%;
    z-index: 7;
    font-size: 1.3rem;
    letter spacing: 3px;
    line-height: 30px;
    text-align: start;
    &:hover {
      cursor: pointer;
    }
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.7;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export default StyledHero;
