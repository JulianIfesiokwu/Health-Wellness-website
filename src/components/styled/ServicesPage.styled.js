import styled from "styled-components";

const ServicesPageStyled = styled.div`
width: 100%;
  h1 {
    color: white;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 6;
    font-size: 3.5rem;
  }
  p {
    color: white;
    position: absolute;
    left: 50%;
    width: 40%;
    top: 60%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 7;
    font-size: 1.2rem;
    line-height: 30px;
  }
  Button {
    color: white;
    background-color: #155bd5;
    position: absolute;
    left: 50%;
    top: 75%;
        transform: translate(-50%, -50%);
    text-align: center;
    z-index: 7;
    font-size: 1rem;
    letter spacing: 3px;
    line-height: 30px;
    text-align: start;
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
    opacity: 0.9;
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
      width: 70%;
    }

    p {
     width: 60%;
    }
  }

  @media (max-width: 600px) {
    h1 {
      color: white;
      position: absolute;
      top: 55%;
      left: 50%;
      width: 70%;
      transform: translate(-50%, -50%);
      z-index: 6;
      font-size: 2.5rem;
      text-align: center;
    }

    p {
    color: white;
    position: absolute;
    width: 70%;
    top: 70%;
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
    top: 85%;
    transform: translate(-50%, -50%);
    z-index: 6;
    font-size: 0.7rem;
    letter spacing: 3px;
    line-height: 30px;
  }
`;

export default ServicesPageStyled;
