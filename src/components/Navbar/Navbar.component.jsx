import StyledNavbar from "../styled/Navbar.styled.js";
import StyledList from "../styled/Navlist.styled.js";
import LogoContainer from "../styled/LogoContainer.styled.js";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState, useEffect } from "react";

import logo from '../../logo.png'

const Navbar = () => {
    const [showAside, setShowAside] = useState(false)
    // useEffect((
    //     window.scroll(() => {
    //         const scroll = window.scrollTop()
    //         if(scroll > 300) {
    //             console.log('yes')
    //         }
    //     })
    // ), [])
    

    return (
        <StyledNavbar>
            <LogoContainer>
                <img src={logo} alt="logo" />
                <p>Health & Wellness</p>
            </LogoContainer>
            <StyledList >
                <div className="menu" onClick={() => {setShowAside(!showAside)}}>
                    {showAside ? <AiOutlineMenuUnfold size='30'/> : <AiOutlineMenuFold size='30'/>}                     

                {showAside && 
                    <>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Book a session</li>
                        <li>Contact Us</li>
                    </>
                }
                </div>
            </StyledList>
         
        </StyledNavbar>
    )
}

export default Navbar