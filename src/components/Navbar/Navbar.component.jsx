import StyledNavbar from "../styled/Navbar.styled.js";
import StyledList from "../styled/Navlist.styled.js";
import LogoContainer from "../styled/LogoContainer.styled.js";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState, useEffect } from "react";

import logo from '../../logo.png'

const Navbar = () => {
    const [showAside, setShowAside] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY > 500) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    useEffect(() => {
        changeBackground()
        // adding the change background when user scroll
        window.addEventListener('scroll', changeBackground)
    })    

    return (
        <StyledNavbar className={navbar ? 'navbar active' : 'navbar no-background'}>
            <LogoContainer>
                <img src={logo} alt="logo" />
                <p>Health & Wellness</p>
            </LogoContainer>
            <div className="menu" onClick={() => {setShowAside(!showAside)}}>
                {showAside ? <AiOutlineMenuUnfold size='30'/> : <AiOutlineMenuFold size='30'/>}                    
            </div>
            <StyledList >
                {/* {showAside &&
                <> */}
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Book a session</li>
                <li>Contact Us</li>
                {/* </> */}
            </StyledList>
         
        </StyledNavbar>
    )
}

export default Navbar