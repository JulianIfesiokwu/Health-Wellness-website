import React from "react";
import StyledSessionPage from "../components/styled/SessionPage.styled";
import { massageTypes } from "../data";
import Button from "../components/styled/Button.styled";
import { useContext } from "react";
import { SessionsFormContext } from "../contexts/SessionsFormContext";

const SessionsPage = () => {
  const { handleInput, handleSubmit } = useContext(SessionsFormContext);

  return (
    <StyledSessionPage>
      <div className="sessions-form">
        <form className="form" onSubmit={(e) => handleSubmit(e)}>
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
                      id="first-name"
                      name="first-name"
                      onChange={(e) => handleInput(e)}
                      required
                    />
                    <p className="error-message">Your first name</p>
                  </div>
                  <div className="input-container">
                    <label htmlFor="lastname">Lastname</label>
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      onChange={(e) => handleInput(e)}
                      required
                    />
                    <p className="error-message">Your last name</p>
                  </div>
                </div>
                <div className="input-container">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={(e) => handleInput(e)}
                    required
                  />
                  <p className="error-message">Your corespondence address</p>
                </div>
                <div className="two-column">
                  <div className="input-container">
                    <label htmlFor="age">Age</label>
                    <input
                      type="number"
                      id="age"
                      name="Age"
                      onChange={(e) => handleInput(e)}
                      required
                    />
                    <p className="error-message">No less than 18</p>
                  </div>
                </div>
                <div className="input-container">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="Email"
                    onChange={(e) => handleInput(e)}
                    required
                  />
                  <p className="error-message">A valid email</p>
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
                      id="heart-failure"
                      name="heart-failure"
                      value="heart-failure"
                      onChange={(e) => handleInput(e)}                      
                    />
                    <label htmlFor="heart-failure">
                      Congestive heart failure
                    </label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="Blood-clots"
                      name="Blood-clots"
                      value="Blood-clots"
                      onChange={(e) => handleInput(e)}
                    />
                    <label htmlFor="Blood-clots">
                      History of blood clots or stroke
                    </label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="liver-problems"
                      name="liver-problems"
                      value="liver-problems"
                      onChange={(e) => handleInput(e)}
                    />
                    <label htmlFor="liver-problems">Liver problems</label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="kidney-problems"
                      name="kidney-problems"
                      value="kidney-problems"
                      onChange={(e) => handleInput(e)}
                    />
                    <label htmlFor="kidney-problems">Kidney problems</label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="no health problems"
                      name="no health problems"
                      value="no health problems"
                      onChange={(e) => handleInput(e)}
                    />
                    <label htmlFor="no health problems">
                      No current health conditions
                    </label>
                  </div>
                </div>
                <div className="input-container">
                  <p>Select Country of Appointment:</p>
                  <select
                  onChange={(e) => handleInput(e)}
                  >
                    <option value="Choose...">Choose...</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="USA">USA</option>
                    <option value="London">UK</option>
                  </select>
                  <p className="error-message">Select country of appointment</p>
                </div>
                <div className="input-container">
                  <p>Choose type of massage appointment:</p>
                  <select onChange={(e) => handleInput(e)}>
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
                  <p className="error-message">Please choose a service</p>
                </div>
                <div className="input-container">
                  <p>Appointment date:</p>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    onChange={(e) => handleInput(e)}
                  />
                  <p className="error-message">Please choose a future date</p>
                </div>
                <div className="input-container">
                  <p>Appointment time slot:</p>
                  <select onChange={(e) => handleInput(e)}>
                    <option value="Choose...">Choose...</option>
                    <option value="9am - 11am">9 - 11am</option>
                    <option value="11am - 1pm">11am - 1pm</option>
                    <option value="1pm - 3pm">1pm - 3pm</option>
                    <option value="3pm - 5pm">3pm - 5pm</option>
                  </select>
                  <p className="error-message">Choose appointment time</p>
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
                          id="cash"
                          name="payMethod"
                          value="cash"
                          onChange={(e) => handleInput(e)}
                        />
                        Cash
                      </label>
                    </div>
                    <div>
                      <label htmlFor="card">
                        <input
                          type="radio"
                          id="card"
                          name="payMethod"
                          value="card"
                          onChange={(e) => handleInput(e)}
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
                      id="email-offers"
                      name="email-offers"
                      value="email-offers"
                      onChange={(e) => handleInput(e)}
                    />
                    <label htmlFor="email-offers">
                      Email from us about offers,booking confirmations and
                      general plans.
                    </label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="sponsor-offers"
                      name="sponsor-offers"
                      value="sponsor-offers"
                      onChange={(e) => handleInput(e)}
                    />
                    <label htmlFor="sponsor-offers">
                      Emails from our partners and sponsors about offers
                      available in your region.
                    </label>
                  </div>
                  <div className="checkbox-container">
                    <input
                      type="checkbox"
                      id="more-emails"
                      name="more-emails"
                      value="more-emails"
                      onChange={(e) => handleInput(e)}
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
