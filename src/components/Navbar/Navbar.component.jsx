import StyledNavbar from "../styled/Navbar.styled.js";
import StyledList from "../styled/Navlist.styled.js";
import LogoContainer from "../styled/LogoContainer.styled.js";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

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
        <StyledNavbar className={navbar ? 'navbar nav-active' : 'navbar no-background'}>
            <Link to='/'>
            <LogoContainer>
                <img src={logo} alt="logo" />
                <p>Health & Wellness</p>
            </LogoContainer>
            </Link>
            <div className="menu" onClick={() => {setShowAside(!showAside)}}>
                {showAside ? <AiOutlineMenuUnfold size='30'/> : <AiOutlineMenuFold size='30'/>}                    
            </div>
            <StyledList >
                <NavLink to='/' style={({ isActive }) => { return { color: isActive ? "#133c85" : "white" };}}>Home</NavLink>
                <NavLink to='/about' style={({ isActive }) => { return { color: isActive ? "#133c85" : "white" };}}>About Us</NavLink>
                <NavLink to='/services' style={({ isActive }) => { return { color: isActive ? "#133c85" : "white" };}}>Services</NavLink>
                <NavLink to='/sessions' style={({ isActive }) => { return { color: isActive ? "#133c85" : "white" };}}>Book a session</NavLink>
                <NavLink to='/contact' style={({ isActive }) => { return { color: isActive ? "#133c85" : "white" };}}>Contact Us</NavLink>
            </StyledList>
         
        </StyledNavbar>
    )
}

export default Navbar