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
                <div className="row align-items-center">
                    <LogoContainer className="col-xs-12 col-md-6">
                        <Img src={NewsAtNEU} />
                    </LogoContainer>
                    <LogoContainer className="col-xs-12 col-md-6">
                        <Img src={Kickstarter} />
                    </LogoContainer>
                    <LogoContainer className="col-xs-12 col-md-2">
                        <Img src={Lucid} />
                    </LogoContainer>
                    <LogoContainer className="col-xs-12 col-md-5">
                        <Img src={TheGlobe} />
                    </LogoContainer>
                    <LogoContainer classname="col-xs-12 col-md-5">
                        <Img src={ProjectHatch} />
                    </LogoContainer>
                </div>
            </AsSeenInContainer>
            <Wave />
        </BGBlue>
    );
};

// Styles

const AsSeenInContainer = styled(Section)`
    align-items: center;
    @media ${device.mobile} {
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

