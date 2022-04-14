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

    .details {
      h2 {
        margin-bottom: 1rem;
      }

      p {
        width: 50%;
        margin-bottom: 0.5rem;
      }
    }

    .img-container {
      width: 50%;

      img {
        width: 100%;
      }
    }
  }
`;

export default StyledAboutPage;
