import React from 'react';
import styled from 'styled-components';
import { Wave, Section, H2, P, ImageContainer, Image, BGBlue } from '../../styles';
import { device } from '../../device.js';
import { RichText } from 'prismic-reactjs';

const WhyBTB = (props) => {
    console.log(props);
    return (
        <BGBlue>
            <SectionContainer>
                <WhyBTBSection className="row flex-md-row-reverse">
                    <ImageContainer className="col-xs-12 col-lg-6">
                        <Image src={props.our_product_primary_image.url}/>
                    </ImageContainer>
                    <TextContainer className="col-xs-12 col-lg-6">
                        <Title>{ RichText.asText(props.our_product_primary_title) }</Title>
                        <Text>
                            { RichText.asText(props.our_product_primary_text) }
                        </Text>
                    </TextContainer>
                </WhyBTBSection>
                <WhyBTBSection className="row">
                    <ImageContainer className="col-xs-12 col-lg-6">
                        <Image src={props.our_product_secondary_image.url}/>
                    </ImageContainer>
                    <TextContainer className="col-xs-12 col-lg-6">
                        <SupplyTitle>{ RichText.asText(props.our_product_secondary_title) }</SupplyTitle>
                        <SupplyText>
                            { RichText.asText(props.our_product_secondary_text) }
                        </SupplyText>
                    </TextContainer>
                </WhyBTBSection>
            </SectionContainer>
            <Wave />
        </BGBlue>
    );
};

// Styles

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
    padding-top: 40px;
    padding-bottom: 40px;
    @media ${device.tablet} {
        padding-bottom: 20px;
    }
`

const SectionContainer = styled(Section)`
    @media ${device.tablet} {
        padding-top: 30px;
        padding-left: 30px;
        padding-right: 30px;
    }
`

export default WhyBTB;