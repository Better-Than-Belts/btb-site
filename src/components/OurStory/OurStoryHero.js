import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wave, H1, H2, P, BGWhite } from '../../styles';
import { device } from '../../device';
import { RichText } from 'prismic-reactjs';


const OurStoryHero = (props) => {
    
    // HeroBG defined here to utilize props
    const HeroBG = styled.div`
        background-image: url(${props.hero.url});
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        @media ${device.tablet} {
            background-image: url(${props.hero.url});
            background-size: cover;
        }
    `;

    return (
        <BGWhite>
            <HeroBG>
                <HeroWrapper>
                    <NamesDesktop className="">
                        <Info className="float-left">
                            <InfoName>Tyler Farley</InfoName>
                            <InfoText>{RichText.asText(props.tyler_title)}</InfoText>
                        </Info>
                        <Info className="float-right">
                            <InfoName>Tori Farley</InfoName>
                            <InfoText>{RichText.asText(props.tori_title)}</InfoText>
                        </Info>
                    </NamesDesktop>
                    <HeroTitle>
                        <HeroText>{RichText.asText(props.hero_title)}</HeroText>
                    </HeroTitle>
                    <HeroArrow icon='arrow-down' size="3x" />
                </HeroWrapper>
                <Wave />
            </HeroBG>
            <NamesMobile>
                <Info>
                    <InfoName>Tyler Farley</InfoName>
                    <InfoText>{RichText.asText(props.tyler_title)}</InfoText>
                </Info>
                <Info>
                    <InfoName>Tori Farley</InfoName>
                    <InfoText>{RichText.asText(props.tori_title)}</InfoText>
                </Info>
            </NamesMobile>
        </BGWhite>

    );
};

// Styles
const HeroWrapper = styled.div`
    margin: auto;
    position: relative;
    width: 75%;
    padding: 10px;
    text-align: center;
    height: 800px;
    @media ${device.tablet} {
        height: 600px;
    }
    @media ${device.mobile} {
        height: 400px;
    }
`;

const HeroTitle = styled.div`
    margin: 0;
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const HeroText = styled(H1)`
    color: #F9F9FE;
`;

const HeroArrow = styled(FontAwesomeIcon)`
    position: absolute;
    bottom: 0%;
    color: #F9F9FE;
    @media ${device.tablet} {
        display: none;
    }
`;

const NamesDesktop = styled.div`
    margin-top: 120px;
    @media ${device.tablet} {
        display: none;
    }
`;
const NamesMobile = styled.div`
    display: none;
    @media ${device.tablet} {
        display: flex;
        margin-left: 30px;
        margin-right: 30px;
        height: 150px;
        margin-top: 0px;
    }
`;

const Info = styled.div`
    width: 220px;
    text-align: left;
    @media ${device.tablet} {
        display: block;
        width: 50%;
        padding: 10px 10px;
    }
`;
const InfoName = styled(H2)`
    font-size: 36px;
    color: #F9F9FE;
    @media ${device.tablet} {
        color: #0C1527;
        font-size: 20px;
    }
`;
const InfoText = styled(P)`
    color: #F9F9FE;
    line-height: 160%;
    margin: 0px;
    @media ${device.tablet} {
        color: #0C1527;
        line-height: 130%;
    }
`;

export default OurStoryHero;