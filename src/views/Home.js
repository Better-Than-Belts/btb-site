import React from 'react';
import Hero from '../components/Home/Hero';
import PLPPreview from '../components/Home/PLPPreview';
import OurStoryPreview from '../components/Home/OurStoryPreview';
import ProductInformation from '../components/Home/ProductInformation';
import CustomerReviews from '../components/Home/CustomerReviews';
import AsSeenIn from '../components/Home/AsSeenIn';
import ReadyToShop from '../components/Home/ReadyToShop';
import PrismicPage from '../prismic/PrismicPage';

class Home extends React.Component{
    static pageType = 'homepage';
    
    render() {
        return (
        <div>
            <Hero {...this.props.doc.data}/>
            <PLPPreview {...this.props.doc.data}/>
            <OurStoryPreview {...this.props.doc.data}/>
            <ProductInformation {...this.props.doc.data}/>
            <AsSeenIn {...this.props.doc.data}/>
            <CustomerReviews {...this.props.doc.data}/>
            <ReadyToShop {...this.props.doc.data}/>
        </div>
        );
    }
};


export default PrismicPage(Home);