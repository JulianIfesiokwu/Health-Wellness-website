import React from "react";
import { massageTypes } from "../data";
import { Link, useParams } from "react-router-dom";
import { ImCircleRight } from "react-icons/im";
import Button from "../components/styled/Button.styled";
import StyledDetailedService from "../components/styled/DetailedService.styled";

const DetailedServicePage = () => {
  const { id } = useParams();
  // find service user chose
  const service = massageTypes.find((massageType) => {
    return parseInt(id) === parseInt(massageType.id);
  });

  const numberFormatter = Intl.NumberFormat("en-US");
  const { name, img, duration, desc, available, type, price } = service;

  return (
    <StyledDetailedService>
      <Link to="/services">
        <Button>Back to services</Button>
      </Link>
      <div className="detailed">
        <div className="img-container">
          <img src={img} alt={name} />
        </div>
        <div className="service-info">
          <h4 className="name">{name}</h4>
          <p className="pill">
            <span className="duration">{duration}</span>
            <span className="type">{type}</span>
            <span className="available">{available}</span>
          </p>
          <p className="desc">{desc}</p>
          <p className="price">&#8358;{numberFormatter.format(price)}</p>
          <Link to="/sessions">
            <Button>
              Schedule a session <ImCircleRight size="25" className="icon" />
            </Button>
          </Link>
        </div>
      </div>
    </StyledDetailedService>
  );
};

export default DetailedServicePage;
