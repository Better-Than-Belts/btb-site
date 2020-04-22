import React from 'react';
import OurStoryHero from '../components/OurStory/OurStoryHero';
import OurBackground from '../components/OurStory/OurBackground';
import OurStoryFeatures from '../components/OurStory/Features';

const OurStory = (props) => {
    return (
        <div>
            <OurStoryHero {...props} />
            <OurBackground {...props} />
            <OurStoryFeatures {...props} />
        </div>
    )
}

export default OurStory;