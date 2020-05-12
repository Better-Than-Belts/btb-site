import React from 'react';
import { BGWhite, Section, H2 } from '../../styles';
import MediaCard from './MediaCard';
import ReviewCard from './ReviewCard';
import styled from 'styled-components';
import { device } from '../../device.js';
import { RichText } from 'prismic-reactjs';

const MediaAndReview = (props) => {
    return (
        <BGWhite>
            <SectionContainer>
                <Title>What people are saying</Title>
                <div className="row">
                    {props.instagram_posts.map((item, index) => {
                        return (
                            <MediaCard {...item} />
                        )
                    })}
                    <ReviewCard customerReview={RichText.asText(props.review_1_text)} customerName={RichText.asText(props.review_1_name)} stars={props.review_1_stars} />
                    <ReviewCard customerReview={RichText.asText(props.review_2_text)} customerName={RichText.asText(props.review_2_name)} stars={props.review_2_stars} />
                </div>
            </SectionContainer>
        </BGWhite>
    );
};

// Styles
const SectionContainer = styled(Section)`
    padding-top: 50px;
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