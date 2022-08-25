import styled from "styled-components";

const StyledDetailedService = styled.div`
  padding: 4rem 4rem 2rem 4rem;
  background-color: #dddddd;

  .detailed {
    margin-top: 2rem;
    display: flex;
    align-items: center;
    gap: 2%;
  }

  .img-container {
    width: 35%;
    border-radius: 6px;
    img {
      width: 100%;
      height: auto;
      border-radius: 6px;
    }
  }

  .service-info {
    width: 60%;
  }

  .name {
    font-size: 2rem;
    color: #155bd5;
    margin-bottom: 1.5rem;
  }

  .pill {
    margin-bottom: 0.75rem;
  }

  .duration,
  .type,
  .available {
    padding: 0.25rem;
    margin-right: 1rem;
    background-color: skyblue;
    font-size: 0.8rem;
  }

  .desc {
    font-size: 1rem;
    font-family: "Open Sans", "sans-serif";
    margin-bottom: 1.5rem;
  }

  .price {
    font-size: 2rem;
    font-family: "Roboto Condensed", sans-serif;
    font-weight: 600;
    color: #155bd5;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 600px) {
    padding: 4rem 2rem;

        .detailed {
            flex-direction: column;
        }

        .img-container, .service-info {
            width: 100%;
        }
    }
  }
`;

export default StyledDetailedService;
