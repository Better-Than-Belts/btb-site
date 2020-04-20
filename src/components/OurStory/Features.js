import React from 'react';
import styled from 'styled-components';
import { Section, H2, P, ImageContainer, MockImageOurStory, BGBlue, BGWhite, Wave } from '../../styles';
import { device } from '../../device.js';

const OurStoryFeatures = (props) => {
    return (
        <div>
            <BGWhite>
                <SectionContainer>
                    <FeatureSection className="row flex-md-row-reverse">
                        <ImageContainer className="col-xs-12 col-md-7">
                            <Image1 />
                        </ImageContainer>
                        <TextContainer className="col-xs-12 col-md-5">
                            <Title>{props.title1}</Title>
                            <FeatureContent>{props.text1}</FeatureContent>
                        </TextContainer>
                    </FeatureSection>
                </SectionContainer>
            </BGWhite>
            <BGBlue>
                <SectionContainer>
                    <FeatureSection className="row">
                        <ImageContainer className="col-xs-12 col-md-6">
                            <Image2 />
                        </ImageContainer>
                        <TextContainer className="col-xs-12 col-md-6">
                            <Title>{props.title2}</Title>
                            <FeatureContentWhiteFont>{props.text2}</FeatureContentWhiteFont>
                        </TextContainer>
                    </FeatureSection>
                </SectionContainer>
                <Wave />
            </BGBlue>
            <BGWhite>
                <SectionContainer>
                    <FeatureSection className="row flex-md-row-reverse">
                        <ImageContainer className="col-xs-12 col-md-7">
                            <Image3 className="float-right" />
                        </ImageContainer>
                        <TextContainer className="col-xs-12 col-md-5">
                            <Title>{props.title3}</Title>
                            <FeatureContent>{props.text3}</FeatureContent>
                        </TextContainer>
                    </FeatureSection>
                </SectionContainer>
            </BGWhite>
        </div >

    );
};

// Styles

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
    @media ${device.tablet} {
        padding: 10px 30px;
    }
`

const TextContainer = styled.div`
    margin-top: 75px;
    @media ${device.tablet} {
        margin-top: 10px;
    }
`;

const Image1 = styled(MockImageOurStory)`
    max-width: 650px;
    height: 450px;
    @media ${device.mobile} {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
`;

const Image2 = styled(MockImageOurStory)`
    max-width: 500px;
    height: 600px;
    @media ${device.mobile} {
        width: 100%;
        height: 430px;
        object-fit: cover;
    }
`;

const Image3 = styled(MockImageOurStory)`
    max-width: 550px;
    height: 550px;
    @media ${device.mobile} {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
`;

export default OurStoryFeatures; 