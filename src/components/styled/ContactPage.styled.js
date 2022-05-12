import styled from "styled-components";

const ContactLanding = styled.div`
  background-color: #ffff00;
  background-image: url("https://images.pexels.com/photos/3769118/pexels-photo-3769118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 100vh;
  width: 100%;
  padding: 2rem 4rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;

  h1 {
    width: 60%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 7;
    font-size: 3.75rem;
    font-weight: 900;
    line-height: 65px;
    text-align: center;
  }

  .all-locations {
    display: flex;
    justify-content: space-between;
    gap: 3%;
    z-index: 6;
    color: white;
    position: absolute;
    left: 50%;
    top: 80%;
    width: 90%;
    transform: translate(-50%, -50%);
    text-align: center;
    font-size: 1.2rem;

    .country {
      width: 30%;
      p {
        margin-top: 0.5rem;
        font-family: "Open Sans", "sans-serif";
      }

      .city {
        font-size: 1.25rem;
      }
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.9;
    background-color: rgba(0, 0, 0, 0.7);
  }

  @media (max-width: 992px) {
    h1 {
      width: 60%;
      color: white;
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 6;
      font-size: 2.5rem;
      font-weight: 900;
      line-height: 45px;
      text-align: center;
    }

    .all-locations {
      width: 90%;
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 6;
    }
  }
  @media (max-width: 768px) {
    h1 {
      margin: 0 auto;
      font-size: 2.5rem;
      line-height: 45px;
      text-align: center;
      position: absolute;
      text-align: center;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      line-height: 45px;
      width: 70%;
    }

    .all-locations {
      width: 90%;
      position: absolute;
      left: 50%;
      top: 65%;
      transform: translate(-50%, -50%);
      text-align: center;
      z-index: 7;
      font-size: 1rem;
      line-height: 20px;
    }
  }

  @media (max-width: 600px) {
    padding: 2rem;

    h1 {
      position: absolute;
      text-align: center;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 6;
      font-size: 2.5rem;
      line-height: 40px;
      width: 70%;
    }

    .all-locations {
      width: 90%;
      position: absolute;
      top: 70%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 7;
      font-size: 1rem;
      line-height: 20px;
      text-align: center;

      .country {
        width: 30%;
        p {
          margin-top: 0.5rem;
          font-family: "Open Sans", "sans-serif";
        }

        .city {
          font-size: 1rem;
        }
      }
    }
  }
`;

export default ContactLanding;
