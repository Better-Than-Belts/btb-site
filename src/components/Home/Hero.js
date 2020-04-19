import React from 'react';
import styled from 'styled-components';
import mockImage from '../../images/Square.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Wave, H1 } from '../../styles';
import { device } from '../../device';


const Hero = (props) => {

    return (
        <HeroBG>
            <HeroWrapper>
                <HeroTitle>
                    <HeroText>{props.heroText}</HeroText>
                </HeroTitle>
                <HeroArrow icon='angle-double-down' />
            </HeroWrapper>
            <Wave />
        </HeroBG>
    );
};

// Styles
const HeroBG = styled.div`
    background-image: url(${mockImage});
    background-position: center;
    background-size: 100% 100%;
`;

const HeroWrapper = styled.div`
    margin: auto;
    position: relative;
    width: 75%;
    padding: 10px;
    text-align: center;
    height: 850px;
    @media ${device.tablet} {
        height: 700px;
    }
`;

const HeroTitle = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const HeroText = styled(H1)`
    @media ${device.mobile} {
        font-size: 50px;
    }
`;

const HeroArrow = styled(FontAwesomeIcon)`
    position: absolute;
    bottom: 5%;
`;

export default Hero;