import styled from "styled-components";

const ServicesPageStyled = styled.div`
width: 100%;
  h1 {
    width: 65%;
    color: white;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    z-index: 6;
    font-size: 3.75rem;
    line-height: 50px;
  }
  p {
    color: white;
    position: absolute;
    left: 50%;
    width: 40%;
    top: 65%;
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
    top: 80%;
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

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
      width: 70%;
      top: 45%;
      line-height: 45px;
    }

    p {
      top: 70%;
     width: 60%;
    }

    Button {
      top: 85%;
    }
  }

  @media (max-width: 600px) {
    h1 {
      color: white;
      position: absolute;
      top: 45%;
      left: 50%;
      width: 80%;
      transform: translate(-50%, -50%);
      z-index: 6;
      font-size: 2.5rem;
      text-align: center;
      line-height: 40px;
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
