import React, {useState} from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import HomeSection from '../components/HomeSection/HomeSection';
import AboutSec from '../components/AboutSection/About';
import { homeObjectOne } from '../components/AboutSection/Data';
import Projects from '../components/Projects/Projects';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HomeSection/>
            <AboutSec {...homeObjectOne}/>
            <Projects/>
            <Contact/>
            <Footer/>
        </>
    );
};

export default Home;
