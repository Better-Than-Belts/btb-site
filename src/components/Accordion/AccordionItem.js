import React from 'react';
import { P2, P } from '../../styles';
import './accordion.css';
import styled from 'styled-components';


class AccordionItem extends React.Component {

    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    onClick = () => {
        this.setState({
            open: !this.state.open
        });
    }

    render() {
        return (
            <AccordionItemWrapper>
                <AccordionItemTextWrapper onClick={this.onClick}>
                    <AccordionItemTitle color={this.props.color} className={"accordion" + (this.state.open ? " open" : "")} >
                        {this.props.title}
                    </AccordionItemTitle>
                </AccordionItemTextWrapper>
                <div className={"accordion-content" + (this.state.open ? " open" : "")}>
                    <AccordionItemTextWrapper>
                        <AccordionItemText color={this.props.color}>{this.props.children}</AccordionItemText>
                    </AccordionItemTextWrapper>
                </div>
            </AccordionItemWrapper>
        );
    }
};


// Styles
const AccordionItemWrapper = styled.div`
    margin-top: 10px;
    border-top: solid 1px #c4c4c4;
    cursor: pointer;
`;

const AccordionItemTextWrapper = styled.div`
    padding: 10px;
`;

const AccordionItemText = styled(P)`
    color: ${props => props.color};
`;

const AccordionItemTitle = styled(P2)`
    color: ${props => props.color};
`;

export default AccordionItem;
