import React from 'react';
import styled from 'styled-components';
import { RichText } from 'prismic-reactjs';
import { Wave, H1 } from '../../styles';
import { device } from '../../device';
import Arrow from '../../images/OurStoryArrow.svg';


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
                <HeroArrow />
            </HeroWrapper>
            <Wave />
        </HeroBG>
    );
};

// Styles
const HeroWrapper = styled.div`
    margin: auto;
    position: relative;
    width: 75%;
    padding: 10px;
    text-align: center;
    height: 645px;
    @media ${device.tablet} {
        height: 500px;
    }
`;

const HeroTitle = styled.div`
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const HeroArrow = styled.img`
    width: 50px;
    position: absolute;
    bottom: 0;
    content: url(${Arrow});
`;

export default Hero;