import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import { BGWhite, ButtonYellow, ButtonText, Flex, ImageContainer, H2, MockImageLandscape, P, Section } from '../../styles';

const OurStoryPreview = (props) => {
    return (
        <BGWhite>
            <OurStorySection>
                <Flex>
                    <OurStoryImage>
                        <Image />
                    </OurStoryImage>
                    <OurStoryTextContainer>
                        <OurStoryText>
                            <Title>Our Story</Title>
                            <Text>
                                {props.ourStoryText}
                            </Text>
                            <LearnMore>
                                <ButtonText>Learn More</ButtonText>
                            </LearnMore>
                        </OurStoryText>
                    </OurStoryTextContainer>
                </Flex>
            </OurStorySection>
        </BGWhite>
    );
};

// styles
const Image = styled(MockImageLandscape)`
    width: 540px;
    height: 400px;
`

const OurStorySection = styled(Section)`
    @media ${device.mobile} {
        padding: 30px;
    }
`;

const OurStoryImage = styled(ImageContainer)`
    flex: 1;
    padding-right: 50px;

    @media ${device.tablet} {
        flex: 1;
        padding: 10px;
    }
`;

const OurStoryTextContainer = styled.div`
    margin-top: 10%;
    flex: 1;
    padding-left: 50px;

    @media ${device.mobile} {
        margin-top: 0;
        flex: auto;
        padding: 10px;
    }
`;

const OurStoryText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    
`;

const Text = styled(P)`
    padding-top: 20px;
    padding-bottom: 30px;
    line-height: 30px;
    @media ${device.mobile} {
        padding-top: 0px;
        font-size: 16px;
    }
`;

const Title = styled(H2)`
    @media ${device.mobile} {
        font-size: 32px;
    }
`

const LearnMore = styled(ButtonYellow)`
    @media ${device.mobile} {
        margin-bottom: 50px;
        margin: 0 auto;
        display: block;
    }
`;

export default OurStoryPreview;