import React from 'react';
import { Section } from '../../styles';
import MediaCard from './MediaCard';
import ReviewCard from './ReviewCard';

const MediaAndReview = (props) => {
    return (
        <Section className="row">
            <MediaCard />
            <MediaCard />
            <MediaCard />
            <ReviewCard />
            <ReviewCard />
        </Section>
    );
};

export default MediaAndReview;