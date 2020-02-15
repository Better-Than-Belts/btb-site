import React from 'react';
import styled from 'styled-components';
import mockImage from '../../images/Square.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { H1 } from '../../styles';

const H1White = styled(H1)`
    color: white;
`;

const HeroBG = styled.div`
    background-image: url(https://media.giphy.com/media/KWn5YHuCzP3FK/source.gif);
    background-position: center;
    background-size: 100% 100%;
`;
const HeroWrapper = styled.div`
    margin: auto;
    position: relative;
    width: 50%;
    padding: 10px;
    text-align: center;
    height: 100vh;
`;

const HeroTitle = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

`;

const HeroArrow = styled(FontAwesomeIcon)`
    position: absolute;
    bottom: 5%;
`;

const Hero = () => {
    return (
        <HeroBG>
        <HeroWrapper>
            <HeroTitle>
                <H1White>Live Better.</H1White>
            </HeroTitle>
            <HeroArrow icon='angle-double-down' />
        </HeroWrapper>
        </HeroBG>
    );
};


export default Hero;