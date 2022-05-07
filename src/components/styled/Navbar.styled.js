import styled from "styled-components";

const StyledNavbar = styled.header`
  padding: 0.5rem 4rem 0 4rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
  position: fixed;
  top: 0;
  z-index: 10000;

  .menu {
    display: none;
  }

  .heading {
    width: auto;
  }

  @media (max-width: 812px) {
    .menu {
      display: inline;
      position: relative;
      cursor: pointer;

      li {
        margin-right: 0;
        font-size: 1.3rem;
      }
    }
  }
  @media (max-width: 426px) {
    padding: 1rem 2rem 0 2rem;

    //for the navbar at small screen sizes
    .show-container {
      display: block;
    }

    .heading {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }

    .menu {
      li {
        font-size: 1rem;
        padding-bottom: 0.2rem;
      }
    }
  }
`;

export default StyledNavbar;
