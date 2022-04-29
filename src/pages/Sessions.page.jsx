import React from "react";
import StyledSessionPage from "../components/styled/SessionPage.styled";

const SessionsPage = () => {
    return (
        <StyledSessionPage>
            <div className="sessions-form">
                <form className="form">
                    <div className="personal-details">
                        <h3>Personal details</h3>
                        <div className="input-container">
                            <label for='first-name'>Firstname</label>
                            <input type="text" id="first-name" placeholder="first-name"/>                            
                        </div>
                        <div className="input-container">
                            <label for='last-name'>Lastname</label>
                            <input type="text" id="last-name" placeholder="last-name"/>
                        </div>
                        <div className="input-container">
                            <label for='middle-name'>Middlename</label>
                            <input type="text" id="middle-name" placeholder="middle-name"/>
                        </div>
                        <div className="input-container">
                            <label for='age'>Age</label>
                            <input type="number" id="age" placeholder="age"/>
                        </div>
                        <div className="input-container">
                            <label for='address'>Address</label>
                            <input type="text" id="address" placeholder="address"/>
                        </div>
                        <div className="input-container">
                            <label for='email'>Email</label>
                            <input type="email" id="email" placeholder="email"/>
                        </div>
                    </div>
                    <div className="session-details">
                        <label for='location'>location</label>
                        <input type="text" id="location" placeholder="location"/>
                        <label for='choice'>choice</label>
                        <input type="text" id="choice" placeholder="choice"/>
                    </div>
                    <div className="notifications">
                        <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                        <label for="vehicle1">Get important notifications about our products</label>
                        <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                        <label for="vehicle2">A weekly email about our services and products</label>
                        <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                        <label for="vehicle3">Notified about available appointment slots available</label>
                    </div>


                </form>

            </div>

        </StyledSessionPage>

    )
}

export default SessionsPage