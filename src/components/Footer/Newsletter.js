import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { P, InputButton, Input, H3 } from '../../styles';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { device } from '../../device';

const Newsletter = (props) => {
    return (
        <div className="col-xs-12 col-lg-6 col-md-8">
            <NewsletterTitle>Join the community.</NewsletterTitle>
            <JoinText>Stay in the loop with Better Than Belts and get 10% off!</JoinText>
            <div class="input-group mb-3" style={EmailGroup}>
                <Input type="email" class="form-control" placeholder="Email" aria-label="user-email" aria-describedby="user-email" />
                <div class="input-group-append">
                    <InputButton class="btn btn-email" type="button">
                        <FontAwesomeIcon icon={faArrowRight} color="#004669" />
                    </InputButton>
                </div>
            </div>
        </div>
    )
}

// Styles
const NewsletterTitle = styled(H3)`
    color: #F9F9FE;
    padding-bottom: 10px;
    @media ${device.tablet} {
        padding-bottom: 0px;
    }
`;

const JoinText = styled(P)`
    color: #F9F9FE;
    width: 90%;
`;

const EmailGroup = {
    height: "70px",
    width: "100%",
    "padding-top": "20px"
}

export default Newsletter;