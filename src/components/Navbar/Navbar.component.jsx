import StyledNavbar from "../styled/Navbar.styled.js";
import StyledList from "../styled/Navlist.styled.js";
import LogoContainer from "../styled/LogoContainer.styled.js";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

import logo from '../../logo.png'

const Navbar = () => {
    const [showAside, setShowAside] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const changeBackground = () => {
        if(window.scrollY > 400) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }

    const toggleLinks = () => {
        setShowAside(!showAside)
    }

    useEffect(() => {
        changeBackground()
        // adding the change background when user scroll
        window.addEventListener('scroll', changeBackground)
    })    

    return (
        <StyledNavbar className={navbar ? 'navbar nav-active' : 'navbar no-background'}>
            <div className="heading">
                <Link to='/'>
                <LogoContainer>
                    <img src={logo} alt="logo" />
                    <p>Health & Wellness</p>
                </LogoContainer>
                </Link>
                <div className="menu" onClick={toggleLinks}>
                    {showAside ? <AiOutlineClose size='30'/> : <AiOutlineMenu size='30'/>}                    
                </div>
            </div>
            <StyledList className={showAside ? "show-container" : ""}>
                <NavLink to='/' style={({ isActive }) => { return { color: isActive ? "#133c85" : "white" };}} onClick={() => toggleLinks()}>Home</NavLink>
                <NavLink to='/about' style={({ isActive }) => { return { color: isActive ? "#133c85" : "white" };}} onClick={() => toggleLinks()}>About Us</NavLink>
                <NavLink to='/services' style={({ isActive }) => { return { color: isActive ? "#133c85" : "white" };}} onClick={() => toggleLinks()}>Services</NavLink>
                <NavLink to='/sessions' style={({ isActive }) => { return { color: isActive ? "#133c85" : "white" };}} onClick={() => toggleLinks()}>Book a session</NavLink>
                <NavLink to='/contact' style={({ isActive }) => { return { color: isActive ? "#133c85" : "white" };}} onClick={() => toggleLinks()}>Contact Us</NavLink>
            </StyledList>         
        </StyledNavbar>
    )
}

export default Navbar