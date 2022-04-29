import StyledContact from "../styled/Contact.styled";
import Button from "../styled/Button.styled";
import { MdEmail,MdLocationOn,MdSchedule } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import ContactLanding from "../styled/ContactPage.styled";

const Contact = () => {
    return (
        <>
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
                <Button>send</Button>
            </form>
            </div>
        </StyledContact>
        </>
    )
}

export default Contact