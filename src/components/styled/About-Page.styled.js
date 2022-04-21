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
    width: 60%;
    position: absolute;
    z-index: 3;
    top: 45%;
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
      }

      p {
        margin-bottom: 0.5rem;
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
    padding: 4rem;

    h2 {
      text-align: center;
      text-transform: sentencecase;
      margin-bottom: 2rem;
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
      }
      .right-btn {
        position: relative;
        top: 9rem;
        left: 45rem;
        cursor: pointer;
      }

      .img-container {
        width: 50%;
        margin: 0 auto;
        border-radius: 5px;
        margin-bottom: 1rem;
        img {
          width: 100%;
          height: 200px;
          object-fit: cover;
          border-radius: 5px;
          box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
            0px 8px 16px rgba(96, 97, 112, 0.16);
        }
      }

      .client-quote {
        width: 70%;
        margin: 0 auto;
        text-align: center;
        margin-bottom: 1rem;
      }
    }
  }
`;

export default StyledAboutPage;
