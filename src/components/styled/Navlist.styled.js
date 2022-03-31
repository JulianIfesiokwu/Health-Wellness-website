import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  li {
    margin-right: 1.5rem;
    font-size: 1.2rem;
    color: white;
    font-weight: 400;
    padding-bottom: 0.5rem;
    cursor: pointer;
  }
  li::after {
    display: block;
    content: "";
    margin-top: 0.5rem;
    border-bottom: solid 1px white;
    transform: scaleX(0);
    transition: transform 500ms ease-in-out;
  }
  li:hover::after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export default StyledList;
