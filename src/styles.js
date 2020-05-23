import styled from 'styled-components';
import React from 'react';
import { device } from './device';
import { Link } from 'react-router-dom';
import square from './images/Square.png';
import portrait from './images/Portrait.png';
import landscape from './images/Landscape.png';
import logo from './images/Logo.png';
import filterCircle from './images/SmallCircle.png'
import ourStoryImage from './images/OurStoryImage.png';
import featureCircle from './images/Circle.png';
import './index.css';
import StarIcon from './images/CoralStar.svg';


const H1 = styled.h1`
    font-family: "Calistoga", serif;
    font-size: 72px;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 86px;
    @media ${device.tablet} {
        font-size: 50px;
        line-height: 72px;
    }
`;

const H2 = styled.h2`
    font-family: "Calistoga", cursive;
    font-weight: normal;
    font-size: 48px;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 56px;

    @media ${device.tablet} {
        font-size: 32px;
        line-height: 40px;
    }
`;

const H3 = styled.h3`
    font-family: "Calistoga", serif;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 36px;
    line-height: 52px;
    color: #F9F9FE;
    @media ${device.tablet} {
        font-size: 24px;
        line-height: 36px;
    }
`;

const H4 = styled.h4`
    font-family: "Calistoga", cursive;
    font-weight: normal;
    font-size: 20px;
    line-height: 140%;
    margin-top: 10px;
    margin-bottom: 10px;

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 26px;
    }
`;

const P = styled.p`
    font-family: "Libre Franklin", sans-serif;
    font-size: 18px;
    line-height: 28px;
    margin-top: 10px;
    margin-bottom: 10px;

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 24px;
    }
`;

const P2 = styled.p`
    font-family: "Libre Franklin", sans-serif;
    font-size: 18px;
    line-height: 28px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 800;
    color: #0C1527;

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 24px;
    }
`;

const P3 = styled(P)`
    font-size: 14px;
    line-height: 18px;

    @media ${device.tablet} {
        font-size: 13px;
        line-height: 18px;
    }
`;

const Button = styled.button`
    border-radius: 42px;
    padding: 15px 35px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 3px;
    margin-right: 3px;
    border: none;
    outline: none;
`;

const ButtonYellow = styled(Button)`
    background: #FDC16E;
    font-weight: 1000;


    &:hover {
        background-color: #fa9203;
    }
`;

const ButtonText = styled(P)`
    margin: 0;
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    text-align: center;
    font-style: normal;
    color: #004669;

    @media ${device.tablet} {
        font-size: 18px;
        line-height: 24px;
    }
`;

const TextCenter = styled.div`
    text-align: center;
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: nowrap;
    width: 100%;

    @media ${device.tablet} {
        flex-wrap: wrap;

    }
`;

const Section = styled.div`
    margin-right: auto;
    margin-left:  auto;

    max-width: 1100px;

    padding-right: 20px;
    padding-left:  20px;

    padding-top: 80px;
    padding-bottom: 80px;

`;

const FullPageContainer = styled.div`
    padding: 80px 150px;
    @media ${device.laptop} {
        padding: 80px 30px;
    }

    @media ${device.tablet} {
        padding: 70px 90px;
    }

    @media ${device.mobile} {
        padding: 10px 5px;
    }
`;

const BGGray = styled.div`
    background: #E2E2E2;
`;

const BGWhite = styled.div`
    background: #F9F9FE;
    color: #004669;
`;

const BGBrown = styled.div`
    background: #A0734F;
`;

const BGBlue = styled.div`
    background: #004669;
    color: #F9F9FE;
`;

const ImageContainer = styled.div`
    padding: 10px;
`;

const Image = styled.img`
    max-width: 100%;
    height: auto;
    padding: 0;
    @media ${device.tablet} {
        margin-left: auto;
        margin-right: auto;
        display: block;
    }
`;

const MockImage = styled.img`
    content: url(${square});
`;

const MockImageSquare = styled.img`
    content: url(${square});
    max-width: 100%;
    height: auto;

`;

const MockImageCircle = styled(MockImageSquare)`
    border-radius: 50%;
`;

const MockImagePortrait = styled(MockImageSquare)`
    content: url(${portrait});
`;

const MockImageLandscape = styled(MockImageSquare)`
    content: url(${landscape});
`;

const MockLogo = styled.img`
    content: url(${logo});
    width: 170px;
    height: 60px;
`;

const Star = styled.img`
    content: url(${StarIcon});
    max-width: 50px;
    @media ${device.mobile} {
        max-width: 40px;
    }
`;

const MockFilterCircle = styled.img`
    content: url(${filterCircle});
    width: 32px;
    height: 32px;
`;

const MockImageOurStory = styled.img`
    content: url(${ourStoryImage});
    width: 100%;
    padding: 10px;
`;

const MockFeatureCircle = styled.img`
    content: url(${featureCircle});
    padding: 0;
    float: left;
`;

const MockMediaImage = styled(MockImageLandscape)`
    width: 100%;
    height: 230px;
    padding: 20px;
`;

const Wave = () => {
    return (
        <div className="wave-div">
            <svg className="wave-svg" viewBox="0 0 1440 79" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 79V56.6644C93.8325 29.4191 237.797 -2.72577 410.647 0.184143C644.692 4.12289 769.925 59.6965 997.498 66.0596C1106.28 69.102 1219.49 60.5692 1440 4.89027V79" fill="#F9F9FE" />
            </svg>
        </div>
    )
}

const AccentContainer = styled.div`
    position: absolute;
    width: auto;
    pointer-events: none;
`;

const AccentContainerFull = styled(AccentContainer)`
    width: 100%;
`;

const AccentImage = styled.img`
    position: relative;
`;

const RouteLink = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const BTBLink = styled(Link)`
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }
`;


// Input styles
const Input = styled.input`
    padding: 5px 10px;
    font-family: "Libre Franklin", sans-serif;
    width: 80%;
`

const InputButton = styled.button`
    background-color: #FDC16E;
    box-shadow: none;
    border-width: 0px;
    padding: 0px 20px;
`

export {
    H1,
    H2,
    H3,
    H4,
    P,
    P2,
    P3,
    Button,
    ButtonYellow,
    ButtonText,
    Flex,
    TextCenter,
    ImageContainer,
    Image,
    Section,
    BGGray,
    BGWhite,
    FullPageContainer,
    BGBrown,
    BGBlue,
    MockImage,
    MockImageSquare,
    MockImageCircle,
    MockImagePortrait,
    MockImageLandscape,
    MockLogo,
    Star,
    MockFilterCircle,
    MockImageOurStory,
    MockFeatureCircle,
    MockMediaImage,
    BTBLink,
    Input,
    InputButton,
    Wave,
    AccentContainer,
    AccentContainerFull,
    AccentImage,
    RouteLink
};
