import styled from "styled-components";

const StyledSession = styled.section`
  text-align: center;
  background-color: #155bd5;
  padding: 4rem 4rem;
  color: white;

  .title {
    width: 40%;
    margin: 2rem auto;
    font-size: 2rem;
  }
  .more {
    width: 63%;
    margin: 1rem auto;
    font-size: 1rem;
    line-height: 25px;
  }

  Button {
    margin-bottom: 2rem;
  }

  @media (max-width: 768px) {
    .title {
      width: 85%;
      margin: 2rem auto;
    }
    .more {
      width: 85%;
      margin: 1rem auto;
      font-size: 1rem;
      line-height: 25px;
    }
  }

  @media (max-width: 425px) {
    .title {
      font-size: 1.3rem;
    }
  }
`;

export default StyledSession;
