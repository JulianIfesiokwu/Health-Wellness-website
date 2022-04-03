import styled from "styled-components";

const StyledNavbar = styled.header`
  padding: 2rem 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  color: white;
  position: fixed;
  top: 0;
  z-index: 10000;

  .menu {
    display: none;
  }

  @media (max-width: 812px) {
    .menu {
      display: inline;
      position: relative;
      right: 1.5rem;
      cursor: pointer;

      li {
        margin-right: 0;
        font-size: 1.3rem;
      }
    }
  }
  @media (max-width: 426px) {
    .menu {
      display: inline;
      position: relative;
      right: 1.5rem;
      cursor: pointer;

      li {
        margin-right: 0;
        font-size: 1rem;
      }
    }
  }
`;

export default StyledNavbar;
