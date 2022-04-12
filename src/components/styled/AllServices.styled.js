import styled from "styled-components";

const AllServices = styled.div`
  padding: 4rem;
  width: 100%;

  .service-card {
    padding: 1rem;
    border: 1px solid #efefef;
    border-radius: 5px;
    display: flex;
    margin-bottom: 1.5rem;

    .img-container {
      img {
        width: 100%;
        height: 350px;
        object-fit: contain;
      }
    }

    .details {
      width: 45%;
    }
  }
`;

export default AllServices;
