import styled from 'styled-components';
import { RiMailSendLine } from 'react-icons/ri';

export const ContactContainer = styled.div `
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #2c3e50;
    height: 100vh;
    overflow: hidden;
    position: relative;

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
    background: #010606;
    max-width: 550px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 25px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
    }
`;

export const FormH1 = styled.h1 `
    color: rgb(222, 218, 218);
    margin-bottom: 15px;
    font-size: 30px;
    font-weight: 400;
    text-align: center;
`;

export const FormP = styled.p `
    margin: 10px;
    color: gray;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
    padding-bottom: 15px;
`;

export const FormLabel = styled.label `
    margin-bottom: 8px;
    font-size: 14px;
    color: rgb(222, 218, 218);
    font-size: 20px;
`;

export const FormInput = styled.input `
    padding: 16px 16px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    font-size: 20px;
`;
export const FormInputMsg = styled.textarea `
    height: 150px;
    padding: 5px;
    margin-bottom: 32px;
    border: none;
    border-radius: 4px;
    font-size: 20px;
`;

export const FormButton = styled.button `
    background: #01bf71;
    padding: 16px 0;
    border: none;
    border-radius: 4px;
    color:  #010606;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #0032FF;
    };
`;

export const SendIcon = styled(RiMailSendLine) `
    margin-left: 8px;
    font-size: 20px;
    color:  #010606;
`;