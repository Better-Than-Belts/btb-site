import React from 'react';
import styled from 'styled-components';
import { MockMediaImage, H3, P } from '../../styles';

const MediaCard = (props) => {
    return (
        <MediaContainer className="col-xs-12 col-md-4">
            <Box>
                <MockMediaImage />
                <MediaHandle>
                    @Insta
                </MediaHandle>
                <MediaDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit quas sapiente, voluptatum cum sunt?
                </MediaDescription>
            </Box>
        </MediaContainer>
    );
};

// Styles

const Box = styled.div`
    border: none;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.15);
    background-color: #FFFFFF;
`

const MediaContainer = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
`

const MediaHandle = styled(H3)`
    padding: 10px 20px;
    font-weight: 800;
`

const MediaDescription = styled(P)`
    padding: 0 20px 40px 20px;
    color: #0C1527;
`

export default MediaCard;
