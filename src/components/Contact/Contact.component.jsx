import StyledContact from "../styled/Contact.styled";
import Button from "../styled/Button.styled";
import { MdEmail,MdLocationOn,MdSchedule } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { ImCircleRight } from "react-icons/im";

const Contact = () => {
    return (
        <>
        <StyledContact>
            <div className="address-details">
            <div className="address">
                <p><AiFillPhone size='30' className="icon"/> 0984537278623</p>
                <p><MdEmail size='25' className="icon"/> ourCompanyEmail@gmail.com</p>
                <p><MdLocationOn size='25' className="icon"/> 175 5th Ave, New York, NY 10010 United States</p>
                <p><MdSchedule size='25' className="icon"/> 9 AM - 5:30 PM</p>
                <p>Open: Weekdays</p>
            </div>
            <form className="form">
                <h3>Get in Touch</h3>
                <article className="row">
                    <input type="text" placeholder="name"/>
                    <input type="email" placeholder="email"/>
                </article>
                <article className="row">
                    <input type="number" placeholder="phone"/>
                    <input type="text" placeholder="subject"/>
                </article>
                <textarea rows='6'></textarea>
                <Button>Send <ImCircleRight className="icon" /></Button>
            </form>
            </div>
        </StyledContact>
        </>
    )
}

export default Contact