import React from "react";
import StyledSessionPage from "../components/styled/SessionPage.styled";
import { massageTypes } from "../data";
import Button from '../components/styled/Button.styled'

const SessionsPage = () => {
    return (
        <StyledSessionPage>
            <div className="sessions-form">
                <form className="form">
                    <div className="personal-details">
                        <h3 className="form-title">Schedule a session</h3>                 
                        <div className="section-container">
                            <div className="about">
                                <h4 className="title">Profile</h4>
                                <p className="short">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A unde, illo earum voluptatum odio deserunt voluptates quibusdam error dolor dolores.</p>
                            </div>
                            <div className="info">
                                <div className="two-column">
                                    <div className="input-container">
                                        <label htmlFor='first-name'>Firstname</label>
                                        <input type="text" id="first-name" />                            
                                    </div>
                                    <div className="input-container">
                                        <label htmlFor='last-name'>Lastname</label>
                                        <input type="text" id="last-name" />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor='address'>Address</label>
                                    <input type="text" id="address" />
                                </div>
                                <div className="two-column">
                                    <div className="input-container">
                                        <label htmlFor='age'>Age</label>
                                        <input type="number" id="age" />
                                    </div>
                                </div>
                                <div className="input-container">
                                    <label htmlFor='email'>Email</label>
                                    <input type="email" id="email" />
                                </div>
                            </div>  
                        </div>                      
                        <div className="section-container">
                            <div className="about">
                                <h4 className="title">Session Information & Medical History</h4>
                                <p className="short">Lorem ipsum dolor, sit amet consectetur adipisicing elit. A unde, illo earum voluptatum odio deserunt voluptates quibusdam error dolor dolores.</p>
                            </div>
                            <div className="info">
                                <div className="input-container">
                                    <p>Preexisting conditions. Please Check those that apply</p>
                                    <div className="checkbox-container">
                                        <input type="checkbox" id="heart-failure" name="heart-failure" value="heart-failure" />
                                        <label htmlFor="heart-failure">Congestive heart failure</label>
                                    </div>
                                    <div className="checkbox-container">
                                        <input type="checkbox" id="Blood-clots" name="Blood-clots" value="Blood-clots" />
                                        <label htmlFor="Blood-clots">History of blood clots or stroke</label>
                                    </div>
                                    <div className="checkbox-container">
                                        <input type="checkbox" id="liver-problems" name="liver-problems" value="liver-problems" />
                                        <label htmlFor="liver-problems">Liver problems</label>
                                    </div>
                                    <div className="checkbox-container">
                                        <input type="checkbox" id="kidney-problems" name="kidney-problems" value="kidney-problems" />
                                        <label htmlFor="kidney-problems">Kidney problems</label>
                                    </div>
                                </div>
                                <div className="input-container">
                                    <p>Select Country of Appointment:</p>
                                    <select>
                                        <option value="Choose...">Choose...</option>
                                        <option value="Nigeria">Lagos, Nigeria</option>
                                        <option value="USA">New York, USA</option>
                                        <option value="London">London, UK</option>
                                    </select>
                                </div>
                                <div className="input-container">
                                    <p>Choose type of massage appointment:</p>
                                    <select>
                                        <option value='Choose...'>Choose...</option>
                                    {massageTypes.map((massage) => {
                                        const {name} = massage
                                        return (
                                            <option value={name}>{name}</option>
                                        )
                                    })}
                                    </select>
                                </div>
                                <div className="input-container">
                                    <p>Appointment date:</p>
                                    <input type="date" id="birthday" name="birthday" />
                                </div>
                                <div className="input-container">
                                    <p>Appointment time slot:</p>
                                    <select>
                                        <option value='Choose...'>Choose...</option>
                                        <option value='9am'>9 - 11am</option>
                                        <option value='11am'>11am - 1pm</option>
                                        <option value='1pm'>1pm - 3pm</option>
                                        <option value='3pm'>3pm - 5pm</option>
                                    </select>
                                </div>
                            </div>  
                        </div>                      
                        <div className="section-container">
                            <div className="about">
                                <h4 className="title">Billing</h4>
                                <p className="short">A unde, illo earum voluptatum odio deserunt voluptates quibusdam error dolor dolores.</p>
                            </div>
                            <div className="info">
                                <div className="input-container">
                                    <p>Payment Method</p>
                                    <div className="checkbox-container">
                                        <input type="radio" id="cash" name="payment" value="cash" />
                                        <label for="cash">Cash</label>
                                        <input type="radio" id="card" name="payment" value="card" />
                                        <label for="card">Card</label>
                                    </div>
                                    <div className="two-column">
                                        <div className="input-container">
                                            <label htmlFor='card-number'>Card Number:</label>
                                            <input type="number" id="card-number" />                            
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor='expiration-date'>Expiration date:</label>
                                            <input type="date" id="expiration-date" />
                                        </div>
                                        <div className="input-container">
                                            <label htmlFor='back-code'>CW2/CVC2</label>
                                            <input type="number" id="back-code" />
                                        </div>
                                    </div>
                                </div>
                            </div>  
                        </div>                      
                        <div className="section-container">
                            <div className="about">
                                <h4 className="title">Notifications</h4>
                                <p className="short">A unde, illo earum voluptatum odio deserunt voluptates quibusdam error dolor dolores.</p>
                            </div>
                            <div className="info">
                                <div className="input-container">
                                    <p>Please Check those that apply</p>
                                    <div className="checkbox-container">
                                        <input type="checkbox" id="email" name="email" value="email" />
                                        <label htmlFor="email">Email from us about offers,booking confirmations and general plans.</label>
                                    </div>
                                    <div className="checkbox-container">
                                        <input type="checkbox" id="sponsor-offers" name="sponsor-offers" value="sponsor-offers" />
                                        <label htmlFor="sponsor-offers">Emails from our partners and sponsors about offers available in your region.</label>
                                    </div>
                                    <div className="checkbox-container">
                                        <input type="checkbox" id="more-emails" name="more-emails" value="more-emails" />
                                        <label htmlFor="more-emails">More emails??</label>
                                    </div>
                                </div>
                            </div>  
                        </div>                      
                    </div>
                    <Button>submit</Button>
                </form>

            </div>

        </StyledSessionPage>

    )
}

export default SessionsPage