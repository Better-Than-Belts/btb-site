import React from 'react';
import styled from 'styled-components';
import { Image, P2, P } from '../../styles';
import { RichText } from 'prismic-reactjs';

const MediaCard = (props) => {
    return (
        <MediaContainer className="col-xs-12 col-md-4" href={props.link.url}>
            <Box>
                <MediaImage src={props.image.url} />
                <MediaHandle>
                    @{RichText.asText(props.handle)}
                </MediaHandle>
                <MediaDescription>
                    {RichText.render(props.description)}
                </MediaDescription>
            </Box>
        </MediaContainer>
    );
};

// Styles

const MediaImage = styled(Image)`
    width: 100%;
    padding: 20px;
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
