import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import HeroSection from '../components/HeroSection/HeroSection';
import InfoSection from '../components/InfoSection/Info';
import { homeObjectOne, homeObjectTwo } from '../components/InfoSection/Data';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection/>
            <InfoSection {...homeObjectOne}/>
            <Projects/>
            <InfoSection {...homeObjectTwo}/>
            <Footer/>
        </>
    );
};

export default Home;
