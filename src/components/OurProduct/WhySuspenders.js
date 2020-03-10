import React from 'react';
import styled from 'styled-components';
import { Section, H2, P, Flex, ImageContainer, MockImageLandscape } from '../../styles';
import SuspenderFeature from './SuspenderFeature';

const WhySuspenders = (props) => {
    return (
        <SectionContainer>
            <div className="row flex-md-row-reverse">
                <ImageContainer className="col-xs-12 col-xl-6">
                    <MockImageLandscape />
                </ImageContainer>
                <div className="col-xs-12 col-xl-6">
                    <Title>Why Suspenders</Title>
                    <P>
                        {props.whySuspendersText}
                    </P>
                </div>
            </div>
            <div clasName="row">
                <SuspenderFeature featureText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <SuspenderFeature featureText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <SuspenderFeature featureText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <SuspenderFeature featureText="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </div>
        </SectionContainer>
    );
};

// Styles

const Title = styled(H2)`
    padding-top: 0px;
    padding-bottom: 20px;
`

const SectionContainer = styled(Section)`
    padding-top: 20px;
`


export default WhySuspenders;