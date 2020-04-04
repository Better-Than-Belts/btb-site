import React from 'react';
import OurProductTitle from '../components/OurProduct/Title';
import WhySuspenders from '../components/OurProduct/WhySuspenders';
import WhyBTB from '../components/OurProduct/WhyBTB';
import MediaAndReview from '../components/OurProduct/MediaAndReviews';

const OurProduct = (props) => {
    return (
        <div>
            <OurProductTitle {...props} />
            <WhySuspenders {...props} />
            <WhyBTB {...props} />
            <MediaAndReview {...props} />
        </div>
    );
};

export default OurProduct;
