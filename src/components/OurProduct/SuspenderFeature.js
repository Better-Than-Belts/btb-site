import React from 'react';
import styled from 'styled-components';
import { MockImageCircle, P, H3, ImageContainer, MockFeatureCircle } from '../../styles';

const SuspenderFeature = (props) => {
    return (
        <FeatureContainer className="col-6">
            <MockFeatureCircle className="col-4" />
            <FeatureText className="col-8">
                {props.featureText}
            </FeatureText>
        </FeatureContainer>
    );
};

// styles

const FeatureText = styled.div`
    font-family: "Poppins";
    font-size: 18px;
    line-height: 25px;
    padding-top: 40px;
    vertical-align: bottom;
    overflow: hidden;
`

const FeatureContainer = styled.div`
    display: inline-block;
    padding-top: 30px;
    padding-bottom: 30px;
`

export default SuspenderFeature;