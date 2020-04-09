import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import CustomerReviewShared from '../Shared/CustomerReviewShared';
import { BGBlue, Flex, TextCenter, Section, ImageContainer } from '../../styles';
import NewsAtNEU from '../../images/NewsAtNortheastern.png';
import Kickstarter from '../../images/Kickstarter.png';
import Lucid from '../../images/Lucid.png';
import TheGlobe from '../../images/Globe.png';
import ProjectHatch from '../../images/ProjectHatch.png';

const AsSeenIn = (props) => {
    return (
        <BGBlue>
            <ReviewsContainer>
                <CustomerReviewShared {...props} />
            </ReviewsContainer>
            <AsSeenInContainer>
                <div className="row">
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
            <div className="wave-div">
                <svg className="wave-svg" viewBox="0 0 1440 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.30485e-05 169V43.1364C93.8325 22.3956 237.797 -2.07504 410.647 0.140168C644.692 3.13858 769.925 45.4447 997.498 50.2886C1106.28 52.6047 1219.49 46.109 1440 3.72277V160.041" fill="#F9F9FE" />
                </svg>
            </div>
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

