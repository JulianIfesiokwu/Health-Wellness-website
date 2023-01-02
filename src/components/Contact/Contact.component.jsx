import React, { useContext } from "react";
import StyledContact from "../styled/Contact.styled";
import Button from "../styled/Button.styled";
import { MdEmail,MdLocationOn,MdSchedule } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { ImCircleRight } from "react-icons/im";
import { ContactFormContext } from "../../contexts/ContactFormContext";

const Contact = () => {
    const { handleInput,handleSubmit } = useContext(ContactFormContext);

    return (
        <>
        <StyledContact>
            <div className="address">
                <p><AiFillPhone size='30' className="icon"/> 0984537278623</p>
                <p><MdEmail size='25' className="icon"/> ourCompanyEmail@gmail.com</p>
                <p><MdLocationOn size='25' className="icon"/> 175 5th Ave, New York, NY 10010 United States</p>
                <p><MdSchedule size='25' className="icon"/> 9 AM - 5:30 PM</p>
                <p>Open: Weekdays</p>
            </div>
            <form className="form" onSubmit={(e) => handleSubmit(e)}>
                <h3>Get in Touch</h3>
                <article className="row">
                    <div className="col-1">
                        <input
                            name='name'
                            placeholder="name" 
                            onChange={(e) => handleInput(e)}
                            required />
                        <p className="error-message">Please fill a name</p>
                    </div>
                    <div className="col-2">
                        <input 
                            name='email'
                            onChange={(e) => handleInput(e)}
                            placeholder="email"
                            required/>
                        <p className="error-message">Enter a valid email address</p>
                    </div>
                </article>
                <article className="row">
                    <div className="col-3">
                        <input
                            name='Subject'
                            onChange={(e) => handleInput(e)}
                            placeholder="subject"
                            required/>
                    </div>
                </article>
                <textarea 
                name='Message'
                onChange={(e) => handleInput(e)}
                rows='6'
                required                
                placeholder='Your message here...' ></textarea>
                <p className="error-message">Please state your inquiry</p>
                <Button type="submit">Send <ImCircleRight className="icon" /></Button>
            </form>
        </StyledContact>
        </>
    )
}

export default Contact