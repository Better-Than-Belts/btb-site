import React from 'react';
import styled from 'styled-components';
import { P2, P } from '../../styles';
import { RichText } from 'prismic-reactjs';

const MediaCard = (props) => {
    var truncateDesc = RichText.asText(props.description);

    if (truncateDesc.length > 100) {
        truncateDesc = truncateDesc.substring(0, 100) + "...";
    }

    return (
        <MediaContainer className="col-xs-12 col-md-4" href={props.link.url}>
            <Box>
                <MediaImageContainer>
                    <MediaImage src={props.image.url} />
                </MediaImageContainer>
                <MediaHandle>
                    @{RichText.asText(props.handle)}
                </MediaHandle>
                <MediaDescription>
                    {truncateDesc}
                </MediaDescription>
            </Box>
        </MediaContainer>
    );
};

// Styles
const MediaImageContainer = styled.div`
    padding: 20px
`;

const MediaImage = styled.div`
    background-image: url(${props => props.src});
    height: 300px;
    width: auto;
    background-size: cover;
`;

const Box = styled.div`
    border: none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    background-color: #FFFFFF;
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
`

const MediaContainer = styled.a`
    margin-top: 20px;
    margin-bottom: 20px;
    text-decoration: none;
    height: 100%;

    &:hover {
        text-decoration: none;
    }
`

const MediaHandle = styled(P2)`
    padding: 10px 20px;
`

const MediaDescription = styled(P)`
    padding: 0 20px 40px 20px;
    color: #0C1527;
`

export default MediaCard;
