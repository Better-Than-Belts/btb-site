import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import { BGWhite, ButtonYellow, ButtonText, Flex, ImageContainer, H2, MockImagePortrait, P, Section } from '../../styles';

const ConsciousManufacturing = (props) => {
    return (
        <BGWhite>
            <DesktopSection>
                <Flex>
                    <TextContainer>
                        <Title>Conscious Manufacturing</Title>
                        <Text>
                            {props.consciousManufacturingText}
                        </Text>
                        <LearnMore>
                            <ButtonText>Learn More</ButtonText>
                        </LearnMore>
                    </TextContainer>
                    <ManufacturingImage>
                        <Image />
                    </ManufacturingImage>
                </Flex>
            </DesktopSection>
            <MobileSection>
                <Flex>
                    <ManufacturingImage>
                        <Image />
                    </ManufacturingImage>
                    <TextContainer>
                        <Title>Conscious Manufacturing</Title>
                        <Text>
                            {props.consciousManufacturingText}
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
    @media ${device.mobile} {
        display: none;
    }
`;

const MobileSection = styled(Section)`
    display: none;
    @media ${device.mobile} {
        display: block;
        flex-wrap: wrap;
    }
`;

const Image = styled(MockImagePortrait)`
    width: 400px;
    height: 670px;
    @media ${device.mobile} {
        width: 325px;
        height: 280px;
        object-fit: cover;
    }
`;

const ManufacturingImage = styled(ImageContainer)`
    flex: 1;
    padding-left: 100px;

    @media ${device.tablet} {
        flex: 1;
    }

    @media ${device.mobile} {
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

    @media ${device.mobile} {
        margin-top: 0;
        flex: auto;
        margin-left: 20px;
        margin-right: 20px;
    }
`;

const Text = styled(P)`
    padding-top: 10px;
    padding-bottom: 30px;
    line-height: 30px;
    @media ${device.mobile} {
        padding-top: 0px;
        font-size: 16px;
        line-height: 26px;
    }
`;

const Title = styled(H2)`
    line-height: 140%;
    @media ${device.mobile} {
        font-size: 32px;
    }
`;

const LearnMore = styled(ButtonYellow)`
    @media ${device.mobile} {
        margin-bottom: 50px;
        margin: 0 auto;
        display: block;
    }
`;

export default ConsciousManufacturing;