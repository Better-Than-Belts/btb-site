import React from 'react';
import styled from 'styled-components';
import { AccentContainerFull, Section, H2, P, ImageContainer, BGBlue, BGWhite, Wave, AccentContainer, AccentImage } from '../../styles';
import { device } from '../../device.js';
import pinkWave from '../../images/OurStory/OurStory-PinkWave.svg';
import pinkWaveMobile from '../../images/OurStory/OurStory-PinkWaveMobile.svg';
import tealCircle from '../../images/OurStory/OurStory-TealCircle.svg';
import yellowCircle from '../../images/OurStory/OurStory-YellowCircle.svg';
import tanBlock from '../../images/OurStory/OurStory-TanBlock.svg';
import tanBlockMobile from '../../images/OurStory/OurStory-TanBlockMobile.svg';
import tealBlock from '../../images/OurStory/OurStory-TealBlock.svg';
import tealBlockMobile from '../../images/OurStory/OurStory-TealBlockVertical.svg';
import { RichText } from 'prismic-reactjs';

const OurStoryFeatures = (props) => {
    return (
        <FeaturesDiv>
            <BGWhite>
                <SectionContainer>
                    <FeatureSection className="row flex-md-row-reverse">
                        <ImageContainer className="col-xs-12 col-md-7">
                            <AccentContainer>
                                <TealCircle src={tealCircle} />
                            </AccentContainer>
                            <Image1 src={props.info_1_image.url} />
                        </ImageContainer>
                        <TextContainer className="col-xs-12 col-md-5">
                            <Title>{RichText.asText(props.info_1_title)}</Title>
                            <FeatureContent>{RichText.asText(props.info_1_text)}</FeatureContent>
                        </TextContainer>
                    </FeatureSection>
                </SectionContainer>
            </BGWhite>
            <BGBlue>
                <AccentContainerFull>
                    <PinkWave />
                </AccentContainerFull>
                <SectionContainer>
                    <FeatureSection className="row">
                        <ImageContainer className="col-xs-12 col-md-6">
                            <AccentContainer>
                                <YellowCircle src={yellowCircle} />
                            </AccentContainer>
                            <Image2 src={props.info_2_image.url} />
                        </ImageContainer>
                        <TextContainer className="col-xs-12 col-md-6">
                            <Title>{RichText.asText(props.info_2_title)}</Title>
                            <FeatureContentWhiteFont>{RichText.asText(props.info_2_text)}</FeatureContentWhiteFont>
                        </TextContainer>
                    </FeatureSection>
                </SectionContainer>
                <AccentContainerFull>
                    <TanBlock />
                </AccentContainerFull>
                <Wave />
            </BGBlue>
            <BGWhite>
                <SectionContainer>
                    <FeatureSection className="row flex-md-row-reverse">
                        <ImageContainer className="col-xs-12 col-md-7">
                            <AccentContainer>
                                <TealBlock />
                            </AccentContainer>
                            <Image src={props.info_3_image.url}/>
                        </ImageContainer>
                        <TextContainer className="col-xs-12 col-md-5">
                            <Title>{RichText.asText(props.info_3_title)}</Title>
                            <FeatureContent>{RichText.asText(props.info_3_text)}</FeatureContent>
                        </TextContainer>
                    </FeatureSection>
                </SectionContainer>
            </BGWhite>
        </FeaturesDiv >

    );
};

// Styles
const FeaturesDiv = styled.div`
    overflow: hidden;
`;

const Title = styled(H2)`
    padding-top: 0px;
    width: 90%;
    line-height: 140%;

    @media ${device.tablet} {
        width: 100%;
    }
`

const FeatureSection = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
    @media ${device.tablet} {
        width: 105%;
    }
`

const FeatureContent = styled(P)`
    line-height: 30px;
    width: 90%;
    @media ${device.tablet} {
        width: 100%;
        line-height: 26px;
    }
`
const FeatureContentWhiteFont = styled(FeatureContent)`
    color: #F9F9FE;
`
const SectionContainer = styled(Section)`
    padding-top: 30px;
    @media ${device.tablet} {
        padding: 30px;
    }
`

const TextContainer = styled.div`
    margin-top: 75px;
    @media ${device.tablet} {
        margin-top: 10px;
    }
`;

const Image = styled.div`
    background-image: url(${props => props.src});
    height: 400px;
    width: auto;
    background-size: cover;
`;

const Image1 = styled(Image)`
    max-width: 650px;
    height: 500px;
    padding-top: 20px;
    @media ${device.tablet} {
        max-width: 100%;
        margin-left: auto;
        margin-right: auto;
        display: block;
        height: 450px;
        object-fit: cover;
    }
`;

const Image2 = styled(Image)`
    max-width: 500px;
    height: 500px;
    @media ${device.tablet} {
        max-width: 100%;
        height: 430px;
        margin-left: auto;
        margin-right: auto;
        display: block;
        object-fit: cover;
    }
`;

const Image3 = styled(Image)`
    max-width: 550px;
    height: 500px;
    @media ${device.tablet} {
        max-width: 100%;
        height: 430px;
        object-fit: cover;
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
`;

const PinkWave = styled(AccentImage)`
    content: url(${pinkWave});
    width: 100%;
    top: -100px;
    @media (max-width: 1240px) {
        top: -80px;
    }
    @media ${device.laptop} {
        top: -60px;
    }
    @media ${device.tablet} {
        top: -40px;
    }
    @media (max-width: 550px) {
        z-index: 5;
        top: -90px;
        content: url(${pinkWaveMobile});
    }
    @media (max-width: 450px) {
        top: -70px;
    }
`;

const TealCircle = styled(AccentImage)`
    left: 520px;
    top: 340px;
    width: 130px;
    @media (max-width: 1190px) {
        left: 450px;
        top: 360px;
    }
    @media ${device.laptop} {
        left: 350px;
    }
    @media (max-width: 870px) {
        left: 300px;
    }
    @media ${device.tablet} {
        display: none;
    }
`;
const YellowCircle = styled(AccentImage)`
    left: -60px;
    top: 365px;
    width: 130px;
    @media (max-width: 1190px) {
        left: 30px;
        top: 400px;
    }
    @media ${device.tablet} {
        display: none;
    }
`;
const TanBlock = styled(AccentImage)`
    content: url(${tanBlock});
    left: 80%;
    top: 10px;
    @media ${device.laptop} {
        top: -10px;
    }
    @media ${device.tablet} {
        top: -25px;
    }
    @media ${device.mobile} {
        content: url(${tanBlockMobile});
        top: -13px;
    }
`;
const TealBlock = styled(AccentImage)`
    content: url(${tealBlock});
    left: 25px;
    top: 400px;
    @media (max-width: 1090px) {
        left: 0px;
    }
    @media ${device.laptop} {
        content: url(${tealBlockMobile});
        left: 40px;
        top: 440px;
    }
    @media ${device.tablet} {
        display: none;
    }
`;

export default OurStoryFeatures; 