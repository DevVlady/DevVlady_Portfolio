import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import Picture from '../../images/headshot.jpg'
import { HomeContainer, HomeBg, VideoBg, HomeContent, HomeH1, HomeP, HomeImg, HomeBtnWrapper, ArrowForward, ArrowDown } from './HomeElements'
import { Button } from '../ButtonElements'

const HomeSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HomeContainer>
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBg>
            <HomeContent>
                <HomeH1>Hello,</HomeH1>
                <HomeH1>My name is Vladimir Dimitrov</HomeH1>
                <HomeP>I'm a Full Stack Web Developer</HomeP>
                <HomeImg src={Picture} type='image/jpg' />
                <HomeBtnWrapper>
                    <Button
                        to='about'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        About Me {hover ? <ArrowForward /> : <ArrowDown />}
                    </Button>
                </HomeBtnWrapper>
            </HomeContent>
        </HomeContainer>
    )
}

export default HomeSection
