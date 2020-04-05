import React from 'react';
import styled from 'styled-components';
import { H3, Section, Flex, P } from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RichText } from 'prismic-reactjs';

const CustomerReviewShared = (props) => {
    var stars = []
    console.log(props);

    for (var i = 0; i < props.customer_rating; i++) {
        stars.push(<Star icon='star' />);
    }

    return (
        <TextCenter>
            <Stars>
                {stars}
            </Stars>
            <P>“{RichText.asText(props.customer_review)}”</P>
            <H3>- {RichText.asText(props.customer_name)}</H3>
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
    color: #C4C4C4;
`;

const TextCenter = styled.div`
    text-align: center;
`;

export default CustomerReviewShared;