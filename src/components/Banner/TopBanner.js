import React from 'react';
import styled from 'styled-components';
import PrismicPage from '../../prismic/PrismicPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { P } from '../../styles';
import { RichText } from 'prismic-reactjs';

class TopBanner extends React.Component{
    static pageType = 'top_banner';
    
    constructor() {
        super();
        this.state = {display: true}
    }
    
    clearBanner = () => {
        this.setState({display: false});
    }
    
    render() {
        return (
            this.state.display ?
            <BannerContainer bgColor={this.props.doc.data.background_color} sticky={this.props.doc.data.sticky}>
                <ClearButton icon='times' onClick={this.clearBanner} color={this.props.doc.data.text_color}/>
                <BannerContent color={this.props.doc.data.text_color}>
                    {RichText.asText(this.props.doc.data.content)}
                </BannerContent>
            </BannerContainer> : <div></div>
        );
    }
};

export default PrismicPage(TopBanner);

// Styles
const BannerContainer = styled.div`
    padding: 5px;
    text-align: center;
    background-color: ${props => props.bgColor};
    top: 0;
    z-index: 1;
    position: ${props => props.sticky ? 'sticky' : 'relative'};
`;

const BannerContent = styled(P)`
    color: ${props => props.color};
    font-size: 16px;
`;

const ClearButton = styled(FontAwesomeIcon)`
    font-size: 18px;
    color: ${props => props.color};
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
`;


