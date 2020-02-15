import styled from 'styled-components';
import mockImage from './images/Rectangle.png';
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
`;

const ButtonText = styled(H3)`
    margin: 0;
`;

const Flex = styled.div`
    display: flex;
    justify-content: space-between;
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

const MockImageSquare = styled.img`
    content:url(${mockImage});
    flex-shrink: 0;
    width: 100%;
`;

const MockImagePortrait = styled(MockImageSquare)`
    height: 600px;
    width: 400px;
`;

const MockImageLandscape = styled(MockImageSquare)`
    height: 400px;
    width: 600px;
`;

export { H1, H2, H3, P, Button, ButtonText, Flex, BGGray, Section, MockImageSquare, MockImagePortrait, MockImageLandscape };