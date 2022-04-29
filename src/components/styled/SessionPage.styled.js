import styled from "styled-components";

const StyledSessionPage = styled.div`
  padding: 2rem 4rem;
  background-color: teal;

  .form {
    margin-top: 3rem;
  }

  .personal-details {
    display: flex;

    .input-container {
      margin: 0.5rem 0;
      width: 100%;

      label {
        display: block;
      }

      input {
        padding: 0.5rem;
        border: none;
        border-radius: 3px;
        outline: none;
      }
    }
  }
`;

export default StyledSessionPage;
