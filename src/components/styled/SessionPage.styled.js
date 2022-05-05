import styled from "styled-components";

const StyledSessionPage = styled.div`
  padding: 2rem 4rem;

  .form {
    margin-top: 3rem;
  }

  .personal-details {
    display: flex;
    flex-direction: column;
    font-family: "Open Sans", "sans-serif";

    .form-title {
      font-weight: 300;
      margin-bottom: 1rem;
    }

    .section-container {
      display: flex;
      border-top: 1px solid #222;
      padding: 1rem 0;

      .about {
        width: 40%;
      }

      .info {
        width: 60%;

        .two-column {
          display: flex;
          gap: 2%;

          .input-container {
            width: 50%;
          }
        }
      }
    }

    .input-container {
      .checkbox-container {
        margin-bottom: 1rem;
      }

      label {
        margin-bottom: 0.5rem;
      }

      input[type="text"],
      input[type="number"],
      input[type="email"] {
        padding: 0.75rem;
        margin-top: 0.25rem;
        border: none;
        border-radius: 3px;
        outline: none;
        width: 100%;
      }

      input[type="checkbox"] {
        padding: 0.75rem 0 0 0.75rem;
        margin-right: 0.5rem;
        border: none;
        vertical-align: middle;
      }

      option {
        padding: 0.5rem;
      }
    }
  }
`;

export default StyledSessionPage;
