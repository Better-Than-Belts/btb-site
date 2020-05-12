import React from 'react';
import styled from 'styled-components';
import { Image, AccentImage, BGWhite, Section, H2, P, ImageContainer, MockImageLandscape, AccentContainer } from '../../styles';
import SuspenderFeatures from './SuspenderFeatures';
import { device } from '../../device.js';
import circle from '../../images/OurProduct/OurProduct-TanCircle.svg';
import { RichText } from 'prismic-reactjs';


const WhySuspenders = (props) => {
    return (
        <BGWhite>
            <SectionContainer>
                <div className="row flex-md-row-reverse">
                    <ImageContainer className="col-xs-12 col-md-6">
                        <AccentContainer>
                            <Circle src={circle} />
                        </AccentContainer>
                        <Image src={props.hero_image.url} />
                    </ImageContainer>
                    <TextContainer className="col-xs-12 col-md-6">
                        <Title>{RichText.asText(props.our_product_title)}</Title>
                        <Text>
                            {RichText.asText(props.our_product_main_text)}
                        </Text>
                    </TextContainer>
                </div>
                <SuspenderFeatures {...props} />
            </SectionContainer>
        </BGWhite>
    );
};

// Styles

const Title = styled(H2)`
    padding-top: 20px;
`

const Text = styled(P)`
    line-height: 30px;
    width: 80%;

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 26px;
    }
    @media (max-width: 900px) {
        width: 100%;
    }
`;

const SectionContainer = styled(Section)`

    @media ${device.tablet} {
        padding-top: 30px;
        padding-left: 30px;
        padding-right: 30px;
    }
`

const TextContainer = styled.div`
    margin-top: 75px;
    @media ${device.tablet} {
        margin-top: 0;
    }
`;

// const Image = styled(MockImageLandscape)`
//     max-width: 545px;
//     height: 380px;
//     width: 100%;
//     @media ${device.tablet} {
//         display: block;
//         margin-left: auto;
//         margin-right: auto;
//         object-fit: cover;
//         max-width: 100%;
//         height: auto;
//     }
// `

const Circle = styled(AccentImage)`
    top: 40px;
    left: -85px;
    width: 130px;
    @media (max-width: 900px) {
        top: -40px;
    }
    @media ${device.tablet} {
        display: none;
    }
`;


export default WhySuspenders;