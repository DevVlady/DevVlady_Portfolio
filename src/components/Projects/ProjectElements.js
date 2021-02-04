import styled from 'styled-components';
import {Link} from 'react-scroll';

export const ProjectContainer = styled.div `
    height: 1160px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #29323c;

    @media screen and (max-width: 768px) {
        height: 1500px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const ProjectH1 = styled.h1 `
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`;

export const ProjectH2 = styled.h2 `
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ProjectP = styled.p `
    font-size: 1rem;
    text-align: center;
`;

export const ProjectWrapper = styled.div `
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ProjectCard = styled.div `
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
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
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const BtnWrap = styled.div `
    display: flex;
    justify-content: flex-start;
`;

export const Button = styled(Link) `
    outline: 1px solid;
    border-radius: 30%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    margin: 5px
`;