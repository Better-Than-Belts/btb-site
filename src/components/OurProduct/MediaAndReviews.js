import React from 'react';
import { Section } from '../../styles';
import MediaCard from './MediaCard';
import ReviewCard from './ReviewCard';
import styled from 'styled-components';
import { device } from '../../device.js';

const MediaAndReview = (props) => {
    return (
        <SectionContainer>
            <div className="row">
                <MediaCard {...props} />
                <MediaCard {...props} />
                <MediaCard {...props} />
                <ReviewCard {...props} />
                <ReviewCard {...props} />
            </div>
        </SectionContainer>
    );
};

// Styles
const SectionContainer = styled(Section)`
    padding-left: 150px;
    padding-right: 150px;

    @media ${device.tablet} {
        padding-left: 60px;
        padding-right: 60px;
    }
    @media ${device.mobile} {
        padding-left: 30px;
        padding-right: 30px;
    }
`

export default MediaAndReview;