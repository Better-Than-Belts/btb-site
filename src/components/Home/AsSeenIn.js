import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import { Wave, BGBlue, Section } from '../../styles';
import NewsAtNEU from '../../images/NewsAtNortheastern.svg';
import Kickstarter from '../../images/Kickstarter.svg';
import Lucid from '../../images/Lucid.svg';
import TheGlobe from '../../images/Globe.svg';
import ProjectHatch from '../../images/ProjectHatch.svg';
import CustomerReviewsHome from './CustomerReviews';

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

export default AsSeenIn;

