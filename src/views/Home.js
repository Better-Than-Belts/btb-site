import React from 'react';
import Hero from '../components/Home/Hero';
import PLPPreview from '../components/Home/PLPPreview';
import OurStoryPreview from '../components/Home/OurStoryPreview';
import ProductInformation from '../components/Home/ProductInformation';
import ConsciousManufacturing from '../components/Home/ConsciousManufacturing';
import AsSeenIn from '../components/Home/AsSeenIn';
import ReadyToShop from '../components/Home/ReadyToShop';


const Home = (props) => {
    return (
        <div>
            <Hero {...props} />
            <PLPPreview {...props} />
            <OurStoryPreview {...props} />
            <ProductInformation {...props} />
            <ConsciousManufacturing {...props} />
            <AsSeenIn {...props} />
            <ReadyToShop {...props} />
        </div>
    );
};


export default Home;