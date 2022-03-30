import StyledContact from "../styled/Contact.styled";
import Button from "../styled/Button.styled";
import { MdEmail,MdLocationOn,MdSchedule } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";

const Contact = () => {
    return (
        <StyledContact>
            <div className="address">
                <p><AiFillPhone size='25'/> 0984537278623</p>
                <p><MdEmail size='25'/> ourCompanyEmail@gmail.com</p>
                <p><MdLocationOn size='25'/> 175 5th Ave, New York, NY 10010 United States</p>
                <p><MdSchedule size='25'/> 10 AM - 5:30 PM</p>
                <p> 24 Hours / 7 Days Open</p>
            </div>
            <form className="form">
                <p>Get in Touch</p>
                <article className="row">
                    <input type="text" placeholder="name"/>
                    <input type="email" placeholder="email"/>
                </article>
                <article className="row">
                    <input type="number" placeholder="phone"/>
                    <input type="text" placeholder="subject"/>
                </article>
                <Button>send</Button>
            </form>

        </StyledContact>
    )
}

export default Contact