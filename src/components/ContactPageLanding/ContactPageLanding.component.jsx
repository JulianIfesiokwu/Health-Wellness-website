import React from "react";
import ContactLanding from "../styled/ContactPage.styled";

const ContactPageLanding = () => {
    return (

        <ContactLanding>
            <h1>With branches all over the globe, lets improve your quality of life.</h1>
            <div className="all-locations">
                <div className="country">
                    <p className="city">New York, USA</p>
                    <p className="address">5 Harriman Woods New York(NY)</p>
                    <p className="telephone">(+1 570) 253-2853</p>
                </div>
                <div className="country">
                    <p className="city">London, United Kingdom</p>
                    <p className="address">28 Kings Road
                        London, WC13 8MX</p>
                    <p className="telephone">(+44) 020 7946 0752</p>
                </div>
                <div className="country">
                    <p className="city">Lagos, Nigeria</p>
                    <p className="address">55 Coker Road Ilupeju, Lagos</p>
                    <p className="telephone">(+234) 901 585 555</p>
                </div>

            </div>
            </ContactLanding>
    )
}

export default ContactPageLanding