import React from "react";
import StyledSessionPage from "../components/styled/SessionPage.styled";
import { massageTypes } from "../data";
import Button from "../components/styled/Button.styled";
import { useForm } from "react-hook-form";

const SessionsPage = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <StyledSessionPage>
      <div className="sessions-form">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="personal-details">
            <h3 className="form-title">Schedule a session</h3>
            <div className="section-container">
              <div className="about">
                <h4 className="title">Profile</h4>
                <p className="short">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  unde, illo earum voluptatum odio deserunt voluptates quibusdam
                  error dolor dolores.
                </p>
              </div>
              <div className="info">
                <div className="two-column">
                  <div className="input-container">
                    <label htmlFor="first-name">Firstname</label>
                    <input
                      type="text"
                      {...register("firstname", { required: true })}
                      id="first-name"
                    />
                    <p className="error-message">
                      {errors.firstname && "Your first name"}
                    </p>
                  </div>
                  <div className="input-container">
                    <label htmlFor="lastname">Lastname</label>
                    <input
                      type="text"
                      {...register("lastname", { required: true })}
                      id="last-name"
                    />
                    <p className="error-message">
                      {errors.lastname && "Your last name"}
                    </p>
                  </div>
                </div>
                <div className="input-container">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    {...register("address", { required: true })}
                    id="address"
                  />
                  <p className="error-message">
                    {errors.address && "Your corespondence address"}
                  </p>
                </div>
                <div className="two-column">
                  <div className="input-container">
                    <label htmlFor="age">Age</label>
                    <input
                      type="number"
                      {...register("age", { required: true, min: 18 })}
                      id="age"
                    />
                    <p className="error-message">
                      {errors.age && "No less than 18"}
                    </p>
                  </div>
                </div>
                <div className="input-container">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    {...register("email", {
                      required: true,
                      pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                    })}
                    id="email"
                  />
                  <p className="error-message">
                    {errors.email && "A valid email"}
                  </p>
                </div>
              </div>
            </div>
            <div className="section-container">
              <div className="about">
                <h4 className="title">Session Information & Medical History</h4>
                <p className="short">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. A
                  unde, illo earum voluptatum odio deserunt voluptates quibusdam
                  error dolor dolores.
                </p>
              </div>
              <div className="info">
                <div className="input-container">
                  <p>Preexisting conditions. Please check those that apply</p>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      {...register("heart-failure")}
                      id="heart-failure"
                      name="heart-failure"
                      value="heart-failure"
                    />
                    <label htmlFor="heart-failure">
                      Congestive heart failure
                    </label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      {...register("Blood-clots")}
                      id="Blood-clots"
                      name="Blood-clots"
                      value="Blood-clots"
                    />
                    <label htmlFor="Blood-clots">
                      History of blood clots or stroke
                    </label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      {...register("liver-problems")}
                      id="liver-problems"
                      name="liver-problems"
                      value="liver-problems"
                    />
                    <label htmlFor="liver-problems">Liver problems</label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      {...register("kidney-problems")}
                      id="kidney-problems"
                      name="kidney-problems"
                      value="kidney-problems"
                    />
                    <label htmlFor="kidney-problems">Kidney problems</label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      {...register("no health problems")}
                      id="no health problems"
                      name="no health problems"
                      value="no health problems"
                    />
                    <label htmlFor="no health problems">
                      No current health conditions
                    </label>
                  </div>
                </div>
                <div className="input-container">
                  <p>Select Country of Appointment:</p>
                  <select
                    {...register("country", {
                      required: true,
                      validate: (value) => value !== "Choose...",
                    })}
                  >
                    <option value="Choose...">Choose...</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="USA">USA</option>
                    <option value="London">UK</option>
                  </select>
                  <p className="error-message">
                    {errors.country && "Select country of appointment"}
                  </p>
                </div>
                <div className="input-container">
                  <p>Choose type of massage appointment:</p>
                  <select
                    {...register("massage", {
                      required: true,
                      validate: (value) => value !== "Choose...",
                    })}
                  >
                    <option value="Choose...">Choose...</option>
                    {massageTypes.map((massage) => {
                      const { name } = massage;
                      return (
                        <option value={name} key={name}>
                          {name}
                        </option>
                      );
                    })}
                  </select>
                  <p className="error-message">
                    {errors.massage && "Please choose a service"}
                  </p>
                </div>
                <div className="input-container">
                  <p>Appointment date:</p>
                  <input
                    type="date"
                    {...register("date", {
                      required: true,
                      validate: (value) => new Date() < Date.parse(value),
                    })}
                    id="date"
                    name="date"
                  />
                  <p className="error-message">
                    {errors.date && "Please choose a future date "}
                  </p>
                </div>
                <div className="input-container">
                  <p>Appointment time slot:</p>
                  <select
                    {...register("timeSlot", {
                      required: true,
                      validate: (value) => value !== "Choose...",
                    })}
                  >
                    <option value="Choose...">Choose...</option>
                    <option value="9am - 11am">9 - 11am</option>
                    <option value="11am - 1pm">11am - 1pm</option>
                    <option value="1pm - 3pm">1pm - 3pm</option>
                    <option value="3pm - 5pm">3pm - 5pm</option>
                  </select>
                  <p className="error-message">
                    {errors.timeSlot && "Choose appointment time"}
                  </p>
                </div>
              </div>
            </div>
            <div className="section-container">
              <div className="about">
                <h4 className="title">Billing</h4>
                <p className="short">
                  A unde, illo earum voluptatum odio deserunt voluptates
                  quibusdam error dolor dolores.
                </p>
              </div>
              <div className="info">
                <div className="input-container">
                  <p>Payment Method</p>
                  <div className="checkbox-container">
                    <div>
                      <label htmlFor="cash">
                        <input
                          type="radio"
                          {...register("payMethod", { required: true })}
                          id="cash"
                          name="payMethod"
                          value="cash"
                        />
                        Cash
                      </label>
                    </div>
                    <div>
                      <label htmlFor="card">
                        <input
                          type="radio"
                          {...register("payMethod", { required: true })}
                          id="card"
                          name="payMethod"
                          value="card"
                        />
                        Card
                      </label>
                    </div>
                  </div>
                  <div className="two-column">
                    <div className="input-container">
                      <label htmlFor="card-number">Card Number:</label>
                      <input type="number" id="card-number" />
                    </div>
                    <div className="input-container">
                      <label htmlFor="expiration-date">Expiration date:</label>
                      <input type="date" id="expiration-date" />
                    </div>
                    <div className="input-container">
                      <label htmlFor="back-code">CW2/CVC2</label>
                      <input type="number" id="back-code" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-container">
              <div className="about">
                <h4 className="title">Notifications</h4>
                <p className="short">
                  A unde, illo earum voluptatum odio deserunt voluptates
                  quibusdam error dolor dolores.
                </p>
              </div>
              <div className="info">
                <div className="input-container">
                  <p>Please Check those that apply</p>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      {...register("email-offers")}
                      id="email-offers"
                      name="email-offers"
                      value="email-offers"
                    />
                    <label htmlFor="email-offers">
                      Email from us about offers,booking confirmations and
                      general plans.
                    </label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      {...register("partner-offers")}
                      id="sponsor-offers"
                      name="sponsor-offers"
                      value="sponsor-offers"
                    />
                    <label htmlFor="sponsor-offers">
                      Emails from our partners and sponsors about offers
                      available in your region.
                    </label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      {...register("more-emails")}
                      id="more-emails"
                      name="more-emails"
                      value="more-emails"
                    />
                    <label htmlFor="more-emails">More emails??</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Button type="submit">submit</Button>
        </form>
      </div>
    </StyledSessionPage>
  );
};

export default SessionsPage;
