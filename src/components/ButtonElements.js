import styled from 'styled-components';
import {Link} from 'react-scroll';

export const Button = styled(Link) `
    border-radius: 50px;
    background: ${({primary}) => (primary ? '#01BF71' : '#010606')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : 'rgb(222, 218, 218)')};
    font-size: ${({fontBig}) => (fontBig ? '30px' : '20px')};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({primary}) => (primary ? '#0032FF' : '#01BF71')};
        color: ${({dark}) => (dark ? 'rgb(222, 218, 218)' : '#010606')};
    };

    @media screen and (max-width: 468px) {
        font-size: 10px;
    }

`;