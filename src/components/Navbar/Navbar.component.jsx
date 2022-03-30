import StyledNavbar from "../styled/Navbar.styled.js";
import StyledList from "../styled/Navlist.styled.js";
import LogoContainer from "../styled/LogoContainer.styled.js";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState } from "react";

import logo from '../../logo.png'

const Navbar = () => {
    const [showAside, setShowAside] = useState(false)

    return (
        <StyledNavbar>
            <LogoContainer>
                <img src="" alt="logo" />
            </LogoContainer>
            <StyledList>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Book a session</li>
                <li>Contact Us</li>
            </StyledList>
            {showAside ? <AiOutlineMenuUnfold size='30' color='white' /> : <AiOutlineMenuFold size='30' color='white' />}
            {/* <AiOutlineMenuFold size='30' color='white' onClick={() => setShowAside(!showAside)}/> */}
            
        </StyledNavbar>
    )
}

export default Navbar