import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';

export const Nav = styled.nav`
    background: ${({scrollNav}) => (scrollNav ? '#010606' : 'transparent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`;

export const NavIcon = styled.img `
    border-radius: 20px;
    width: 80px;
    height: 80px;
    display: inline;
    float: center;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: rgb(222, 218, 218);
    }

`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #010606;
    background: #01bf71;
    border-radius: 20px;
    margin-top: 8px;
    margin-left: 15px;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 10px;
    height: 80%;
    cursor: pointer;
    font-weight: 900;
    text-transform: uppercase;
    font-size: 20px;

    &.active {
        background: #0032FF;
        color: rgb(222, 218, 218);
    }

    &:hover {
        background: #0032FF;
        color: rgb(222, 218, 218);
    }
`;
