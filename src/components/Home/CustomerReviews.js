import React from 'react';
import styled from 'styled-components';
import { H2, Section, Flex, P } from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomerReviews = (props) => {
    return (
        <Section>
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
        </Section>
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
    color: #C4C4C4;
`;

const TextCenter = styled.div`
    text-align: center;
`;

export default CustomerReviews;