import React from 'react';
import { Button } from '../ButtonElements';
import Pic1 from '../../images/businessPhoto.jpg';
import { AboutContainer, AboutWrapper, AboutRow, ColumnOne, TextWrapper, TopLine, Heading, Subtitle, ButtonWrap, ColumnTwo, ImgWrap, Img, IconsRow, HTML5, CSS3, JavaScript, NodeJS, JQ, ReactJS, MongoDB, MySQL } from './AboutElements';

const AboutSection = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, primary, dark, dark2 }) => {
    return (
        <>
            <AboutContainer lightBg={lightBg} id={id}>
                <AboutWrapper>
                    <AboutRow imgStart={imgStart}>
                        <ColumnOne>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <ButtonWrap>
                                    <Button to='portfolio'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact='true'
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                    >{buttonLabel}</Button>
                                </ButtonWrap>
                            </TextWrapper>
                        </ColumnOne>
                        <ColumnTwo>
                            <ImgWrap>
                                <Img src={Pic1} alt={alt} />
                            </ImgWrap>
                        </ColumnTwo>
                    </AboutRow>
                    <IconsRow>
                        <HTML5/>
                        <CSS3/>
                        <JavaScript/>
                        <NodeJS/>
                        <JQ/>
                        <ReactJS/>
                        <MongoDB/>
                        <MySQL/>
                        <CSS3/>
                        <CSS3/>
                        <CSS3/>
                    </IconsRow>
                </AboutWrapper>
            </AboutContainer>
        </>
    )
}

export default AboutSection
