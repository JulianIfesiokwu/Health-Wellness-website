import styled from "styled-components";

const StyledServices = styled.section`
  display: flex;
  flex-direction: column;
  padding: 3rem 4rem;
  position: relative;

  .title {
    margin-bottom: 2rem;
    h2 {
      color: #155bd5;
      font-size: 2.5rem;
      font-weight: 400;
      text-align: center;
      margin-bottom: 1rem;
      font-family: "Open sans", "sans-serif";
    }

    p {
      width: 50%;
      margin: 0 auto;
      margin-bottom: 1rem;
      text-align: center;
      font-family: "Open sans", "sans-serif";
    }
  }

  .offerings {
    display: flex;
    justify-content: space-between;
    gap: 3%;
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

  @media (max-width: 426px) {
    padding: 2rem;
  }
`;

export default StyledServices;
