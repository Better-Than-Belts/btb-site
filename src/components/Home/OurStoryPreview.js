import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import { Button, ButtonText, Flex, ImageContainer, H2, MockImageLandscape, P, Section } from '../../styles';

const OurStoryPreview = () => {
    return (
        <Section>
            <Flex>
                <OurStoryImage>
                    <MockImageLandscape />
                </OurStoryImage>
                <OurStoryTextContainer>
                    <OurStoryText>
                        <H2>Our Story</H2>
                        <P>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam eius officia amet fugiat labore, assumenda corporis perferendis adipisci fugit, porro voluptas? Sunt, eius? Nemo ex fugiat tempore ad nesciunt libero repudiandae qui ullam modi? Similique modi quo consectetur nostrum veniam error non consequatur, cum quam quibusdam voluptatum dolorum accusamus accusantium.
                        </P>
                        <Button>
                            <ButtonText>Learn More</ButtonText>
                        </Button>
                    </OurStoryText>
                </OurStoryTextContainer>
            </Flex>
        </Section>
    );
};

// styles
const OurStoryImage = styled(ImageContainer)`
    flex: 2;

    @media ${device.tablet} {
        flex: 1;

    }
`;

const OurStoryTextContainer = styled.div`
    margin-top: 15%;
    flex: 1;

    @media ${device.mobile} {
        margin-top: 0;
        flex: auto;

    }
`;

const OurStoryText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    
`;

export default OurStoryPreview;