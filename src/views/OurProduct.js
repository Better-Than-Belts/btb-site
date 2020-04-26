import React from 'react';
import WhySuspenders from '../components/OurProduct/WhySuspenders';
import WhyBTB from '../components/OurProduct/WhyBTB';
import MediaAndReview from '../components/OurProduct/MediaAndReviews';
import PrismicPage from '../prismic/PrismicPage';

class OurProduct extends React.Component{
    static pageType = 'our_product';
    
    render() {
        return (
            <div>
                <WhySuspenders {...this.props.docs.data} />
                <WhyBTB {...this.props.docs.data} />
                <MediaAndReview {...this.props.docs.data} />
            </div>
        );
    }
};


export default PrismicPage(OurProduct);
