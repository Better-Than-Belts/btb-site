import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import { AccentImage, AccentContainerFull, Wave, BGBlue, Section } from '../../styles';
import NewsAtNEU from '../../images/NewsAtNortheastern.svg';
import Kickstarter from '../../images/Kickstarter.svg';
import Lucid from '../../images/Lucid.svg';
import TheGlobe from '../../images/Globe.svg';
import ProjectHatch from '../../images/ProjectHatch.svg';
import CustomerReviewsHome from './CustomerReviewsHome';
import circle from '../../images/Home/Home-YellowCircle1.svg';

const AsSeenIn = (props) => {
    return (
        <BGBlue>
            <ReviewsContainer>
                <CustomerReviewsHome {...props} />
            </ReviewsContainer>
            <AsSeenInContainer>
                <LogoContainer >
                    <Img src={NewsAtNEU} />
                </LogoContainer>
                <LogoContainer >
                    <Img src={Kickstarter} />
                </LogoContainer>
                <LogoContainer >
                    <Img src={ProjectHatch} />
                </LogoContainer>
                <LogoContainer>
                    <Img src={TheGlobe} />
                </LogoContainer>
                <LogoContainer >
                    <Img src={Lucid} />
                </LogoContainer>
            </AsSeenInContainer>
            <AccentContainerFull>
                <Circle src={circle} />
            </AccentContainerFull>
            <Wave />
        </BGBlue>
    );
};

// Styles

const AsSeenInContainer = styled(Section)`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    @media ${device.tablet} {
        display: block;
        padding-top: 30px;
    }
`;

const ReviewsContainer = styled(Section)`
    padding-bottom: 0px;
    padding-top: 30px;
    @media ${device.tablet} {
        padding-top: 100px;

    }
`

const LogoContainer = styled.div`
    text-align: center;
`;

const Img = styled.img`
    padding: 30px 0;
    max-width: 90%;
    @media ${device.mobile} {
        padding: 30px 0;
        max-width: 80%;
    }
`;

const Circle = styled(AccentImage)`
    left: 80%;
    bottom: 20px;
    width: 150px;
    @media (max-width: 950px) {
        width: 130px;
    }
    @media ${device.tablet} {
        width: 100px;
    }
    @media (max-width: 500px) {
        left: 70%;
    }
    @media (max-width: 340px) {
        display: none;
    }
`;

export default AsSeenIn;

