import React from 'react';
import styled from 'styled-components';
import { Flex, P, H4 } from '../../styles';
import StarIcon from '../../images/CoralStar.svg';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../device';
import { RichText } from 'prismic-reactjs';

const CustomerReviewsHome = (props) => {
    return (
        <Carousel prevIcon={false} nextIcon={false} interval={1500} indicators={false}>
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
    max-width: 300px;
    margin: 0 auto;
    padding-bottom: 10px;
    justify-content: space-evenly;
    @media ${device.tablet} {
        max-width: 400px;
    }
    @media (max-width: 500px) {
        max-width: 100%;
    }
`;

const Star = styled.img`
    content: url(${StarIcon});
    width: 50px;
    margin: 10px;
    padding: 0;
    @media ${device.mobile} {
        width: 40px;
    }
`;


const TextCenter = styled.div`
    padding-top: 100px;
    width: 75%;
    text-align: center;
    color: #F9F9FE;
    margin: auto;
    @media ${device.tablet} {
        padding-top: 0px;
        width: 100%;
    }
`;

const ReviewText = styled(P)`
    color: #F9F9FE;
    padding-top: 10px;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    @media ${device.tablet} {
        padding-top: 10px;
        font-size: 16px;
        line-height: 24px;
    }
`

const ReviewName = styled(H4)`
    color: #F9F9FE;
    font-size: 24px;
`

export default CustomerReviewsHome;