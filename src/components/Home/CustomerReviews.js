import React from 'react';
import { Section, BGGray } from '../../styles';
import CustomerReviewShared from '../Shared/CustomerReviewShared';

const CustomerReviews = (props) => {
    return (
        <BGGray>
            <Section>
                <CustomerReviewShared {...props} />
            </Section>
        </BGGray>
    );
};

export default CustomerReviews;