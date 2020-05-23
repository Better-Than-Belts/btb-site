import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { device } from '../../device';
import { RouteLink, AccentContainerFull, Image, AccentImage, AccentContainer, BGWhite, ButtonYellow, ButtonText, Flex, ImageContainer, H2, P, Section } from '../../styles';
import circle1 from '../../images/Home/Home-BlueCircle1.svg';
import wave2 from '../../images/Home/Home-PinkWave2.svg';
import waveMobile from '../../images/Home/Home-PinkWaveMobile2.svg';
import circleMobile from '../../images/Home/Home-BlueCircleMobile.svg';

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
                            <ButtonText>
                                <RouteLink to={`/why-suspenders`}>Learn More</RouteLink>
                            </ButtonText>
                        </LearnMore>
                    </TextContainer>
                    <ManufacturingImageContainer>
                        <AccentContainer>
                            <Circle1 src={circle1} />
                        </AccentContainer>
                        <ConsciousManufacturingImage src={props.conscious_manufacturing_image.url} />
                    </ManufacturingImageContainer>
                </Flex>
            </DesktopSection>
            <AccentContainerFull>
                <Wave2 />
            </AccentContainerFull>
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
                            <ButtonText>
                                <RouteLink to={`/why-suspenders`}>Learn More</RouteLink>
                            </ButtonText>
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
    padding-top: 80px;
    padding-bottom: 100px;
    @media ${device.tablet} {
        display: none;
    }
`;

const MobileSection = styled(Section)`
    display: none;
    @media ${device.tablet} {
        padding-top: 50px;
        display: block;
        flex-wrap: wrap;
    }
`;

const ConsciousManufacturingImage = styled(Image)`
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    @media ${device.tablet} {
        display: block;
        margin-left: auto;
        margin-right: auto;
        height: 400px;
        object-fit: cover;
    }
`;

const Circle1 = styled(AccentImage)`
    z-index: 5;
    left: 380px;
    top: -60px;
    width: 150px;
    @media (max-width: 1190px) {
        content: url(${circleMobile});
        left: -95px;
    }
    @media (max-width: 950px) {
        width: 130px;
    }
    @media ${device.tablet} {
        display: none;
    }
`;

const Wave2 = styled(AccentImage)`
    content: url(${wave2});
    width: 100%;
    top: -200px;
    @media (max-width: 1440px) {
        top: -160px;
    }
    @media ${device.laptop} {
        top: -100px;
    }
    @media ${device.tablet} {
        top: 660px;
    }
    @media (max-width: 720px) {
        top: 690px;
    }
    @media (max-width: 560px) {
        content: url(${waveMobile});
        top: 710px;
    }
    @media (max-width: 450px) {
        top: 790px;
    }
    @media (max-width: 380px) {
        top: 820px;
    }
`;

const ManufacturingImageContainer = styled(ImageContainer)`
    flex: 1;
    padding-left: 100px;
    @media ${device.laptop} {
        padding-left: 0px;
    }

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
    padding-bottom: 10px;
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