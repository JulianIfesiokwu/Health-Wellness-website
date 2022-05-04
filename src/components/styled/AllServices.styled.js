import styled from "styled-components";

const AllServices = styled.div`
  padding: 4rem;

  .filter-controls {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;

    h3 {
      font-family: "Open Sans", "sans-serif";
      font-weight: 300;
      color: #155bd5;
      text-align: center;
    }

    .icon {
      vertical-align: middle;
    }
    form {
      #category {
        padding: 0.5rem;
      }
    }
  }

  .search-options {
    display: flex;
    width: 100%;
    button {
      padding: 0.5rem 0.75rem;
      border-radius: 25px;
      border: none;
      text-transform: uppercase;
    }

    .search-category,
    .search-price,
    .search-available {
      margin: 1rem;
      label {
        margin-right: 1rem;
      }
      select {
        padding: 0.4rem;
      }
      button {
        cursor: pointer;
        margin-right: 1rem;
      }
    }
  }

  .listed-services {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: 1%;

    .service-card {
      width: 24%;
      border: 1px solid #d3d3d3;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-bottom: 1rem;

      &:hover {
        box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
          0px 8px 16px rgba(96, 97, 112, 0.16);
        cursor: pointer;
      }

      .img-container {
        width: 100%;
        img {
          width: 100%;
          height: auto;
          object-fit: contain;
          border-radius: 5px 5px 0 0;
        }
      }

      .details {
        padding: 1rem;
        h4 {
          font-size: 1rem;
          margin-bottom: 0.8rem;
          color: #155bd5;
          font-family: "Open Sans", "sans-serif";
          font-weight: 300;
        }

        p {
          margin-bottom: 0.2rem;
          line-height: 22px;

          button {
            color: blue;
            background-color: transparent;
            border: none;
            cursor: pointer;
          }
        }

        .description {
          font-size: 0.8rem;
          margin-bottom: 0.5rem;
        }

        .price {
          font-family: "Open Sans", "sans-serif";
          font-weight: bold;
          font-size: 1.3rem;
          margin-bottom: 1rem;
        }

        .schedule-btn {
          font-size: 0.9rem;
          width: 100%;
          background-color: #155bd5;
          color: white;

          &:hover {
            color: #155bd5;
            background-color: white;
          }
        }
        .massage-type {
          font-weight: bold;
        }
      }
    }

    @media (max-width: 768px) {
      padding: 2rem;

      .service-card {
        flex-direction: column;
        padding: 0;

        .img-container {
          width: 100%;

          img {
            display: block;
          }
        }

        .details {
          width: 100%;
        }
      }
    }
  }
`;

export default AllServices;
