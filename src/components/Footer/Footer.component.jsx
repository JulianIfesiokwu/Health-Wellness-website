import Button from "../styled/Button.styled";
import StyledFooter from "../styled/Footer.styled";

const Footer = () => {
    return (
        <StyledFooter>
            <article className="column">
                <img src="" alt="" />
                <p>Making the world a better place through constructing elegant hierarchies.</p>
                <p>&copy; 2022</p>
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
                <p>Subscribe</p>
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