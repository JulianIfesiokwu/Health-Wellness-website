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
`;

export default StyledServices;
