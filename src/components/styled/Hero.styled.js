import styled from "styled-components";

const StyledHero = styled.div`
  width: 100%;
  h1 {
    width: 60%;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 6;
    font-size: 4rem;
    font-weight: 900;
    line-height: 65px;
    text-align: center;
  }
  p {
    color: white;
    position: absolute;
    left: 50%;
    width: 40%;
    top: 70%;
    text-align: center;
    transform: translate(-50%, -50%);
    z-index: 6;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 35px;
  }
  Button {
    color: white;
    background-color: #155bd5;
    position: absolute;
    text-align: center;
    transform: translate(-50%, -50%);
    top: 85%;
    left: 50%;
    z-index: 7;
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
      margin: 0 auto;
      font-size: 3rem;
      line-height: 45px;
      text-align: center;
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      line-height: 45px;
      width: 70%;
    }

    p {
      z-index: 7;
      font-size: 1.2rem;
      line-height: 25px;
      width: 50%;
      position: absolute;
      width: 70%;
      top: 68%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
    }

    Button {
      position: absolute;
      left: 50%;
      top: 80%;
      transform: translate(-50%, -50%);
      z-index: 6;
      font-size: 0.7rem;
      letter spacing: 3px;
    }
  }

  @media (max-width: 600px) {
    h1 {
      position: absolute;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 6;
      font-size: 2.5rem;
      line-height: 40px;
      width: 70%;
    }

    p {
    position: absolute;
    width: 70%;
    top: 68%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 7;
    font-size: 1rem;
    line-height: 25px;
    text-align: center;
  }
    Button {
    position: absolute;
    left: 50%;
    top: 80%;
    transform: translate(-50%, -50%);
    z-index: 6;
    font-size: 0.7rem;
  }
`;

export default StyledHero;
