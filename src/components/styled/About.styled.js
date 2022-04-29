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
      border-radius: 5px;
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
      font-size: 1.125rem;
      color: #155bd5;
      font-weight: 600;
      font-family: "Open Sans", "sans-serif";
    }

    .info-summary {
      font-size: 2rem;
      font-weight: 700;
      font-family: "Open Sans", "sans-serif";
      line-height: 40px;
    }

    .controls {
      margin-bottom: 1rem;
      padding: 1rem;
      background-color: #155bd5;
      border-radius: 8px;
      display: flex;
      justify-content: space-between;

      Button {
        margin-right: 0.5rem;
        background-color: white;
        color: #155bd5;
        font-size: 1rem;
        font-weight: 600;

        &:hover {
          background-color: #155bd5;
          color: white;
          border: 1px solid white;
        }
      }
    }

    .summarised {
      font-family: "Open Sans", "sans-serif";
      line-height: 30px;
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
