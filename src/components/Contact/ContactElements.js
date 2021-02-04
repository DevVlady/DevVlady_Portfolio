import styled from 'styled-components';
import { RiMailSendLine } from 'react-icons/ri';
// import { Link } from 'react-router-dom';

export const ContactContainer = styled.div `
    height: 1160px;
    // display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: gray;

    @media screen and (max-width: 768px) {
        height: 1500px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`;

export const FormWrap = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 400px) {
        height: 80%;
    }
`;

export const FormContent = styled.div `
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and (max-width: 480px) {
        padding: 10px
    }
`;

export const Form = styled.form `
    background: black;
    max-width: 400px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 25px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9)

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1 `
    margin-bottom: 40px;
    color: #fff;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
`;

export const FormLabel = styled.label `
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
`;

export const FormInput = styled.input `
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
`;
export const FormInputMsg = styled.input `
    padding: 56px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    // word-wrap: break-word;
    // word-break: break-all;
    // overflow-wrap: wrap;
`;

export const FormButton = styled.button `
    background: #0032FF;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #01bf71;
        color: black;
    };
`;

export const SendIcon = styled(RiMailSendLine) `
    margin-left: 8px;
    font-size: 20px;
    color: white;
`;