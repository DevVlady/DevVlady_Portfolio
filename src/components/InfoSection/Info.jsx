import React from 'react';
import { Button } from '../ButtonElements';
import { InfoContainer, InfoWrapper, InfoRow, ColumnOne, TextWrapper, TopLine, Heading, Subtitle, ButtonWrap, ColumnTwo, ImgWrap, Img } from './InfoElements';

const InfoSection = ({ lightBg, id, img, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, primary, dark, dark2 }) => {
    return (
        <>
            <InfoContainer lightBg={lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <ColumnOne>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <ButtonWrap>
                                    <Button to='home'
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
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </ColumnTwo>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
        </>
    )
}

export default InfoSection
