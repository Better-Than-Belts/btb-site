import React from 'react';
import styled from 'styled-components';
import { Button, ButtonText, Flex, H2, MockImageLandscape, P, Section, MockImageSquare } from '../../styles';

const OurStoryImage = styled.div`
    flex: 2;
`;

const OurStoryTextContainer = styled.div`
    position: relative;
    padding-bottom: 100px;
    flex: 1;
`;

const OurStoryText = styled.div`
    position: absolute;
    bottom: 0;
`;

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


export default OurStoryPreview;