import styled from "styled-components";

const StyledHero = styled.div`
  width: 100%;
  h1 {
    width: 60%;
    color: white;
    position: absolute;
    left: 3.5rem;
    top: 35%;
    z-index: 6;
    font-size: 4rem;
    font-weight: 900;
    line-height: 65px;
  }
  p {
    color: white;
    position: absolute;
    left: 4rem;
    width: 40%;
    top: 60%;
    z-index: 7;
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 35px;
    text-align: start;
  }
  Button {
    color: white;
    background-color: #155bd5;
    position: absolute;
    left: 4rem;
    top: 75%;
    z-index: 7;
    letter spacing: 3px;
    text-align: start;

    .icon {
      vertical-align: middle;
    }
    &:hover {
      cursor: pointer;
      color: #155bd5;
      background-color: white;
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

  @media (max-width: 768px) {
    h1 {
    width: 60%;
      font-size: 3rem;
      line-height: 45px;
    }

    p {
    z-index: 7;
    font-size: 1.2rem;
    line-height: 25px;
    width: 50%;
    }
    Button {
    position: absolute;
    left: 0;
    top: 80%;
    transform: translate(-50%, -50%);
    z-index: 6;
    font-size: 0.7rem;
    letter spacing: 3px;
  }
  }

  @media (max-width: 426px) {
    h1 {
      color: white;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 6;
      font-size: 1.5rem;
    }

    p {
    color: white;
    position: absolute;
    width: 70%;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 7;
    font-size: 0.7rem;
    line-height: 15px;
    text-align: center;
  }
    Button {
    position: absolute;
    left: 50%;
    top: 85%;
    transform: translate(-50%, -50%);
    z-index: 6;
    font-size: 0.7rem;
    letter spacing: 3px;
    line-height: 30px;
  }
`;

export default StyledHero;
