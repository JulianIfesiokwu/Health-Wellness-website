import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  margin-top: 0.25rem;

  a {
    margin-right: 1.5rem;
    font-size: 1.2rem;
    color: white;
    font-weight: 400;
    padding-bottom: 0.5rem;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #155bd5;
    }
  }
  a:nth-last-child(1) {
    margin-right: 0;
  }
  a::after {
    display: block;
    content: "";
    margin-top: 0.5rem;
    border-bottom: solid 1px #155bd5;
    transform: scaleX(0);
    transition: transform 500ms ease-in-out;
  }
  a:hover::after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }

  @media (max-width: 812px) {
    display: none;
    flex-direction: column;
    position: absolute;
    right: 0.5rem;
    top: 4.5rem;
    text-align: end;
    margin-top: 0;
  }
`;

export default StyledList;
