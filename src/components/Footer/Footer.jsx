import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink, } from './FooterElements';
import {FaInstagram, FaLinkedin, FaGithub} from 'react-icons/fa'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                                <a href="https://www.linkedin.com/in/vladimirsdimitrov/">LinkedIn</a>
                                <a href="https://www.instagram.com/dev_vlady/">Instagram</a>
                                <a href="https://github.com/DevVlady">Github</a>
                                <a href="https://github.com/DevVlady/VDimitrovs_Resume/raw/main/Vladimir%20Dimitrov%20%7C%20Web%20Developer.pdf">Resume</a>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                                <a href="https://www.linkedin.com/in/vladimirsdimitrov/">LinkedIn</a>
                                <a href="https://www.instagram.com/dev_vlady/">Instagram</a>
                                <a href="https://github.com/DevVlady">Github</a>
                                <a href="https://github.com/DevVlady/VDimitrovs_Resume/raw/main/Vladimir%20Dimitrov%20%7C%20Web%20Developer.pdf">Resume</a>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                                <a href="https://www.linkedin.com/in/vladimirsdimitrov/">LinkedIn</a>
                                <a href="https://www.instagram.com/dev_vlady/">Instagram</a>
                                <a href="https://github.com/DevVlady">Github</a>
                                <a href="https://github.com/DevVlady/VDimitrovs_Resume/raw/main/Vladimir%20Dimitrov%20%7C%20Web%20Developer.pdf">Resume</a>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Me</FooterLinkTitle>
                                <a href="https://www.linkedin.com/in/vladimirsdimitrov/">LinkedIn</a>
                                <a href="https://www.instagram.com/dev_vlady/">Instagram</a>
                                <a href="https://github.com/DevVlady">Github</a>
                                <a href="https://github.com/DevVlady/VDimitrovs_Resume/raw/main/Vladimir%20Dimitrov%20%7C%20Web%20Developer.pdf">Resume</a>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick={toggleHome}>VDimitrov</SocialLogo>
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
