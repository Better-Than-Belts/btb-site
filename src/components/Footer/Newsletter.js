import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { P, InputButton, Input, H3 } from '../../styles';
import { device } from '../../device';
import { RichText } from 'prismic-reactjs';

class Newsletter extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            first: '',
            last: '',
            email: '',
            loading: false,
            submitted: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.createCustomer = this.createCustomer.bind(this);
    }

    handleChange(event) {
        if(event.target.name) {
            let stateObj = {};
            stateObj[event.target.name] = event.target.value
            this.setState(stateObj);
        }
    }

    createCustomer = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        
        var myHeaders = new Headers();
        myHeaders.append("X-Shopify-Access-Token", process.env.REACT_APP_SHOPIFY_ACCESS_TOKEN);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"customer":{"first_name":this.state.first,"last_name":this.state.last,"email":this.state.email, "accepts_marketing":true, "verified_email":true,"addresses":[]}});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://cors-anywhere.herokuapp.com/https://better-than-belts.myshopify.com/admin/api/2020-04/customers.json", requestOptions)
        .then(response => response.text())
        .then(() => this.setState({loading: false, submitted: true}));
    }

    render() {
        return (
            <div className="col-xs-12 col-lg-6 col-md-8">
                <NewsletterTitle>{RichText.asText(this.props.newsletter_title)}</NewsletterTitle>
                <JoinText>{RichText.asText(this.props.newsletter_text)}</JoinText>
                <div class="input-group mb-3">
                    <Input type="text" class="form-control" placeholder="First Name" name="first" value={this.state.first} onChange={this.handleChange}/>
                </div>
                <div class="input-group">
                    <Input type="text" class="form-control" placeholder="Last Name" name="last" value={this.state.last} onChange={this.handleChange}/>
                </div>
                <div class="input-group mb-3" style={EmailGroup}>
                    <Input type="email" class="form-control" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange}/>
                    <div class="input-group-append">
                        <NewsLetterSubmit className={(this.state.loading ? "loading": this.state.submitted ? "submitted" : "") + " btn btn-email"} type="button" onClick={this.createCustomer}>
                            <FontAwesomeIcon icon={(this.state.submitted ? "check" : "arrow-right")} color={this.state.submitted || this.state.loading ? "white" : "#004669"} />
                        </NewsLetterSubmit>
                    </div>
                </div>
            </div>
        )
    }
}
// Styles
const NewsLetterSubmit = styled(InputButton)`
    &.loading {
        background-color: #d3d3d3;
        pointer-events:none
    }

    &.submitted {
        background-color: #5cb85c;
        pointer-events:none
    }

`;

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
    paddingTop: "20px"
}

export default Newsletter;