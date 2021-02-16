import styled from 'styled-components';
import {Link} from 'react-scroll';

export const ProjectContainer = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #29323c;
    padding-bottom: 45px;
    padding-top: 35px;

    @media screen and (max-width: 768px) {
        height: 100%;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ProjectH1 = styled.h1 `
    font-size: 2.5rem;
    color: #01bf71;
    margin-bottom: 24px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectH2 = styled.h2 `
    font-size: 25px;
    margin-bottom: 10px;
    color: #010606;
`;

export const ProjectWrapper = styled.div `
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 30px;
    // padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectCard = styled.div `
    background: #01bf71;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 440px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ProjectIcon = styled.img `
    height: 260px;
    width: 260px;
    margin-bottom: 5px;
    border-radius: 10px;
`;

export const BtnWrap = styled.div `
    display: flex;
    justify-content: flex-start;
`;

export const Button = styled(Link) `
    border-radius: 50px;
    background: #010606;
    white-space: nowrap;
    padding: 5px 15px;
    color: rgb(222, 218, 218);
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin: 3px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #0032FF;
        color: #01BF71;
    };
`;