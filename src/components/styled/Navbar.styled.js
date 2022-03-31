import styled from "styled-components";

const StyledNavbar = styled.header`
  padding: 2rem 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: transparent;
  color: #93c572;
  position: fixed;
  top: 0;
  z-index: 10000;

  LogoContainer {
    img {
      display: none;
    }

    .menu {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .menu {
      display: block;
    }
  }
`;

export default StyledNavbar;
