import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 5px;
  border: 1px solid #155bd5;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  font-family: "Open sans", "sans-serif";
  color: #222;

  .icon {
    vertical-align: middle;
  }
  &:hover {
    cursor: pointer;
    color: #155bd5;
    background-color: white;
    border: 1px solid #155bd5;
  }
`;

export default Button;
