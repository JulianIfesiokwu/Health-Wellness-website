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

  h1 {
    width: 50%;
    margin: 0 auto;
    margin-bottom: 2rem;
  }

  .all-locations {
    display: flex;
    gap: 3%;
  }
`;

export default ContactLanding;
