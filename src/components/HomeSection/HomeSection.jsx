import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import Picture from '../../images/headshot.jpg'
import { HomeContainer, HomeBg, VideoBg, HomeContent, HomeH1, HomeP, HomeImg, HomeBtnWrapper, ArrowForward, ArrowDown } from './HomeElements'
import { Button } from '../ButtonElements';
import Typing from 'react-typing-animation';

const HomeSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    const styled = {
        color: 'rgb(222, 218, 218)'
    }

    return (
        <HomeContainer>
            <HomeBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HomeBg>
            <HomeContent>
                <HomeH1>Hello,</HomeH1>
                <HomeH1>My name is Vladimir Dimitrov</HomeH1>
                <HomeP>
                    <Typing>
                        <span>I'm a</span>
                        <span style={styled}> Full Stack Web Developer</span>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={25} />
                        {/* <span style={styled}> Father</span>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={8} /> */}
                        <span style={styled}> Gym Enthusiast</span>
                        <Typing.Delay ms={1000} />
                        <Typing.Backspace count={15} />
                        <span> Web Developer</span>
                        <Typing.Delay ms={1000} />
                    </Typing>
                </HomeP>
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
