import styled from "styled-components";

const StyledContact = styled.section`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .address {
    display: flex;
    flex-direction: column;
    text-align: start;
    width: 50%;
    p {
      margin-bottom: 2rem;
      width: 70%;

      .icon {
        vertical-align: middle;
        color: #155bd5;
      }
    }
  }
  .form {
    width: 50%;
    text-align: start;
    padding: 1rem 0;

    h3 {
      margin-bottom: 1rem;
    }

    .error-message {
      display: block;
      width: 100%;
      color: red;
      font-size: 0.8rem;
    }

    Button {
      background-color: #155bd5;
      color: white;
      margin-top: 1rem;

      :hover {
        color: #155bd5;
        background-color: white;
      }
    }

    .row {
      width: 100%;
      display: flex;
      align-items: space-between;
      justify-content: space-between;

      .col-1,
      .col-2,
      .col-3 {
        margin-bottom: 0.5rem;
        width: 49%;
        input {
          width: 100%;
          border: 1px solid #efefef;
          border-radius: 5px;
          font-size: 0.9rem;
          padding: 0.5rem;
          margin-bottom: 0.2rem;
          :focus {
            box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
              0px 8px 16px rgba(96, 97, 112, 0.16);
          }
        }
      }

      .error-message {
        display: block;
        width: 100%;
        color: red;
        font-size: 0.8rem;
      }
    }
    textarea {
      width: 100%;
      border: 1px solid #efefef;
      border-radius: 5px;
      font-size: 0.9rem;
      padding: 0.5rem;
      margin-bottom: 0.5rem;
      :focus {
        box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
          0px 8px 16px rgba(96, 97, 112, 0.16);
      }
    }
  }

  @media only screen and (max-width: 992px) {
    padding: 2rem;
  }
  @media only screen and (max-width: 768px) {
    padding: 2rem;
  }

  @media only screen and (max-width: 600px) {
    flex-direction: column;
    padding: 2rem;

    .address {
      text-align: start;
      width: 100%;

      p {
        width: 100%;
        .icon {
          display: inline-block;
        }
        margin-bottom: 1rem;
      }
    }

    .form {
      width: 100%;

      .row {
        flex-direction: column;

        .col-1,
        .col-2,
        .col-3 {
          width: 100%;
        }

        input {
          width: 100%;
          display: block;
        }
      }
    }
  }
`;

export default StyledContact;
