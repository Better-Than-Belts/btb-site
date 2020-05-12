import React from 'react';
import styled from 'styled-components';
import { Section, H2, P, ImageContainer, Image, BGBlue, BGWhite, Wave } from '../../styles';
import { device } from '../../device.js';
import { RichText } from 'prismic-reactjs';

const OurStoryFeatures = (props) => {
    return (
        <div>
            <BGWhite>
                <SectionContainer>
                    <FeatureSection className="row flex-md-row-reverse">
                        <ImageContainer className="col-xs-12 col-md-7">
                            <Image1 src={props.info_1_image.url}/>
                        </ImageContainer>
                        <TextContainer className="col-xs-12 col-md-5">
                            <Title>{RichText.asText(props.info_1_title)}</Title>
                            <FeatureContent>{RichText.asText(props.info_1_text)}</FeatureContent>
                        </TextContainer>
                    </FeatureSection>
                </SectionContainer>
            </BGWhite>
            <BGBlue>
                <SectionContainer>
                    <FeatureSection className="row">
                        <ImageContainer className="col-xs-12 col-md-6">
                            <Image2 src={props.info_1_image.url}/>
                        </ImageContainer>
                        <TextContainer className="col-xs-12 col-md-6">
                            <Title>{RichText.asText(props.info_2_title)}</Title>
                            <FeatureContentWhiteFont>{RichText.asText(props.info_2_text)}</FeatureContentWhiteFont>
                        </TextContainer>
                    </FeatureSection>
                </SectionContainer>
                <Wave />
            </BGBlue>
            <BGWhite>
                <SectionContainer>
                    <FeatureSection className="row flex-md-row-reverse">
                        <ImageContainer className="col-xs-12 col-md-7">
                            <Image3 src={props.info_1_image.url} className="float-right" />
                        </ImageContainer>
                        <TextContainer className="col-xs-12 col-md-5">
                            <Title>{RichText.asText(props.info_3_title)}</Title>
                            <FeatureContent>{RichText.asText(props.info_3_text)}</FeatureContent>
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

const Image1 = styled(Image)`
    max-width: 650px;
    height: 450px;
    @media ${device.mobile} {
        width: 100%;
        height: 250px;
        object-fit: cover;
    }
`;

const Image2 = styled(Image)`
    max-width: 500px;
    height: 600px;
    @media ${device.mobile} {
        width: 100%;
        height: 430px;
        object-fit: cover;
    }
`;

const Image3 = styled(Image)`
    max-width: 550px;
    height: 550px;
    @media ${device.mobile} {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
`;

export default OurStoryFeatures; 