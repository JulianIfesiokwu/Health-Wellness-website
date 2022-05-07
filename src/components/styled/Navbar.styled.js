import styled from "styled-components";

const StyledNavbar = styled.header`
  padding: 1rem 4rem 0 4rem;
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

  @media (max-width: 992px) {
    padding: 1rem 2rem 0 2rem;

    //for the navbar at small screen sizes
    .show-container {
      display: block;
    }

    .heading {
      width: 30%;
      display: flex;
      justify-content: space-between;
    }

    .menu {
      display: none;

      li {
        font-size: 1rem;
        padding-bottom: 0.2rem;
      }
    }
  }

  @media (max-width: 768px) {
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
      display: block;
      li {
        font-size: 1rem;
        padding-bottom: 0.2rem;
      }
    }
  }

  @media (max-width: 600px) {
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
      display: block;
      li {
        font-size: 1rem;
        padding-bottom: 0.2rem;
      }
    }
  }
`;

export default StyledNavbar;
