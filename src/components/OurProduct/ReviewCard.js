import React from 'react';
import styled from 'styled-components';
import CustomerReviewShared from '../Shared/CustomerReviewShared';
import { Section } from '../../styles';

const ReviewCard = (props) => {
    return (
        <SectionContainer>
            <CustomerReviewShared className="col-xs-12 col-md-6" {...props} />
        </SectionContainer>

    );
};

// Styles
const SectionContainer = styled(Section)`
    padding-top: 100px;
    padding-bottom: 0px;
`;

export default ReviewCard;