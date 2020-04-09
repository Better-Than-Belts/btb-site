import React from 'react';
import OurStoryTitle from '../components/OurStory/Title';
import OurBackground from '../components/OurStory/OurBackground';
import OurStoryFeatures from '../components/OurStory/Features';

const OurStory = (props) => {
    return (
        <div>
            <OurStoryTitle {...props} />
            <OurBackground {...props} />
            <OurStoryFeatures {...props} />
        </div>
    )
}

export default OurStory;