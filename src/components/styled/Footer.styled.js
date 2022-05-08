import styled from "styled-components";

const StyledFooter = styled.footer`
  color: white;
  background-color: #222;
  padding: 2rem 4rem 2rem 4rem;
  display: flex;
  gap: 3%;
  text-align: start;

  .column {
    .heading {
      font-size: 1.2rem;
      color: #808080;
    }

    display: flex;
    flex-direction: column;
    flex: 1;

    p {
      margin-bottom: 1rem;
      font-size: 0.9rem;
    }

    form {
      input {
        margin-bottom: 1rem;
        font-size: 1rem;
        width: 100%;
        padding: 0.5rem 1rem;
        border-radius: 16px;
        border: none;
      }
      Button {
        color: white;
        background-color: #155bd5;

        :hover {
          color: #155bd5;
          background-color: white;
        }
      }
    }

    .social {
      display: inline-flex;
      gap: 15%;
      cursor: pointer;
    }
  }

  @media (max-width: 992px) {
    padding: 2rem;
  }
  
  @media (max-width: 768px) {
    padding: 2rem;
    .column {
      p {
        margin-bottom: 0.5rem;
      }
  }

  @media (max-width: 600px) {
    padding: 2rem;
    flex-direction: column;
    text-align: center;

    .column {
      p {
        margin-bottom: 1rem;
      }
      .social {
        justify-content: center;
      }
    }
  }

`;

export default StyledFooter;
