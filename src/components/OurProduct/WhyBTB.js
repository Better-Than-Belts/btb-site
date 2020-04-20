import React from 'react';
import styled from 'styled-components';
import { Section, H2, P, ImageContainer, MockImageLandscape, BGGray } from '../../styles';
import { device } from '../../device.js';

const WhyBTB = (props) => {
    return (
        <BGGray>
            <SectionContainer>
                <WhyBTBSection className="row flex-md-row-reverse">
                    <ImageContainer className="col-xs-12 col-xl-6">
                        <MockImageLandscape />
                    </ImageContainer>
                    <div className="col-xs-12 col-xl-6">
                        <Title>What makes Better Than Belts different?</Title>
                        <P>
                            {props.whySuspendersText}
                        </P>
                    </div>
                </WhyBTBSection>
                <WhyBTBSection className="row">
                    <ImageContainer className="col-xs-12 col-xl-6">
                        <MockImageLandscape />
                    </ImageContainer>
                    <div className="col-xs-12 col-xl-6">
                        <Title>Manufacturing & Supply</Title>
                        <P>
                            {props.whySuspendersText}
                        </P>
                    </div>
                </WhyBTBSection>
            </SectionContainer>
        </BGGray>
    );
};

// Styles

const Title = styled(H2)`
    padding-top: 0px;
    padding-bottom: 20px;
`

const WhyBTBSection = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`

const SectionContainer = styled(Section)`
    padding-left: 150px;
    padding-right: 150px;

    @media ${device.tablet} {
        padding-left: 60px;
        padding-right: 60px;
    }
    @media ${device.mobile} {
        padding-left: 30px;
        padding-right: 30px;
    }
`

export default WhyBTB;