import styled from "styled-components";

const StyledFooter = styled.footer`
  color: white;
  background-color: #222;
  padding: 2rem 4rem 4rem 4rem;
  display: flex;
  gap: 3%;
  align-items: center;
  text-align: start;

  .column {
    display: flex;
    flex-direction: column;
    flex: 1;

    p {
      margin-bottom: 1rem;
    }
  }
`;

export default StyledFooter;
