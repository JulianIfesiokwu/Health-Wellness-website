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

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding-bottom: 0;

    .img-container {
      width: 100%;
    }

    .about-info {
      width: 100%;
      text-align: center;

      .info-summary {
        width: 70%;
        margin: 0 auto;
      }
    }

    .short {
      display: flex;
      align-items: center;
      margin: 2rem auto;

      .controls {
        display: flex;
        flex-direction: column;
        flex: 1;
        justify-content: space-between;
        // remove bottom margin
        margin-bottom: 0;
        Button {
          margin-bottom: 1rem;
        }
      }
      .summarised {
        text-align: justify;
        line-height: 25px;
        flex: 2;
      }
    }
  }

  @media (max-width: 426px) {
    padding: 2rem;

    .about-info {
      .short {
        display: flex;
        flex-direction: column;
        .controls {
          padding: 0;
          Button {
            margin-right: 0;
          }
        }
      }
      .info-summary {
        font-size: 1.8rem;
        width: 90%;
      }
    }
  }
`;

export default StyledAbout;
