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
    margin: 0 auto;
    margin-bottom: 2rem;
    z-index: 6;
    font-size: 3.5rem;
  }

  .all-locations {
    display: flex;
    justify-content: space-between;
    gap: 3%;
    z-index: 6;

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
`;

export default ContactLanding;
