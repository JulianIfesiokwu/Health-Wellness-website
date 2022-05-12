import styled from "styled-components";

const Button = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 5px;
  border: 1px solid var(--accent-color);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 300;
  font-family: "Open sans", "sans-serif";
  color: var(--accent-color);

  .icon {
    vertical-align: middle;
  }
  &:hover {
    cursor: pointer;
    color: var(--accent-color);
    background-color: var(--accent-color);
    border: 1px solid var(--accent-color);
  }
`;

export default Button;
