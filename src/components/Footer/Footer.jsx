import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import FooterLogo from '../../images/VDLogoBG.png';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, } from './FooterElements';
import {FaInstagram, FaLinkedin, FaGithub, FaMapPin, FaPhoneVolume } from 'react-icons/fa';
import {MdEmail} from 'react-icons/md';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    const styled = {
        fontSize: '20px',
        color: 'rgb(222, 218, 218)',
        textDecoration: 'none'
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Documents</FooterLinkTitle>
                                <a style={styled} href="https://github.com/DevVlady/VDimitrovs_Resume/raw/main/Vladimir%20Dimitrov%20Resume.pdf.pdf">Resume</a>
                                <a href="https://github.com/DevVlady/Dev_Certificate/raw/main/Rutgers%20Letter%20%7C%20Certificate.pdf">Certificate</a>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social</FooterLinkTitle>
                                <a href="https://www.linkedin.com/in/vladimirsdimitrov/">LinkedIn</a>
                                <a href="https://www.instagram.com/dev_vlady/">Instagram</a>
                                <a href="https://github.com/DevVlady">Github</a>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact</FooterLinkTitle>
                            <p><FaPhoneVolume /> (763) 381-1383</p>
                            <p><FaMapPin /> Minneapolis, MN 55427</p>
                            <p><MdEmail /> vladimir@dev-vlady.com</p>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo src={FooterLogo} to='/' onClick={toggleHome}/>
                        <WebsiteRights>Copyright © {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='https://www.instagram.com/dev_vlady/' target='_blank' aria-label='Instagram'>
                                <FaInstagram/>
                            </SocialIconLink>
                            <SocialIconLink href='https://www.linkedin.com/in/vladimirsdimitrov/' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href='https://github.com/DevVlady' target='_blank' aria-label='Github'>
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
