import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import Icon from '../../images/VDLogoBG.png';
// import { animateScroll } from 'react-scroll';
import {animateScroll as scroll} from 'react-scroll'
import { Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavIcon } from './NavElements';


const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#01bf71' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavIcon src={Icon} to='/' onClick={toggleHome}/>
                        <MobileIcon onClick={toggle}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to="about" smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="portfolio" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Portfolio</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="contact" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
