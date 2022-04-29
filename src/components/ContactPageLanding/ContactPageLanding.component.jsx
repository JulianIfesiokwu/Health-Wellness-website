import React from "react";
import ContactLanding from "../styled/ContactPage.styled";

const ContactPageLanding = () => {
    return (

        <ContactLanding>
            <h1>We have branches all over the globe ensuring a quality life and rest.</h1>
            <div className="all-locations">
                <div className="country">
                    <p className="city">Lagos, Nigeria</p>
                    <p className="address">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse voluptas corporis facilis cumque maiores itaque mollitia. </p>
                    <p className="telephone">0900 555 555</p>
                </div>
                <div className="country">
                    <p className="city">New York, USA</p>
                    <p className="address">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse voluptas corporis facilis cumque maiores itaque mollitia. </p>
                    <p className="telephone">0900 555 555</p>
                </div>
                <div className="country">
                    <p className="city">London, United Kingdom</p>
                    <p className="address">Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam esse voluptas corporis facilis cumque maiores itaque mollitia. </p>
                    <p className="telephone">0900 555 555</p>
                </div>

            </div>
            </ContactLanding>
    )
}

export default ContactPageLanding