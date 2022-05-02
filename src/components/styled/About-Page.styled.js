import styled from "styled-components";

const StyledAboutPage = styled.div`
  .heading {
    padding: 4rem;
    color: white;
    background-image: url("https://yachting-pages.com/custom/domain_1/image_files/ckeditor/sitemgr_00-massage-therapist-massaging-client.jpg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    height: 100vh;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.7;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }

  h1 {
    width: 50%;
    position: absolute;
    z-index: 3;
    top: 45%;
    font-size: 3rem;
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
      position: relative;
      width: 70%;
      margin: 0 auto;

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
        position: relative;
        top: 9rem;
        cursor: pointer;
        color: #155bd5;
      }
      .right-btn {
        position: relative;
        top: 9rem;
        left: 43rem;
        cursor: pointer;
        color: #155bd5;
      }
    }

    .client-quote {
      padding: 0 5rem;
      margin-bottom: 1rem;
      display: flex;
      flex-direction: column;

      .quote {
        font-size: 1.5rem;
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
`;

export default StyledAboutPage;
