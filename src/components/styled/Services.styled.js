import styled from "styled-components";

const StyledServices = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;
  position: relative;

  .title {
    text-align: center;
    margin-bottom: 2rem;

    p {
      width: 50%;
      margin: 0 auto;
    }
  }

  h2 {
    color: green;
    font-size: 2.5rem;
  }

  .offerings {
    display: flex;
    justify-content: space-between;
    gap: 3%;
  }

  @media (max-width: 425px) {
    .offerings {
      flex-direction: column;
    }
  }
  @media (max-width: 768px) {
    .title {
      h2 {
        margin-bottom: 1rem;
      }

      p {
        width: 75%;
      }
    }

    .offerings {
      flex-direction: column;
    }
  }
`;

export default StyledServices;
