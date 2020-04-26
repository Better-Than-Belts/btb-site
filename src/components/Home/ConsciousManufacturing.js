import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { device } from '../../device';
import { BGWhite, ButtonYellow, ButtonText, Flex, ImageContainer, H2, P, Section, Image } from '../../styles';

const ConsciousManufacturing = (props) => {
    return (
        <BGWhite>
            <DesktopSection>
                <Flex>
                    <TextContainer>
                        <Title>
                            {RichText.asText(props.conscious_manufacturing_title)}
                        </Title>
                        <Text>
                            {RichText.asText(props.conscious_manufacturing_text)}
                        </Text>
                        <LearnMore>
                            <ButtonText>Learn More</ButtonText>
                        </LearnMore>
                    </TextContainer>
                    <ManufacturingImageContainer>
                        <ConsciousManufacturingImage src={props.conscious_manufacturing_image.url} />
                    </ManufacturingImageContainer>
                </Flex>
            </DesktopSection>
            <MobileSection>
                <Flex>
                    <ManufacturingImageContainer>
                        <ConsciousManufacturingImage src={props.conscious_manufacturing_image.url} />
                    </ManufacturingImageContainer>
                    <TextContainer>
                        <Title>
                            {RichText.asText(props.conscious_manufacturing_title)}
                        </Title>
                        <Text>
                            {RichText.asText(props.conscious_manufacturing_text)}
                        </Text>
                        <LearnMore>
                            <ButtonText>Learn More</ButtonText>
                        </LearnMore>
                    </TextContainer>
                </Flex>
            </MobileSection>
        </BGWhite>
    );
};

// styles
const DesktopSection = styled(Section)`
    flex-wrap: nowrap;
    @media ${device.tablet} {
        display: none;
    }
`;

const MobileSection = styled(Section)`
    display: none;
    @media ${device.tablet} {
        display: block;
        flex-wrap: wrap;
    }
`;

const ConsciousManufacturingImage = styled(Image)`
    width: 100%;
    @media ${device.tablet} {
        display: block;
        margin-left: auto;
        margin-right: auto;
        max-width: 325px;
        height: 280px;
        object-fit: cover;
    }
`;

const ManufacturingImageContainer = styled(ImageContainer)`
    flex: 1;
    padding-left: 100px;

    @media ${device.tablet} {
        align-items: center;
        flex: 1;
        padding: 20px;
    }
`;

const TextContainer = styled.div`
    margin-top: 75px;
    flex: 1;
    padding-right: 50px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media ${device.tablet} {
        margin-top: 0;
        flex: auto;
        padding-right: 0px;
        margin-left: 20px;
        margin-right: 20px;
    }
`;

const Text = styled(P)`
    padding-top: 10px;
    padding-bottom: 30px;
    line-height: 30px;
    @media ${device.tablet} {
        padding-top: 0px;
        font-size: 16px;
        line-height: 26px;
    }
`;

const Title = styled(H2)`
    line-height: 140%;
    @media ${device.tablet} {
        font-size: 32px;
    }
`;

const LearnMore = styled(ButtonYellow)`
    @media ${device.tablet} {
        margin-bottom: 50px;
        margin: 0 auto;
        display: block;
    }
`;

export default ConsciousManufacturing;