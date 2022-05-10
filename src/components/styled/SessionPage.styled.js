import styled from "styled-components";

const StyledSessionPage = styled.div`
  padding: 2rem 4rem;
  background: rgb(21, 91, 213);
  background: linear-gradient(
    180deg,
    rgba(21, 91, 213, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  color: white;

  .form {
    margin-top: 2rem;
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
      border-top: 1px solid white;
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
      margin-top: 1rem;
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
        width: 100%;
      }

      input[type="checkbox"] {
        padding: 0.75rem 0 0 0.75rem;
        margin-right: 0.5rem;
        border: none;
        vertical-align: middle;
      }

      select,
      input[type="date"] {
        margin-top: 0.18rem;
        padding: 0.65rem;
        width: 100%;
      }
    }
  }

  Button {
    color: white;
    background-color: #155bd5;
    cursor: pointer;

    &::hover {
      color: #155bd5;
      background-color: white;
    }
  }

  @media (max-width: 992px) {
    padding: 2rem;
  }

  @media (max-width: 600px) {
    padding: 2rem;

    .personal-details {
      .section-container {
        flex-direction: column;

        .info,
        .about {
          width: 100%;
        }

        select,
        input[type="date"] {
          width: 100%;
        }
        input[type="date"] {
          margin-top: 0.25rem;
        }

        .two-column {
          .input-container {
            #card-number {
              width: ;
            }
          }
        }
      }
    }
  }
`;

export default StyledSessionPage;
