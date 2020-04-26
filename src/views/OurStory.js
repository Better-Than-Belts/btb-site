import React from 'react';
import OurStoryHero from '../components/OurStory/OurStoryHero';
import OurBackground from '../components/OurStory/OurBackground';
import OurStoryFeatures from '../components/OurStory/Features';
import PrismicPage from '../prismic/PrismicPage';

class OurStory extends React.Component{
    static pageType = 'our_story';
    
    render() {
        
        return (
            <div>
                <OurStoryHero {...this.props.doc.data} />
                <OurBackground {...this.props.doc.data} />
                <OurStoryFeatures {...this.props.doc.data} />
            </div>
        );
    }
};


export default PrismicPage(OurStory);