import Button from "../styled/Button.styled";
import StyledFooter from "../styled/Footer.styled";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <StyledFooter>
            <article className="column">
                <img src="" alt="" />
                <p>Making the world a better place through constructing elegant hierarchies.</p>
                <p>&copy; 2022</p>
                <p className="social"><FaFacebook size='20'/> <FaInstagram size='20'/> <FaTwitter size='20'/> <FaWhatsapp size='20'/></p>
            </article>
            <article className="column">
                <p>Solutions</p>
                <p>Marketing</p>
                <p>Analytics</p>
                <p>Commerce</p>
                <p>Insights</p>
            </article>
            <article className="column">
                <p>Support</p>
                <p>Marketing</p>
                <p>Analytics</p>
                <p>Commerce</p>
                <p>Insights</p>
            </article>
            <article className="column">
                <p>Subscribe to our latest newspaper and updates</p>
                <form>
                    <input type='email' placeholder='subscribe' />
                    <Button>subscribe</Button>
                </form>
            </article>

        </StyledFooter>
    )
}

export default Footer;