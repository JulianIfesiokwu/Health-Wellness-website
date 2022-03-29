import StyledNavbar from "../styled/Navbar.styled.js";
import StyledList from "../styled/Navlist.styled.js";
import LogoContainer from "../styled/LogoContainer.styled.js";
import logo from '../../logo.png'

const Navbar = () => {
    return (
        <StyledNavbar>
            <LogoContainer>
                <img src="" alt="logo" />
            </LogoContainer>
            <StyledList>
                <li>Home</li>
                <li>Services</li>
                <li>Book a session</li>
                <li>Contact Us</li>
            </StyledList>
        </StyledNavbar>
    )
}

export default Navbar