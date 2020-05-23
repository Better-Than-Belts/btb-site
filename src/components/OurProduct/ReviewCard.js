import React from 'react';
import styled from 'styled-components';
import { device } from '../../device';
import { Flex, P, H4, Star } from '../../styles';
import yellowStar from '../../images/YellowStar.svg';

const ReviewCard = (props) => {
    var stars = []

    for (var i = 0; i < props.stars; i++) {
        stars.push(<ReviewStar />);
    }

    return (
        <SectionContainer className="col-xs-12 col-md-6">
            <Stars>
                {stars}
            </Stars>
            <ReviewText>“{props.customerReview}”</ReviewText>
            <ReviewName>- {props.customerName}</ReviewName>
        </SectionContainer>

    );
};

// Styles
const SectionContainer = styled.div`
    padding-top: 100px;
    padding-bottom: 0px;
    text-align: center;
    @media ${device.tablet} {
        padding-top: 50px;
    }
`;

const Stars = styled(Flex)`
    flex-wrap: nowrap;
    max-width: 300px;
    margin: 0 auto;
    padding-bottom: 10px;
    justify-content: space-evenly;
`;

const ReviewStar = styled(Star)`
    content: url(${yellowStar});
    padding: 0;
`;

const ReviewText = styled(P)`
    color: #0C1527;
    padding: 20px 20px 0px 20px;
    @media ${device.tablet} {
        padding-top: 10px;
    }
`

const ReviewName = styled(H4)`
    color: #004669;
`

export default ReviewCard;
