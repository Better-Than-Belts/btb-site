import React from 'react';
import { BGGray, Section } from '../../styles';
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