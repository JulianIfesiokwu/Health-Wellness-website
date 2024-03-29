import React from "react";
import { Link } from "react-router-dom";
import ServicesVideo from "../components/Video/ServicesVideo.component";
import ServicesPageStyled from "../components/styled/ServicesPage.styled";
import Button from "../components/styled/Button.styled";
import AllServices from "../components/styled/AllServices.styled";
import { massageTypes } from "../data";
import OneService from "../components/OneService/OneService.component";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import { motion } from "framer-motion";

const allCategories = [
  "all",
  ...new Set(massageTypes.map((massage) => massage.type)),
];
const allPrices = [
  "all",
  ...new Set(massageTypes.map((massage) => massage.price)),
];
const allLocations = [].concat(
  "all",
  ...new Set(...massageTypes.map((massage) => massage.available))
);

const ServicesPage = () => {
  // const [categories, setCategories] = useState(allCategories);
  const [services, setServices] = useState(massageTypes);

  const filterServices = (type) => {
    if (type === "all") {
      setServices(massageTypes);
      console.log(allLocations);
      return;
    }
    const newServices = massageTypes.filter((service) => service.type === type);
    setServices(newServices);
  };
  const filterPrice = (type) => {
    if (type === "all") {
      setServices(massageTypes);
      return;
    }
    const newPrices = massageTypes.filter((service) => service.price <= type);
    setServices(newPrices);
  };
  const filterLocation = (type) => {
    if (type === "all") {
      setServices(massageTypes);
      return;
    }
    const newLocation = massageTypes.filter((service) =>
      service.available.includes(type)
    );
    setServices(newLocation);
    console.log(type);
  };

  return (
    <>
      <ServicesPageStyled>
        <ServicesVideo />
        <h1>Explore a wide range of affordable services.</h1>
        <p>
          Schedule your session with any of our massage therapists either on
          site or in your home.
        </p>
        <Button>Lets GO!</Button>
      </ServicesPageStyled>
      <AllServices>
        <div className="filter-controls">
          <h3>
            Search services by filters{" "}
            <AiOutlineSearch className="icon" size="30" />
          </h3>
          <div className="search-options">
            <div className="search-category">
              <label htmlFor="categories">By Category: </label>
              <select
                name="categories"
                id="categories"
                onChange={(e) => {
                  filterServices(e.target.value);
                }}
              >
                {allCategories.map((category) => {
                  return (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="search-price">
              <label htmlFor="prices">Maximum Price: </label>
              <select
                name="prices"
                id="prices"
                onChange={(e) => {
                  filterPrice(e.target.value);
                }}
              >
                &#8358;
                {allPrices.map((price) => {
                  return (
                    <option key={price} value={price}>
                      {price}
                    </option>
                  );
                })}
              </select>
            </div>
            <motion.div layout className="search-available">
              <label htmlFor="location">Location: </label>
              {allLocations.map((location) => {
                return (
                  <button
                    key={location}
                    onClick={() => filterLocation(location)}
                  >
                    {location}
                  </button>
                );
              })}
            </motion.div>
          </div>
        </div>
        <div className="listed-services">
          {services.map((massage) => {
            const { id } = massage;
            return (
              <Link to={`/services/${id}`} key={id} className="card-link">
                <OneService key={id} massage={massage} />
              </Link>
            );
          })}
        </div>
      </AllServices>
    </>
  );
};

export default ServicesPage;
