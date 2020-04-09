import styled from 'styled-components';
import { device } from './device';
import square from './images/Square.png';
import portrait from './images/Portrait.png';
import landscape from './images/Landscape.png';
import cartIcon from './images/Cart-Icon.png';
import logo from './images/Logo.png';
import filterCircle from './images/SmallCircle.png'
import ourStoryImage from './images/OurStoryImage.png';
import featureCircle from './images/Circle.png';
import './index.css';

const H1 = styled.h1`
    font-family: "Calistoga", serif;
    font-size: 72px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const H2 = styled.h2`
    font-family: "Calistoga", cursive;
    font-weight: normal;
    font-size: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const H3 = styled.h3`
    font-family: "Libre Franklin", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const P = styled.p`
    font-family: "Libre Franklin", sans-serif;
    font-size: 20px;
    line-height: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const Button = styled.button`
    border-radius: 42px;
    padding: 15px 35px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
    outline: none;
`;

const ButtonYellow = styled(Button)`
    background: #FDC16E;
    color: #004669;
`;

const ButtonText = styled(H3)`
    margin: 0;
    font-weight: bold;
    font-size: 26px;
    line-height: 140%;
    text-align: center;

    @media ${device.mobile} {
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

    @media ${device.mobile} {
        flex-wrap: wrap;

    }
`;

const Section = styled.div`
    margin-right: auto;
    margin-left:  auto;

    max-width: 1100px;

    padding-right: 10px;
    padding-left:  10px;

    padding-top: 100px;
    padding-bottom: 100px;

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
`;

const ImageContainer = styled.div`
    padding: 10px;
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
    margin-bottom: 15px;
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

export {
    H1,
    H2,
    H3,
    P,
    Button,
    ButtonYellow,
    ButtonText,
    Flex,
    TextCenter,
    ImageContainer,
    BGGray,
    BGWhite,
    BGBrown,
    BGBlue,
    Section,
    MockImage,
    MockImageSquare,
    MockImageCircle,
    MockImagePortrait,
    MockImageLandscape,
    MockLogo,
    MockCartIcon,
    MockFilterCircle,
    MockImageOurStory,
    MockFeatureCircle,
    MockMediaImage
};
