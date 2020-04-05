import React from 'react';
import styled from 'styled-components';
import { H2, Section, Flex, P, BGGray } from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RichText } from 'prismic-reactjs';

const CustomerReviews = (props) => {
    return (
        <BGGray>
            <Section>


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

const Star = styled(FontAwesomeIcon)`
    font-size: 30px;
    color: #C4C4C4;
`;

const TextCenter = styled.div`
    text-align: center;
`;

export default CustomerReviews;