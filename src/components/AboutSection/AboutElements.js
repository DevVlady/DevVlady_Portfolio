import styled from 'styled-components';
import {AiFillHtml5} from 'react-icons/ai';
import {DiCss3} from 'react-icons/di';
import {SiJavascript} from 'react-icons/si'

export const AboutContainer = styled.div `
    color: #fff;
    background: ${({lightBg}) => (lightBg ? '#2c3e50' : '#010606')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
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
`;

export const AboutRow = styled.div `
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({ imgStart }) => imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const ColumnOne = styled.div `
    margin-bottom: 15px;
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
`;

export const Heading = styled.h1 `
    margin-bottom: 24px;
    font-size: 35px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? '#010606' : '#f7f8fa')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p `
    max-width: 440px;
    margin-top: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`;

export const ButtonWrap = styled.div `
    display: flex;
    justify-content: flex-start;
`;

export const ImgWrap = styled.div `
    max-width: 555px;
    height: 100%;
`;

export const Img = styled.img`
    height: 650px;
    width: 430px;
    border-radius: 25px;
    margin: 0 0 10px 0;
    padding-right: 0;
`;

export const IconsRow = styled.div `
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;

    grid-template-areas: ${({ imgStart }) => imgStart ? `'col2 col1'` : `'col1 col2'`};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
    }
`;

export const HTML5 = styled(AiFillHtml5) `
    height: 150px;
    width: 150px;
    color: black;

    &:hover {
        color: red;
    }
`;

export const CSS3 = styled(DiCss3) `
    height: 150px;
    width: 150px;
    color: black;

    &:hover {
        color: blue;
    }
`;

export const JavaScript = styled(SiJavascript) `
    height: 120px;
    width: 120px;
    color: black;

    &:hover {
        color: yellow;
    }
`;