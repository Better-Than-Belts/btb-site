import React from 'react';
import styled from 'styled-components';
import facebookIcon from '../../images/Facebook.svg';
import instagramIcon from '../../images/Instagram.svg';
import twitterIcon from '../../images/Twitter.svg';
import youtubeIcon from '../../images/Youtube.svg';
import { P } from '../../styles';
import { device } from '../../device';


const SocialMedia = () => {
    return (
        <div className="col-xs-12 col-sm-8 col-md-12 col-lg-4">
            <SocialMediaContainer>
                <FacebookIcon target="blank_" href="https://www.facebook.com/betterthanbelts/" />
                <InstagramIcon target="blank_" href="https://www.instagram.com/betterthanbelts/" />
                <TwitterIcon target="blank_" href="https://twitter.com/betterthanbelts" />
                <YoutubeIcon target="blank_" href="https://www.youtube.com/channel/UCN348SBTsDhtthoYibc1XEA" />
            </SocialMediaContainer>
            <CopyrightText style={{ color: "#F9F9FE" }}>© 2020, Better Than Belts</CopyrightText>
        </div>
    )
}

// Styles

// Icons
const SocialMediaContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    margin: 15px 0px 25px 20px;
    @media (max-width: 992px) {
        justify-content: flex-start;
    }
    @media ${device.tablet} {
        margin: 15px 0px 25px 0px;
    }
`;
const IconImage = styled.img`
    padding: 10px;
    @media (max-width: 992px) {
        margin-right: 25px;
}
`;

const YoutubeIcon = styled(IconImage)`
    content: url(${ youtubeIcon});
`
const FacebookIcon = styled(IconImage)`
    content: url(${ facebookIcon});
`
const InstagramIcon = styled(IconImage)`
    content: url(${ instagramIcon});
`
const TwitterIcon = styled(IconImage)`
    content: url(${ twitterIcon});
`

const CopyrightText = styled(P)`
    margin-left: 20px;
    @media ${ device.tablet} {
        margin-left: 0px;
    }
`;

export default SocialMedia;