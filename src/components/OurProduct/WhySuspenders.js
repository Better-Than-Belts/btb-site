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
                    <ImageContainer className="col-xs-12 col-xl-6">
                        <Image />
                    </ImageContainer>
                    <TextContainer className="col-xs-12 col-xl-6">
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

    @media ${device.mobile} {
        font-size: 16px;
        line-height: 26px;
        width: 100%;
    }
`;

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

const TextContainer = styled.div`
    margin-top: 5%;
    @media ${device.mobile} {
        margin-top: 0;
    }
`;

const Image = styled(MockImageLandscape)`
    width: 545px;
    height: 380px;
    @media ${device.mobile} {
        width: 315px;
        height: 220px;
    }
`


export default WhySuspenders;