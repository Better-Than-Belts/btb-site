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
                <WhySuspenders {...this.props.doc.data} />
                <WhyBTB {...this.props.doc.data} />
                <MediaAndReview {...this.props.doc.data} />
            </div>
        );
    }
};


export default PrismicPage(OurProduct);
