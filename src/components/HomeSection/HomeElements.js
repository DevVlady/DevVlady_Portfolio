import styled from 'styled-components';
import {MdArrowDownward, MdKeyboardArrowDown} from 'react-icons/md';

export const HomeContainer = styled.div `
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    // padding: 0 30px;
    // z-index: 1;
    height: 100vh;
    overflow: hidden;
    position: relative;


    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }

    @media screen and (max-width: 468px) {
        padding-top: 402px;
        width: 100%;
    }
`;

export const HomeBg = styled.div `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;

export const HomeImg = styled.img `
    border-radius: 50%;
    width: 350px;
    height: 350px;
    display: inline;
    float: center;
`;

export const HomeContent = styled.div `
    z-index: 3;
    max-width: 1200px;
    position: static;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center
`;

export const HomeH1 = styled.h1 `
    color: #01bf71;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HomeP = styled.p `
    margin-top: 15px;
    margin-bottom: 15px;
    color: #01bf71;
    font-size: 35px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HomeBtnWrapper = styled.div `
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowDownward) `
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowDown = styled(MdKeyboardArrowDown) `
    margin-left: 8px;
    font-size: 20px;
`;