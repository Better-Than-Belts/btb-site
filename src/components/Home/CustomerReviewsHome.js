import React from 'react';
import styled from 'styled-components';
import { Flex, P, H4 } from '../../styles';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../device';
import { RichText } from 'prismic-reactjs';

const CustomerReviewsHome = (props) => {
    return (
        <Carousel prevIcon={false} nextIcon={false} interval={props.customer_reviews.length * 1000} indicators={false}>
        {
            props.customer_reviews.map((item, index) => {
                var stars = []

                for (var i = 0; i < item.customer_rating; i++) {
                    stars.push(<Star icon='star' />);
                }
                return (
                    <Carousel.Item>
                        <TextCenter>
                            <Stars>
                                {stars}
                            </Stars>
                            <ReviewText>“{RichText.asText(item.customer_review)}”</ReviewText>
                            <ReviewName>- {RichText.asText(item.customer_name)}</ReviewName>
                        </TextCenter>
                    </Carousel.Item>
                );
            })
        }
    </Carousel>
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
    color: #E87964;
`;

const TextCenter = styled.div`
    width: 75%;
    text-align: center;
    color: #F9F9FE;
    margin: auto;
    height: 300px;
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