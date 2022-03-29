import StyledNavbar from "../styled/Navbar.styled.js";
import StyledList from "../styled/Navlist.styled.js";
import LogoContainer from "../styled/LogoContainer.styled.js";
import logo from '../../logo.png'

const Navbar = () => {
    return (
        <StyledNavbar>
            <LogoContainer>
                <img src={logo} alt="logo" />
            </LogoContainer>
            <StyledList>
                <li>Home</li>
                <li>Portfolio</li>
                <li>Services</li>
                <li>Prices</li>
                <li>Team</li>
                <li>Contact</li>
            </StyledList>
        </StyledNavbar>
    )
}

export default Navbar