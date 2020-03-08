import React from 'react';
import { H3, P } from '../../styles';
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
                <AccordionItemTextWrapper onClick={this.onClick}><H3 className={"accordion" + (this.state.open ? " open": "")} >{this.props.title}</H3></AccordionItemTextWrapper>
                <div className={"accordion-content" + (this.state.open ? " open" : "")}>
                    <AccordionItemTextWrapper>
                        <P>{ this.props.children }</P>
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

export default AccordionItem;