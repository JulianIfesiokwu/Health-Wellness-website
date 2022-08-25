import styled from "styled-components";

const AllServices = styled.div`
  padding: 4rem;

  .filter-controls {
    display: flex;
    flex-direction: column;
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
    align-items; center;
    justify-content: space-between;
    align-items: center;
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
      label {
        margin-right: 1rem;
        margin-bottom: 0.5rem;
      }
      select {
        padding: 0.4rem;
        width: 100%;
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
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1%;

    .card-link {
      width: 19%;
      text-decoration: none;
      display:flex;
    }

    .service-card {
      border-radius: 6px;
      position: relative;
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;

      &:hover {
        box-shadow: 0px 2px 4px rgba(40, 41, 61, 0.04),
          0px 8px 16px rgba(96, 97, 112, 0.16);
        cursor: pointer;
      }

      .img-container {
        width: 100%;
        img {
          display: block;
          width: 100%;
          height: auto;
          border-radius: 6px;
          transition: all 0.5s ease-in-out;
        }

        :before {
          content: "";
          position: absolute;
          background: rgba(0, 0, 0, 0.4);
          border-radius: 5px;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }

        :hover {
          transform: scale(1.1);
          overflow: hidden;
        }
      }

      .details {
        position: absolute;
        bottom: 0;
        padding: 1rem;
        h4 {
          font-size: 1rem;
          margin-bottom: 0.2rem;
          color: #fff;
          font-family: "Open Sans", "sans-serif";
          font-weight: 300;
        }

        p {
          font-size: 0.7rem;
          margin-bottom: 0.8rem;
          line-height: 22px;
          color: #fff;
        }

        .price {
          font-family: 'Roboto Condensed', sans-serif;
          letter-spacing: 1px;
          font-weight: bold;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          color: #fff;
        }
      }
    }
  }

  @media (max-width: 992px) {
    padding: 2rem;
  }
  @media (max-width: 768px) {
    padding: 2rem;
    .listed-services {
      justify-content: space-between;

      .card-link {
      width: 50%;
      text-decoration: none;
      display:flex;
    }
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

  @media (max-width: 600px) {
    padding: 2rem;

    .filter-controls {
      label {
        display: block;
      }
    }

    .listed-services {
      justify-content: space-between;
      .service-card {
        flex-direction: column;
        padding: 0;
        width: 47%;

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
