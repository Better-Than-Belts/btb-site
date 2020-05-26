import React from 'react';
import styled from 'styled-components';
import { AccentContainerFull, Wave, Section, H2, P, ImageContainer, BGBlue, AccentContainer, AccentImage } from '../../styles';
import { device } from '../../device.js';
import wave from '../../images/OurProduct/OurProduct-PinkWave.svg';
import circle from '../../images/OurProduct/OurProduct-YellowCircle.svg';
import block1 from '../../images/OurProduct/OurProduct-TealBlock.svg';
import block2 from '../../images/OurProduct/OurProduct-TanBlock.svg';
import block2Mobile from '../../images/OurProduct/OurProduct-TanBlockMobile.svg';
import blockVertical from '../../images/OurProduct/OurProduct-TealBlockVertical.svg';
import waveMobile from '../../images/OurProduct/OurProduct-PinkWaveMobile.svg';
import { RichText } from 'prismic-reactjs';

const WhyBTB = (props) => {
    return (
        <BGBlue>
            <AccentContainerFull>
                <WaveLines />
            </AccentContainerFull>
            <SectionContainer>
                <WhyBTBSection className="row flex-md-row-reverse">
                    <ImageContainer className="col-xs-12 col-md-6">
                        <WhyBTBImage src={props.our_product_primary_image.url} />
                        <AccentContainer>
                            <Circle src={circle} />
                        </AccentContainer>
                    </ImageContainer>
                    <TextContainer className="col-xs-12 col-md-6">
                        <Title>{RichText.asText(props.our_product_primary_title)}</Title>
                        <Text>
                            {RichText.asText(props.our_product_primary_text)}
                        </Text>
                    </TextContainer>
                </WhyBTBSection>
                <WhyBTBSection className="row">
                    <ImageContainer className="col-xs-12 col-md-6">
                        <AccentContainer>
                            <Block1 src={block1} />
                        </AccentContainer>
                        <WhyBTBImage src={props.our_product_secondary_image.url} />
                    </ImageContainer>
                    <TextContainer className="col-xs-12 col-md-6">
                        <SupplyTitle>{RichText.asText(props.our_product_secondary_title)}</SupplyTitle>
                        <SupplyText>
                            {RichText.asText(props.our_product_secondary_text)}
                        </SupplyText>
                    </TextContainer>
                </WhyBTBSection>
            </SectionContainer>
            <AccentContainerFull>
                <Block2 />
            </AccentContainerFull>
            <Wave />
        </BGBlue>
    );
};

// Styles

const WhyBTBImage = styled.div`
    background-image: url(${props => props.src});
    height: 500px;
    width: auto;
    background-size: cover;
`;

const Title = styled(H2)`
    width: 80%;
    padding-top: 0px;
    padding-bottom: 10px;
    line-height: 140%;
    @media ${device.tablet} {
        width: 100%;
    }
`
const SupplyTitle = styled(Title)`
    padding-left: 30px;
    @media ${device.tablet} {
        padding-left: 0;
    }
`;

const TextContainer = styled.div`
    margin-top: 75px;
    @media ${device.tablet} {
        margin-top: 0;
    }
`;

const Text = styled(P)`
    width: 85%;
    line-height: 30px;
    color: #F9F9FE;
    @media ${device.tablet} {
        width: 100%;
    }
`;
const SupplyText = styled(Text)`
    padding-left: 30px;
    width: 90%;
    @media ${device.tablet} {
        padding-left: 0;
    }
`;

const WhyBTBSection = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    @media ${device.tablet} {
        padding-bottom: 20px;
    }
`

const SectionContainer = styled(Section)`
    padding-bottom: 20px;
    @media ${device.tablet} {
        padding: 30px 30px 50px 30px;
    }
`

const WaveLines = styled(AccentImage)`
    width: 100%;
    top: -80px;
    z-index: 5;
    content: url(${wave});
    @media ${device.tablet} {
        top: -50px;
    }
    @media ${device.mobile} {
        content: url(${waveMobile});
        top: -80px;
    }
`;

const Circle = styled(AccentImage)`
    top: -80px;
    left: 350px;
    width: 150px;
    @media ${device.laptop} {
        left: 330px;
    }
    @media (max-width: 980px) {
        left: 300px;
    }
    @media (max-width: 920px) {
        left: 250px;
    }
    @media (max-width: 820px) {
        left: 220px;
    }
    @media ${device.tablet} {
        display: none;
    }
`;

const Block1 = styled(AccentImage)`
    top: 50px;
    left: -45px;
    @media (max-width: 1190px) {
        content: url(${blockVertical});
        top: -45px;
        left: 20px;
    }
`;

const Block2 = styled(AccentImage)`
    content: url(${block2});
    top: 10px;
    left: 80%;
    @media ${device.laptop} {
        top: -10px;
    }
    @media ${device.tablet} {
        top: -20px;
    }
    @media ${device.mobile} {
        content: url(${block2Mobile});
        top: -15px;
    }
`;

export default WhyBTB;