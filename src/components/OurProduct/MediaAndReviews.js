import React from 'react';
import { BGWhite, Section, H2, AccentContainerFull, AccentImage } from '../../styles';
import MediaCard from './MediaCard';
import ReviewCard from './ReviewCard';
import styled from 'styled-components';
import { device } from '../../device.js';
import wave from '../../images/OurProduct/OurProduct-TealWave.svg';
import { RichText } from 'prismic-reactjs';

const MediaAndReview = (props) => {
    return (
        <BGWhite>
            <AccentContainerFull>
                <WaveLines src={wave} />
            </AccentContainerFull>
            <SectionContainer>
                <Title>What people are saying</Title>
                <div className="row">
                    {props.instagram_posts.map((item, index) => {
                        return (
                            <MediaCard {...item} />
                        )
                    })}
                </div>
                <div className="row">
                    <ReviewCard customerReview={RichText.asText(props.review_1_text)} customerName={RichText.asText(props.review_1_name)} stars={props.review_1_stars} />
                    <ReviewCard customerReview={RichText.asText(props.review_2_text)} customerName={RichText.asText(props.review_2_name)} stars={props.review_2_stars} />
                </div>
            </SectionContainer>
        </BGWhite>
    );
};

// Styles
const SectionContainer = styled(Section)`
    padding-top: 5px;
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

const WaveLines = styled(AccentImage)`
    width: 100%;
    top: 450px;
    @media ${device.tablet} {
        display: none;
    }
`;

export default MediaAndReview;