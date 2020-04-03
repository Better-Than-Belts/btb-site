import React from 'react';
import styled from 'styled-components';
import facebookIcon from '../../images/Facebook.png';
import instagramIcon from '../../images/Instagram.png';
import twitterIcon from '../../images/Twitter.png';
import youtubeIcon from '../../images/Youtube.png';
import { P } from '../../styles';


const SocialMedia = (props) => {
    return (
        <div className="col-xs-12 col-md-6 col-lg-3">
            <YoutubeIcon />
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <P style={{ color: "#F9F9FE" }}>© 2020, Better Than Belts</P>
        </div>
    )
}

// Styles

// Icons
const YoutubeIcon = styled.img`
    content: url(${youtubeIcon});
    padding: 5px;
    width: 50px;
    height: 50px;
`
const FacebookIcon = styled.img`
    content: url(${facebookIcon});
    padding: 5px;
    width: 50px;
    height: 50px;
`
const InstagramIcon = styled.img`
    content: url(${instagramIcon});
    padding: 5px;
    width: 50px;
    height: 50px;
`
const TwitterIcon = styled.img`
    content: url(${twitterIcon});
    padding: 5px;
    width: 50px;
    height: 50px;
`

export default SocialMedia;