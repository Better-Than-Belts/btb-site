import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { H1, P, InputButton, Input } from '../../styles';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Newsletter = (props) => {
    return (
        <div className="col-xs-12 col-lg-6">
            <JoinTitle>Join the community.</JoinTitle>
            <P style={{ color: "#F9F9FE" }}>Stay in the loop with Better Than Belts and get 10% off!</P>
            <div class="input-group mb-3" style={EmailGroup}>
                <Input type="email" class="form-control" placeholder="Email" aria-label="user-email" aria-describedby="user-email" />
                <div class="input-group-append">
                    <InputButton class="btn btn-email" type="button">
                        <FontAwesomeIcon icon={faArrowRight} color="black" />
                    </InputButton>
                </div>
            </div>
        </div>
    )
}

// Styles

const JoinTitle = styled(H1)`
    font-size: 36px;
    color: #F9F9FE;
`

const EmailGroup = {
    height: "70px",
    width: "100%",
    "padding-top": "20px"
}

export default Newsletter;