import React from 'react';
import styled from 'styled-components';
import { Flex, P, H4 } from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../device';

const CustomerReviewsHome = (props) => {
    return (
        <TextCenter>
            <Stars>
                <Star icon='star' />
                <Star icon='star' />
                <Star icon='star' />
                <Star icon='star' />
            </Stars>
            <ReviewText>“{props.customerReview}”</ReviewText>
            <ReviewName>- {props.customerName}</ReviewName>
        </TextCenter>
    );
};

// Styles
const Stars = styled(Flex)`
    max-width: 200px;
    margin: 0 auto;
    padding-bottom: 10px;
`;

const Star = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: #FDC16E;
`;

const TextCenter = styled.div`
    width: 75%;
    text-align: center;
    color: #F9F9FE;
    margin: auto;
`;

const ReviewText = styled(P)`
    color: #F9F9FE;
    font-size: 40px;
    line-height: 140%;
    padding-top: 40px;
    @media ${device.tablet} {
        padding-top: 10px;
    }
`

const ReviewName = styled(H4)`
    color: #F9F9FE;
    font-size: 40px;
`

export default CustomerReviewsHome;