import styled from 'styled-components';
// import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer `
    background-color: #101522;
`;

export const FooterWrap = styled.div `
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div `
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`;

export const FooterLinksWrapper = styled.div `
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 260px;
    box-sizing: border-box;
    color: rgb(222, 218, 218);

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1 `
    font-size: 24px;
    margin-bottom: 15px;
    color: rgb(222, 218, 218);
`;

export const SocialMedia = styled.section `
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const SocialLogo = styled.img `
    border-radius: 10px;
    width: 80px;
    height: 80px;
    display: inline;
    float: center;
`;

export const WebsiteRights = styled.small `
    color: #01bf71;
    font-size: 22px;
`;

export const SocialIcons = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a `
    color: rgb(222, 218, 218);
    font-size: 34px;

    &:hover {
        color: #01bf71;
    }
`;