import styled from "styled-components";

const StyledAbout = styled.section`
  padding: 4rem 4rem 2rem 4rem;
  display: flex;
  align-items: center;
  gap: 3%;

  .img-container {
    width: 55%;
    img {
      width: 100%;
      border-radius: 8px;
    }
  }

  .about-info {
    text-align: start;
    width: 45%;

    .info-title,
    .info-summary {
      margin-bottom: 0.5rem;
    }

    .info-title {
      text-transform: uppercase;
      font-size: 1.2rem;
    }

    .info-summary {
      font-size: 2.2rem;
      font-weight: 600;
    }
    .controls {
      margin-bottom: 1rem;
      padding: 1rem 1rem 1rem 0;

      Button {
        margin-right: 1rem;
      }
    }
  }
`;

export default StyledAbout;
