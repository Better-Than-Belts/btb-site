import React from 'react';
import styled from 'styled-components';
import mockImage from '../../images/Square.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { H1 } from '../../styles';
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
            <div className="wave-div">
                <svg className="wave-svg" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.30485e-05 169V43.1364C93.8325 22.3956 237.797 -2.07504 410.647 0.140168C644.692 3.13858 769.925 45.4447 997.498 50.2886C1106.28 52.6047 1219.49 46.109 1440 3.72277V160.041" fill="#F9F9FE" />
                </svg>
            </div>
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
    height: 100vh;
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