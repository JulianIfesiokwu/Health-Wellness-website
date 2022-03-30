import styled from "styled-components";

const StyledContact = styled.section`
  padding: 2rem 4rem;
  display: flex;
  justify-content: center;
  align-items: space-around;

  .address {
    display: flex;
    flex-direction: column;
    text-align: start;
    p {
      margin-bottom: 2rem;
      width: 70%;
    }
  }
`;

export default StyledContact;
