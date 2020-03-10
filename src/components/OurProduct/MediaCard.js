import React from 'react';
import styled from 'styled-components';
import { MockMediaImage, H3, P } from '../../styles';

const MediaCard = (props) => {
    return (
        <div className="col-4">
            <MediaContainer>
                <MockMediaImage />
                <MediaHandle>
                    @Insta
                </MediaHandle>
                <MediaDescription>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem reprehenderit quas sapiente, voluptatum cum sunt?
                </MediaDescription>
            </MediaContainer>
        </div>
    );
};

// Styles

const MediaContainer = styled.div`
    margin: auto;
    border: solid;
`

const MediaHandle = styled(H3)`
    padding: 20px;
`

const MediaDescription = styled(P)`
    padding: 0 20px 20px 20px;
`

export default MediaCard;
