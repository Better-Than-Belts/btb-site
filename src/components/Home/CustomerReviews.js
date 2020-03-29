import React from 'react';
import styled from 'styled-components';
import { H2, Section, Flex, P, BGGray, Star } from '../../styles';
import { Carousel } from 'react-bootstrap';

const CustomerReviews = (props) => {
    return (
        <BGGray>
            <Section>
                <Carousel>
                    <TextCenter>
                        <Stars>
                            <Star icon='star' />
                            <Star icon='star' />
                            <Star icon='star' />
                            <Star icon='star' />
                        </Stars>
                        <P>“{props.customerReview}”</P>
                        <H2>- {props.customerName}</H2>
                    </TextCenter>
                    <TextCenter>
                        <Stars>
                            <Star icon='star' />
                            <Star icon='star' />
                            <Star icon='star' />
                            <Star icon='star' />
                        </Stars>
                        <P>“{props.customerReview}”</P>
                        <H2>- {props.customerName}</H2>
                    </TextCenter>
                </Carousel>
            </Section>
        </BGGray>
    );
};

// Styles
const Stars = styled(Flex)`
    max-width: 200px;
    margin: 0 auto;
    padding-bottom: 10px;
`;

const TextCenter = styled(Carousel.Item)`
    text-align: center;
`;

export default CustomerReviews;