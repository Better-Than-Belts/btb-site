import React from 'react';
import { BGWhite, Section, H2 } from '../../styles';
import MediaCard from './MediaCard';
import ReviewCard from './ReviewCard';
import styled from 'styled-components';
import { device } from '../../device.js';

const MediaAndReview = (props) => {
    return (
        <BGWhite>
            <SectionContainer>
                <Title>What people are saying</Title>
                <div className="row">
                    <MediaCard {...props} />
                    <MediaCard {...props} />
                    <MediaCard {...props} />
                    <ReviewCard {...props} customerReview={props.customerReview1} customerName={props.customerName1} />
                    <ReviewCard {...props} customerReview={props.customerReview2} customerName={props.customerName2} />
                </div>
            </SectionContainer>
        </BGWhite>
    );
};

// Styles
const SectionContainer = styled(Section)`

    @media ${device.tablet} {
        padding-left: 30px;
        padding-right: 30px;
    }
`

const Title = styled(H2)`
    padding-bottom: 40px;
    @media ${device.tablet} {
        line-height: 140%;
        padding-bottom: 10px;
    }
`;

export default MediaAndReview;