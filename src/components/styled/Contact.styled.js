import styled from "styled-components";

const StyledContact = styled.section`
  padding: 2rem 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;

  .address-details {
    display: flex;
    align-items: center;
  }
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

    .row {
      width: 100%;
      display: flex;
      align-items: space-between;
      justify-content: space-between;
      input {
        width: 45%;
        border: 1px solid #efefef;
        border-radius: 8px;
        font-size: 0.9rem;
        padding: 0.5rem;
        margin-bottom: 1rem;
        :focus {
          box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
            0px 8px 16px rgba(96, 97, 112, 0.16);
        }
      }
    }
    textarea {
      width: 100%;
      border: 1px solid #efefef;
      border-radius: 8px;
      font-size: 0.9rem;
      padding: 0.5rem;
      margin-bottom: 1rem;
      :focus {
        box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
          0px 8px 16px rgba(96, 97, 112, 0.16);
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;

    .address {
      text-align: center;
      width: 100%;

      p {
        width: 100%;
        margin-bottom: 1rem;
      }
    }

    .form {
      width: 100%;
      text-align: center;

      .row {
        input {
          width: 100%;
          display: block;
        }
      }
    }
  }
`;

export default StyledContact;
