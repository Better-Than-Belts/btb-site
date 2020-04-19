import React from 'react';
import styled from 'styled-components';
import { Wave, Section, H2, P, ImageContainer, MockImageLandscape, BGBlue } from '../../styles';
import { device } from '../../device.js';

const WhyBTB = (props) => {
    return (
        <BGBlue>
            <SectionContainer>
                <WhyBTBSection className="row flex-md-row-reverse">
                    <ImageContainer className="col-xs-12 col-lg-6">
                        <Image />
                    </ImageContainer>
                    <TextContainer className="col-xs-12 col-lg-6">
                        <Title>What makes Better Than Belts different?</Title>
                        <Text>
                            {props.whyBTBText}
                        </Text>
                    </TextContainer>
                </WhyBTBSection>
                <WhyBTBSection className="row">
                    <ImageContainer className="col-xs-12 col-lg-6">
                        <Image />
                    </ImageContainer>
                    <TextContainer className="col-xs-12 col-lg-6">
                        <SupplyTitle>Manufacturing & supply</SupplyTitle>
                        <SupplyText>
                            {props.manufacturingSupplyText}
                        </SupplyText>
                    </TextContainer>
                </WhyBTBSection>
            </SectionContainer>
            <Wave />
        </BGBlue>
    );
};

// Styles

const Title = styled(H2)`
    width: 80%;
    padding-top: 0px;
    padding-bottom: 10px;
    line-height: 140%;
    @media ${device.tablet} {
        width: 100%;
    }
`
const SupplyTitle = styled(Title)`
    padding-left: 30px;
    @media ${device.tablet} {
        padding-left: 0;
    }
`;

const TextContainer = styled.div`
    margin-top: 75px;
    @media ${device.tablet} {
        margin-top: 0;
    }
`;

const Text = styled(P)`
    width: 85%;
    line-height: 30px;
    color: #F9F9FE;
    @media ${device.tablet} {
        width: 100%;
    }
`;
const SupplyText = styled(Text)`
    padding-left: 30px;
    width: 90%;
    @media ${device.tablet} {
        padding-left: 0;
    }
`;

const WhyBTBSection = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    @media ${device.tablet} {
        padding-bottom: 20px;
    }
`

const Image = styled(MockImageLandscape)`
    max-width: 545px;
    height: 430px;
    width: 100%;
    @media ${device.tablet} {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 315px;
        height: 220px;
        object-fit: cover;
    }
`

const SectionContainer = styled(Section)`
    @media ${device.tablet} {
        padding-top: 30px;
        padding-left: 30px;
        padding-right: 30px;
    }
`

export default WhyBTB;