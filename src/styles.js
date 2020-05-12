import styled from 'styled-components';
import React from 'react';
import { device } from './device';
import { Link } from 'react-router-dom';
import square from './images/Square.png';
import portrait from './images/Portrait.png';
import landscape from './images/Landscape.png';
import cartIcon from './images/Cart-Icon.png';
import logo from './images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import filterCircle from './images/SmallCircle.png'
import ourStoryImage from './images/OurStoryImage.png';
import featureCircle from './images/Circle.png';
import './index.css';

const H1 = styled.h1`
    font-family: "Calistoga", serif;
    font-size: 72px;
    margin-top: 10px;
    margin-bottom: 10px;
    @media ${device.tablet} {
        font-size: 50px;
    }
`;

const H2 = styled.h2`
    font-family: "Calistoga", cursive;
    font-weight: normal;
    font-size: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
    line-height: 140%;

    @media ${device.tablet} {
        font-size: 32px;
    }
`;

const H3 = styled.h3`
    font-family: "Calistoga", serif;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: 36px;
    color: #F9F9FE;
    @media ${device.tablet} {
        font-size: 28px;
        line-height: 32px;
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
    font-size: 20px;
    line-height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    color: #0C1527;

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 26px;
    }
`;

const P2 = styled.p`
    font-family: "Libre Franklin", sans-serif;
    font-size: 20px;
    line-height: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    font-weight: 800;
    color: #0C1527;

    @media ${device.tablet} {
        font-size: 16px;
        line-height: 26px;
    }
`;

const P3 = styled(P)`
    font-size: 15px;
    line-height: 18px;

    @media ${device.tablet} {
        font-size: 13px;
        line-height: 21px;
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
    font-size: 26px;
    line-height: 140%;
    text-align: center;
    font-style: normal;

    @media ${device.tablet} {
        font-size: 20px;
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

    padding-top: 100px;
    padding-bottom: 100px;

`;

const FullPageContainer = styled.div`
    padding: 80px 150px;

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
`
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

const MockCartIcon = styled.img`
    content: url(${cartIcon});
    width: 78px;
    height: 60px;
`;

const Star = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: #C4C4C4;
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
            <svg className="wave-svg" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.30485e-05 169V43.1364C93.8325 22.3956 237.797 -2.07504 410.647 0.140168C644.692 3.13858 769.925 45.4447 997.498 50.2886C1106.28 52.6047 1219.49 46.109 1440 3.72277V160.041" fill="#F9F9FE" />
            </svg>
        </div>
    )
}

const BTBLink = styled(Link)`
    text-decoration: none;

    &:hover {
        text-decoration: none;
    }
`;


// Input styles
const Input = styled.input`
    padding: 5px 10px;
    font-family: Poppins;
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
    MockCartIcon,
    Star,
    MockFilterCircle,
    MockImageOurStory,
    MockFeatureCircle,
    MockMediaImage,
    BTBLink,
    Input,
    InputButton,
    Wave
};
