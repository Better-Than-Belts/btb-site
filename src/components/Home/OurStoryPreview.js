import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { device } from '../../device';
import { RouteLink, AccentContainerFull, AccentImage, AccentContainer, BGWhite, ButtonYellow, ButtonText, Flex, Image, ImageContainer, H2, P, Section } from '../../styles';
import wave1 from '../../images/Home/Home-PinkWave1.svg';
import waveMobile from '../../images/Home/Home-PinkWaveMobile.svg';
import circle1 from '../../images/Home/Home-TanCircle1.svg';
import block1 from '../../images/Home/Home-TealBlocks1.svg';

const OurStoryPreview = (props) => {
    return (
        <BGWhite>
            <AccentContainerFull>
                <Wave1 />
            </AccentContainerFull>
            <OurStorySection>
                <Flex>
                    <OurStoryImage>
                        <AccentContainer>
                            <Circle1 src={circle1} />
                        </AccentContainer>
                        <AccentContainer>
                            <Block1 src={block1} />
                        </AccentContainer>
                        <Image src={props.our_story_image.url} />
                    </OurStoryImage>
                    <OurStoryTextContainer>
                        <OurStoryText>
                            <Title>{RichText.asText(props.our_story_title)}</Title>
                            <Text>
                                {RichText.asText(props.our_story_text)}
                            </Text>
                            <LearnMore>
                                <ButtonText>
                                    <RouteLink to={`/our-story`}>Learn More</RouteLink>
                                </ButtonText>
                            </LearnMore>
                        </OurStoryText>
                    </OurStoryTextContainer>
                </Flex>
            </OurStorySection>
        </BGWhite>
    );
};

// styles

const Wave1 = styled(AccentImage)`
    content: url(${wave1});
    width: 100%;
    top: -30px;
    @media ${device.laptop} {
        top: 50px;
    }
    @media ${device.tablet} {
        top: 10px;
    }
    @media (max-width: 550px) {
        top: 0px;
        content: url(${waveMobile});
    }
`;

const Circle1 = styled(AccentImage)`
    top: 280px;
    left: -70px;
    z-index: 5;
    width: 150px;
    @media (max-width: 1190px) {
        display: none;
    }
`;

const Block1 = styled(AccentImage)`
    top: -35px;
    left: 400px;
    z-index: 5;
    @media (max-width: 1190px) {
        top: 300px;
        left: 400px;
    }
    @media (max-width: 1150px) {
        left: 380px;
        top: 280px;
    }
    @media (max-width: 950px) {
        top: 260px;
        left: 350px;
    }
    @media (max-width: 900px) {
        top: 240px;
        left: 330px;
    }
    @media (max-width: 850px) {
        top: 220px;
        left: 310px;
    }
    @media (max-width: 800px) {
        top: 200px;
        left: 290px;
    }
    @media ${device.tablet} {
        display: none;
    }
`;

const OurStorySection = styled(Section)`
    padding-top: 70px;
    padding-bottom: 50px;
    @media ${device.laptop} {
        padding-top: 100px;
    }
    @media ${device.tablet} {
        padding: 30px;
        padding-bottom: 70px;
    }
`;

const OurStoryImage = styled(ImageContainer)`
    flex: 1;
    padding-right: 50px;
    width: 60%;
    z-index: 1;
    @media ${device.laptop} {
        padding-right: 0px;
    }

    @media ${device.tablet} {
        width: 100%;
        max-width: 100%;
        flex: auto;
        padding: 10px;
        padding-top: 30px;
    }
    @media (max-width: 550px) {
        padding-top: 0;
    }
`;

const OurStoryTextContainer = styled.div`
    margin-top: 75px;
    flex: 1;
    padding-left: 50px;
    z-index: 1;

    @media ${device.tablet} {
        margin-top: 0;
        flex: auto;
        padding: 10px;
    }
`;

const OurStoryText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    
`;

const Text = styled(P)`
    padding-bottom: 10px;
    line-height: 30px;
    @media ${device.tablet} {
        padding-top: 0px;
        margin-top: 0px;
        font-size: 16px;
    }
`;

const Title = styled(H2)`
`

const LearnMore = styled(ButtonYellow)`
    @media ${device.tablet} {
        margin-bottom: 50px;
        margin: 0 auto;
        display: block;
    }
`;

export default OurStoryPreview;