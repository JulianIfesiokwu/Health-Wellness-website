import React, { useContext } from "react";
import Button from "../styled/Button.styled";
import { FooterFormContext } from "../../contexts/FooterFormContext";
import StyledFooter from "../styled/Footer.styled";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { ImCircleRight } from "react-icons/im";

const Footer = () => {
    const { handleInput, handleSubmit } = useContext(FooterFormContext);

    return (
        <StyledFooter>
            <article className="column">
                <img src="" alt="" />
                <p>Making the world a better place through constructing elegant hierarchies.</p>
                <p>&copy; 2022</p>
                <p className="social"><FaFacebook size='20'/> <FaInstagram size='20'/> <FaTwitter size='20'/> <FaWhatsapp size='20'/></p>
            </article>
            <article className="column">
                <p className="heading">Solutions</p>
                <p>Marketing</p>
                <p>Analytics</p>
                <p>Commerce</p>
                <p>Insights</p>
            </article>
            <article className="column">
                <p className="heading">Support</p>
                <p>Marketing</p>
                <p>Analytics</p>
                <p>Commerce</p>
                <p>Insights</p>
            </article>
            <article className="column">
                <p>Subscribe to our latest newspaper and updates</p>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type='text'
                        placeholder='email address'
                        name='subscribe-email'
                        onChange={(e) => handleInput(e)}
                        required />
                    <Button type="submit">subscribe <ImCircleRight className="icon"/></Button>                    
                </form>
            </article>

        </StyledFooter>
    )
}

export default Footer;