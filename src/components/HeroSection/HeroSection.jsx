import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
// import Picture from '../../images/headshot.jpg'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroImgBg, HeroImg, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import {Button} from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted  src={Video} type='video/mp4' />
            </HeroBg>
            {/* <HeroImgBg>
                <HeroImg src={Picture} type='image/jpg'/>
            </HeroImgBg> */}
            <HeroContent>
                <HeroH1>Hello,</HeroH1>
                <HeroH1>My name is Vladimir Dimitrov</HeroH1>
                <HeroP>I'm a Full Stack Web Developer</HeroP>
                <HeroBtnWrapper>
                    <Button
                        to='about'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        View {hover ? <ArrowForward/> : <ArrowRight/>}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
