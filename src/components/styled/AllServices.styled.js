import styled from "styled-components";

const AllServices = styled.div`
  padding: 4rem;
  width: 100%;

  .service-card {
    padding: 0.5rem 1rem;
    border: 1px solid #efefef;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;

    &:hover {
      box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
        0px 8px 16px rgba(96, 97, 112, 0.16);
      cursor: pointer;
    }

    .img-container {
      width: 45%;
      img {
        display: block;
        width: 100%;
        height: 250px;
        object-fit: contain;
      }
    }

    .details {
      width: 60%;
      padding: 1rem;
      h4 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      p {
        margin-bottom: 0.5rem;
        line-height: 25px;

        button {
          color: blue;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
      }

      .massage-type {
        font-weight: bold;
      }
    }
  }
`;

export default AllServices;
