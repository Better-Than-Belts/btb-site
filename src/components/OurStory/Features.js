import React from 'react';
import styled from 'styled-components';
import { Section, H2, P, ImageContainer, MockImageOurStory } from '../../styles';
import { device } from '../../device.js';

const content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gravida semper augue sagittis vulputate. Quisque lobortis pellentesque mi, eget placerat leo porttitor eget. Proin at volutpat justo, pretium finibus lorem. Curabitur congue consectetur enim ullamcorper aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit"

const OurStoryFeatures = (props) => {
    return (
        <SectionContainer>
            <FeatureSection className="row">
                <ImageContainer className="col-xs-12 col-md-6">
                    <MockImageOurStory />
                </ImageContainer>
                <div className="col-xs-12 col-md-6">
                    <Title>It All Starts with an idea</Title>
                    <FeatureContent>{content}</FeatureContent>
                </div>
            </FeatureSection>
            <FeatureSection className="row flex-md-row-reverse">
                <ImageContainer className="col-xs-12 col-md-6">
                    <MockImageOurStory />
                </ImageContainer>
                <div className="col-xs-12 col-md-6">
                    <Title>Designed with you in mind</Title>
                    <FeatureContent>{content}</FeatureContent>
                </div>
            </FeatureSection>
            <FeatureSection className="row">
                <ImageContainer className="col-xs-12 col-md-6">
                    <MockImageOurStory />
                </ImageContainer>
                <div className="col-xs-12 col-md-6">
                    <Title>Looking forward</Title>
                    <FeatureContent>{content}</FeatureContent>
                </div>
            </FeatureSection>
        </SectionContainer>
    );
};

// Styles

const Title = styled(H2)`
    padding-top: 0px;
    padding-bottom: 20px;
`

const FeatureSection = styled.div`
    padding-top: 20px;
    padding-bottom: 20px;
`

const FeatureContent = styled(P)`
    line-height: 30px;
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

export default OurStoryFeatures; 