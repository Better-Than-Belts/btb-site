import React from 'react';
import styled from 'styled-components';
import { BGWhite, Section, H2, P, ImageContainer, MockImageLandscape } from '../../styles';
import SuspenderFeatures from './SuspenderFeatures';
import { device } from '../../device.js';


const WhySuspenders = (props) => {
    return (
        <BGWhite>
            <SectionContainer>
                <div className="row flex-md-row-reverse">
                    <ImageContainer className="col-xs-12 col-lg-6">
                        <Image />
                    </ImageContainer>
                    <TextContainer className="col-xs-12 col-lg-6">
                        <Title>Why suspenders</Title>
                        <Text>
                            {props.whySuspendersText}
                        </Text>
                    </TextContainer>
                </div>
                <SuspenderFeatures {...props} />
            </SectionContainer>
        </BGWhite>
    );
};

// Styles

const Title = styled(H2)`
    padding-top: 20px;
    padding-bottom: 20px;
`

const Text = styled(P)`
    line-height: 30px;
    width: 80%;

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 26px;
        width: 100%;
    }
`;

const SectionContainer = styled(Section)`

    @media ${device.tablet} {
        padding-top: 30px;
        padding-left: 30px;
        padding-right: 30px;
    }
`

const TextContainer = styled.div`
    margin-top: 75px;
    @media ${device.tablet} {
        margin-top: 0;
    }
`;

const Image = styled(MockImageLandscape)`
    max-width: 545px;
    height: 380px;
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


export default WhySuspenders;