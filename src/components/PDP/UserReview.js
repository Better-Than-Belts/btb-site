import React from 'react';
import styled from 'styled-components';
import { Flex, P, Star } from '../../styles';

class UserReview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        }
    }
    
    render() {

        return (
            <div>
                <Flex>
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <Star />
                    <P>{this.props.name}</P>
                </Flex>
                <P>Life is too short to wear dull clothing - Wearing my new pair in the office today and getting great compliments. Dress them up or down - they are eye catching and fun to wear. Life is too short to wear dull clothing. Thanks guys!</P>
            </div>
        );
    }
    
};

export default UserReview;