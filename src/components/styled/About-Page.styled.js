import styled from "styled-components";

const StyledAboutPage = styled.div`
  .heading {
    padding: 0 4rem;
    color: white;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.9;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  h1 {
    width: 60%;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 7;
    font-size: 3.5rem;
    font-weight: 900;
    line-height: 65px;
    text-align: center;
  }

  .history {
    padding: 4rem;
    display: flex;
    gap: 3%;
    align-items: center;

    .details {
      width: 50%;

      h2 {
        margin-bottom: 1rem;
        font-size: 2rem;
        color: #155bd5;
      }

      p {
        margin-bottom: 0.5rem;
        line-height: 25px;
        font-family: "Open Sans", "sans-serif";
      }
    }

    .img-container {
      width: 50%;

      img {
        width: 100%;
        border-radius: 5px;
        box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
          0px 8px 16px rgba(96, 97, 112, 0.16);
      }
    }
  }

  .testimonials {
    padding: 2rem 4rem;

    h2 {
      text-align: center;
      text-transform: sentencecase;
      color: #155bd5;
      font-size: 2rem;
      font-family: "Open Sans", "sans-serif";
    }

    .carousel {
      width: 80%;
      height: 60vh;
      margin: 0 auto;
      display: flex;
      align-items: center;

      .slide {
        opacity: 0;
        display: none;
        transition-duration: 1s ease;
      }

      .slide.active {
        opacity: 1;
        display: block;
        transition-duration: 1s;
        transform: scale(1.08);
      }

      .left-btn {
        cursor: pointer;
        color: #155bd5;
        width: 20%;
      }
      .right-btn {
        width: 20%;
        cursor: pointer;
        color: #155bd5;
      }
    }

    .client-quote {
      padding: 0 2rem;
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;

      .quote {
        font-size: 1.2rem;
        font-family: "Open Sans", "sans-serif";

        .icon {
          color: grey;
        }
      }

      .client {
        display: flex;
        align-items: center;

        .img-container {
          width: 50px;
          height: 50px;
          margin: 1rem 1rem 1rem 0;
          border-radius: 50%;
          box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
            0px 8px 16px rgba(96, 97, 112, 0.16);
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 50%;
          }
        }

        .name {
          color: #155bd5;
        }

        .occupation {
          color: grey;
          text-transform: uppercase;
          font-size: 0.8rem;
          margin-top: 0.3rem;
        }
      }
    }
  }

  @media (max-width: 992px) {
    h1 {
      font-size: 4rem;
      line-height: 65px;
    }

    .history {
      padding: 2rem;
    }

    .testimonials {
      padding: 2rem;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 3rem;
      width: 70%;
      text-align: center;
      top: 60%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .history {
      padding: 2rem;
      flex-direction: column;

      .details {
        width: 100%;
        margin-bottom: 1rem;
      }

      .img-container {
        width: 100%;
      }
    }

    .testimonials {
      padding: 2rem;
    }
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 2.5rem;
      width: 80%;
      text-align: center;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      line-height: 40px;
    }

    .history {
      padding: 2rem;
      flex-direction: column;

      .details {
        width: 100%;
        margin-bottom: 1rem;
      }

      .img-container {
        width: 100%;
      }

      img {
        display: block;
      }
    }

    .testimonials {
      padding: 2rem;

      h2 {
        text-align: start;
      }

      .carousel {
        width: 100%;
      }
    }
  }
`;

export default StyledAboutPage;
