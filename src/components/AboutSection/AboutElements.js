import styled from 'styled-components';
import {AiFillHtml5} from 'react-icons/ai';
import {FaNodeJs} from 'react-icons/fa';
import {IoLogoNpm} from 'react-icons/io';
import {SiBulma, SiPostman, SiGithub, SiFontawesome, SiBootstrap, SiHeroku, SiWebpack, SiJavascript, SiJson, SiMysql, SiMongodb, SiReact, SiJquery} from 'react-icons/si';
import {DiVisualstudio, DiSass, DiCss3} from 'react-icons/di';

export const AboutContainer = styled.div `
    color: rgb(222, 218, 218);
    background: ${({lightBg}) => (lightBg ? '#2c3e50' : '#010606')};
    // z-index: 1;
    height: 100vh;
    overflow: hidden;
    position: relative;

    @media screen and (max-width: 468px) {
        height: 100vh;
        // padding-top: 20px;
    }

    @media screen and (max-width: 768px) {
        height: 100vh;
    }
`;

export const ProgContainer = styled.div `
    color: rgb(222, 218, 218);

    @media screen and (max-width: 468px) {
        grid-template-columns: 1fr 1fr;
        // padding: 0 20px;
    }

`;

export const AboutWrapper = styled.div `
    display: grid;
    z-index: 1;
    height: 1160px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        justify-content: flex-start;
        // padding: 30px 20px;
        margin-top: 50px;
    }
`;

export const AboutRow = styled.div `
    display: grid;
    // grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const ColumnOne = styled.div `
    margin-bottom: 10px;
    padding: 0 15px;
    grid-area: col1;
`;

export const ColumnTwo = styled.div `
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`;

export const TextWrapper = styled.div `
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`;

export const TopLine = styled.p `
    color: #01bf71;
    font-size: 40px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 20px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
        // margin-top: 35px;
    }
`;

export const Heading = styled.h1 `
    margin-bottom: 24px;
    font-size: 30px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#010606' : 'rgb(222, 218, 218)')};

    @media screen and (max-width: 468px) {
        font-size: 15px;
        padding-right: 250px;
    }
`;

export const Subtitle = styled.p `
    max-width: 540px;
    margin-top: 35px;
    margin-bottom: 35px;
    font-size: 28px;
    line-height: 20px;
    color: ${({darkText}) => (darkText ? 'rgb(222, 218, 218)' : '#010606')};
    font-style: italic;

    @media screen and (max-width: 468px) {
        font-size: 10px;
        padding-right: 250px;
        margin-top: -15px;
    }
`;

export const ButtonWrap = styled.div `
    display: flex;
    justify-content: flex-start;

    @media screen and (max-width: 468px) {
        margin-top: -20px;
    }
`;

export const ImgWrap = styled.div `
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    height: 750px;
    width: 500px;
    border-radius: 25px;
    margin: 0 0 10px 0;
    padding-right: 0;

    @media screen and (max-width: 468px) {
        display: none;
    }
`;

export const IconHeading = styled.p `
    color: #010606;
    font-size: 40px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    text-align: center;
    text-decoration: underline;
`;


export const IconsRow = styled.div `
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    grid-template-areas: ${({ imgStart }) => imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 468px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
`;

export const HTML5 = styled(AiFillHtml5) `
    height: 100px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #e34c26;
    }

    @media screen and (max-width: 468px) {
        height: 50px;
        width: 50px;
    }
`;

export const CSS3 = styled(DiCss3) `
    height: 105px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #264de4;
    }

    @media screen and (max-width: 468px) {
        height: 50px;
        width: 50px;
    }
`;

export const JavaScript = styled(SiJavascript) `
    height: 80px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #f0db4f;
    }

    @media screen and (max-width: 468px) {
        height: 50px;
        width: 50px;
    }
`;

export const NodeJS = styled(FaNodeJs) `
    height: 90px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #68a063;
    }

    @media screen and (max-width: 468px) {
        height: 50px;
        width: 50px;
    }
`;

export const JQ = styled(SiJquery) `
    height: 90px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #0769ad;
    }
`;

export const ReactJS = styled(SiReact) `
    height: 90px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #61DBFB;
    }
`;

export const MongoDB = styled(SiMongodb) `
    height: 90px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #3FA037;
    }
`;

export const MySQL = styled(SiMysql) `
    height: 120px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #00758F;
    }
`;

export const JSON = styled(SiJson) `
    height: 100px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #226446;
    }
`;

export const WebPack = styled(SiWebpack) `
    height: 110px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #8ed6fb;
    }
`;

export const NPM = styled(IoLogoNpm) `
    height: 120px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #CC3534;
    }
`;

export const Heroku = styled(SiHeroku) `
    height: 80px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #6567a5;
    }
`;

export const BootStrap = styled(SiBootstrap) `
    height: 80px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #0275d8;
    }
`;

export const Bulma = styled(SiBulma) `
    height: 80px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #00d1b2;
    }
`;

export const Postman = styled(SiPostman) `
    height: 80px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #ef5b25;
    }
`;

export const GitHub = styled(SiGithub) `
    height: 80px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #6e5494;
    }
`;

export const FontAwesome = styled(SiFontawesome) `
    height: 80px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #228ae6;
    }
`;

export const VSCode = styled(DiVisualstudio) `
    height: 90px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #0078d7;
    }
`;

export const Sass = styled(DiSass) `
    height: 90px;
    width: 100px;
    color: #010606;

    &:hover {
        color: #b37399aa;
    }
`;