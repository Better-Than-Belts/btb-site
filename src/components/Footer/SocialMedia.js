import React from 'react';
import styled from 'styled-components';
import facebookIcon from '../../images/Facebook.png';
import instagramIcon from '../../images/Instagram.png';
import twitterIcon from '../../images/Twitter.png';
import youtubeIcon from '../../images/Youtube.png';
import { P } from '../../styles';
import { device } from '../../device';


const SocialMedia = (props) => {
    return (
        <div className="col-xs-12 col-md-12 col-lg-4">
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
    margin: 0px 10px 20px 0px;
    width: 60px;
    height: 60px;
    @media ${device.mobile} {
        width: 50px;
        height: 50px;
        margin: 20px 10px 20px 0px;
    }
`
const FacebookIcon = styled.img`
    content: url(${facebookIcon});
    margin: 0px 10px 20px 10px;
    width: 60px;
    height: 60px;
    @media ${device.mobile} {
        width: 50px;
        height: 50px;
        margin: 20px 10px 20px 10px;
    }
`
const InstagramIcon = styled.img`
    content: url(${instagramIcon});
    margin: 0px 10px 20px 10px;
    width: 60px;
    height: 60px;
    @media ${device.mobile} {
        width: 50px;
        height: 50px;
        margin: 20px 10px 20px 10px;
    }
`
const TwitterIcon = styled.img`
    content: url(${twitterIcon});
    margin: 0px 0px 20px 10px;
    width: 60px;
    height: 60px;
    @media ${device.mobile} {
        width: 50px;
        height: 50px;
        margin: 20px 0px 20px 10px;
    }
`

export default SocialMedia;