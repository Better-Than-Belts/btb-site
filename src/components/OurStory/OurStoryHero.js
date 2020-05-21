import React from 'react';
import styled from 'styled-components';
import Arrow from '../../images/OurStoryArrow.svg';
import { AccentContainerFull, Wave, H1, H2, P, BGWhite, AccentContainer, AccentImage } from '../../styles';
import { device } from '../../device';
import block from '../../images/OurStory/OurStory-YellowBlock.svg';
import blockMobile from '../../images/OurStory/OurStory-YellowBlockMobile.svg';
import { RichText } from 'prismic-reactjs';


const OurStoryHero = (props) => {



    return (
        <BGWhite>
            <HeroBG heroURL={props.hero.url}>
                <HeroWrapper>
                    <NamesDesktop className="">
                        <Info className="float-left">
                            <InfoName>Tyler Farley</InfoName>
                            <InfoText>{RichText.asText(props.tyler_title)}</InfoText>
                        </Info>
                        <InfoRight className="float-right">
                            <InfoName>Tori Farley</InfoName>
                            <InfoText>{RichText.asText(props.tori_title)}</InfoText>
                        </InfoRight>
                    </NamesDesktop>
                    <HeroTitle>
                        <HeroText>{RichText.asText(props.hero_title)}</HeroText>
                    </HeroTitle>
                    {/* <HeroArrow /> */}
                </HeroWrapper>
                <Wave />
                <AccentContainerFull>
                    <Block />
                </AccentContainerFull>
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
const HeroBG = styled.div`
    background-image: url(${props => props.heroURL});
    background-position: top;
    background-repeat: no-repeat;
    background-size: cover;
    @media ${device.tablet} {
        background-image: url(${props => props.heroURL});
        background-size: cover;
    }
`;

const HeroWrapper = styled.div`
    margin: auto;
    position: relative;
    width: 75%;
    padding: 10px;
    text-align: center;
    height: 700px;
    @media ${device.laptop} {
        width: 100%;
    }
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

const HeroArrow = styled.img`
    position: absolute;
    bottom: 0%;
    content: url(${Arrow});
    @media ${device.tablet} {
        display: none;
    }
`;

const NamesDesktop = styled.div`
    margin-top: 100px;
    @media ${device.laptop} {
        margin-top: 30px;
    }
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
        margin-top: 0px;
    }
`;

const Info = styled.div`
    width: 220px;
    text-align: left;
    @media ${device.laptop} {
        display: block;
        width: 30%;
        padding: 10px;
    }
    @media ${device.tablet} {
        width: 50%;
    }
`;
const InfoRight = styled(Info)`
    padding-left: 30px;
    @media (max-width: 1150px) {
        padding-left: 40px;
    }
    @media ${device.laptop} {
        width: 35%;
    }
    @media ${device.tablet} {
        width: 50%;
    }
`;
const InfoName = styled(H2)`
    font-size: 36px;
    color: #F9F9FE;
    margin-bottom: 0px;
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

const Block = styled(AccentImage)`
    content: url(${block});
    left: 80%;
    top: -60px;
    @media ${device.mobile} {
        content: url(${blockMobile});
        top: -40px;
    }
`;

export default OurStoryHero;