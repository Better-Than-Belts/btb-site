import React from 'react';
import styled from 'styled-components';
import mockImage from '../../images/Square.png';
import { RichText } from 'prismic-reactjs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { H1 } from '../../styles';

const Hero = (props) => {

    const HeroBG = styled.div`
        background-image: url(${props.hero.url});
        background-position: center;
        background-size: cover;
    `;
    return (
        <HeroBG>
            <HeroWrapper>
                <HeroTitle>
                    <H1>{RichText.asText(props.hero_text)}</H1>
                </HeroTitle>
                <HeroArrow icon='angle-double-down' />
            </HeroWrapper>
        </HeroBG>
    );
};

// Styles
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

export default Hero;