import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import OurStoryPreviewImage from '../../images/Home-OurStoryPreview.png'
import { BGWhite, ButtonYellow, ButtonText, Flex, ImageContainer, H2, P, Section } from '../../styles';

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
const Image = styled.img`
    content: url(${OurStoryPreviewImage});
    width: 100%;
`

const OurStorySection = styled(Section)`
    @media ${device.tablet} {
        padding: 30px;
    }
`;

const OurStoryImage = styled(ImageContainer)`
    flex: 1;
    padding-right: 50px;
    width: 60%;

    @media ${device.tablet} {
        width: 100%;
        max-width: 100%;
        flex: auto;
        padding: 10px;
    }
`;

const OurStoryTextContainer = styled.div`
    margin-top: 75px;
    flex: 1;
    padding-left: 50px;

    @media ${device.tablet} {
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
    @media ${device.tablet} {
        padding-top: 0px;
        font-size: 16px;
    }
`;

const Title = styled(H2)`
    @media ${device.tablet} {
        font-size: 32px;
    }
`

const LearnMore = styled(ButtonYellow)`
    @media ${device.tablet} {
        margin-bottom: 50px;
        margin: 0 auto;
        display: block;
    }
`;

export default OurStoryPreview;