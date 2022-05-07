import styled from "styled-components";

const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  margin-top: 0.25rem;

  a {
    margin-right: 1.5rem;
    font-size: 1rem;
    color: white;
    font-weight: 400;
    padding-bottom: 0.5rem;
    cursor: pointer;
    text-decoration: none;

    &:hover {
      color: #133c85;
    }
  }
  a:nth-last-child(1) {
    margin-right: 0;
  }
  a::after {
    display: block;
    content: "";
    margin-top: 0.5rem;
    border-bottom: solid 2px #133c85;
    transform: scaleX(0);
    transition: transform 500ms ease-in-out;
  }
  a:hover::after {
    transform: scaleX(1);
    transform-origin: 0% 50%;
  }

  @media (max-width: 992px) {
    display: flex;
    list-style-type: none;
    margin-top: 0.25rem;

    a {
      margin-right: 1.5rem;
      font-size: 1rem;
      color: white;
      font-weight: 400;
      padding-bottom: 0.5rem;
      cursor: pointer;
      text-decoration: none;
    }
  }

  @media only screen and (max-width: 768px) {
    width: 85%;
    display: none;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    display: static;
    flex-direction: column;
    position: absolute;
    right: 2rem;
    top: 3.25rem;
    text-align: end;
    margin-top: 0;
    background-color: #155bd5;

    a {
      padding-bottom: 0.25rem;
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    display: none;
    width: 87%;
    padding: 0.75rem 1rem;
    border-radius: 5px;
    flex-direction: column;
    position: absolute;
    right: 2rem;
    top: 3.25rem;
    text-align: end;
    margin-top: 0;
    background-color: #155bd5;

    a {
      padding-bottom: 0.25rem;
      margin-right: 0;
    }
  }
`;

export default StyledList;
