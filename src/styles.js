import styled from 'styled-components';
import { device } from './device';
import square from './images/Square.png';
import portrait from './images/Portrait.png';
import landscape from './images/Landscape.png';
import cartIcon from './images/Cart-Icon.png';
import logo from './images/Logo.png';
import './index.css';

const H1 = styled.h1`
    font-family: "Amaranth", sans-serif;
    font-size: 72px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const H2 = styled.h2`
    font-family: "Poppins", sans-serif;
    font-weight: bold;
    font-size: 36px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

const H3 = styled.h3`
    font-family: "Poppins", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;

`;

const P = styled.p`
    font-family: "Poppins";
    font-size: 18px;
    line-height: 25px;
    margin-top: 10px;
    margin-bottom: 10px;

`;

const Button = styled.button`
    background: #c4c4c4;
    padding: 20px 30px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: none;
    outline:none;
`;

const ButtonText = styled(H3)`
    margin: 0;
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

const ImageContainer = styled.div`
    padding: 10px;
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

export {
    H1,
    H2,
    H3,
    P,
    Button,
    ButtonText,
    Flex,
    ImageContainer,
    BGGray, Section,
    MockImageSquare,
    MockImageCircle,
    MockImagePortrait,
    MockImageLandscape,
    MockLogo,
    MockCartIcon
};