import React from 'react';
import { RichText } from 'prismic-reactjs';
import { BGGray, Section } from '../../styles';
import CustomerReviewShared from '../Shared/CustomerReviewShared';

const CustomerReviews = (props) => {
    return (
        <BGGray>
            <Section>
                {props.customer_reviews.map((item, index) => { return <CustomerReviewShared {...item} /> })}
            </Section>
        </BGGray>
    );
};

export default CustomerReviews;