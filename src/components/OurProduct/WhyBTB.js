import React from 'react';
import styled from 'styled-components';
import { Wave, Section, H2, P, ImageContainer, MockImageLandscape, BGBlue } from '../../styles';
import { device } from '../../device.js';

const WhyBTB = (props) => {
    return (
        <BGBlue>
            <SectionContainer>
                <WhyBTBSection className="row flex-md-row-reverse">
                    <ImageContainer className="col-xs-12 col-xl-6">
                        <MockImageLandscape />
                    </ImageContainer>
                    <div className="col-xs-12 col-xl-6">
                        <Title>What makes Better Than Belts different?</Title>
                        <Text>
                            {props.whyBTBText}
                        </Text>
                    </div>
                </WhyBTBSection>
                <WhyBTBSection className="row">
                    <ImageContainer className="col-xs-12 col-xl-6">
                        <MockImageLandscape />
                    </ImageContainer>
                    <div className="col-xs-12 col-xl-6">
                        <SupplyTitle>Manufacturing & supply</SupplyTitle>
                        <SupplyText>
                            {props.manufacturingSupplyText}
                        </SupplyText>
                    </div>
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
    @media ${device.mobile} {
        width: 100%;
    }
`
const SupplyTitle = styled(Title)`
    padding-left: 30px;
    @media ${device.mobile} {
        padding-left: 0;
    }
`;

const Text = styled(P)`
    width: 85%;
    line-height: 30px;
    color: #F9F9FE;
    @media ${device.mobile} {
        width: 100%;
    }
`;
const SupplyText = styled(Text)`
    padding-left: 30px;
    width: 90%;
    @media ${device.mobile} {
        padding-left: 0;
    }
`;

const WhyBTBSection = styled.div`
    padding-top: 40px;
    padding-bottom: 40px;
    @media ${device.mobile} {
        padding-bottom: 20px;
    }
`

const SectionContainer = styled(Section)`

    @media ${device.tablet} {
        padding-left: 60px;
        padding-right: 60px;
    }
    @media ${device.mobile} {
        padding-top: 30px;
        padding-left: 30px;
        padding-right: 30px;
    }
`

export default WhyBTB;