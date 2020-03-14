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
        const stars = []

        for (var i = 0; i < this.props.score; i++) {
            stars.push(<UserReviewStar>★</UserReviewStar>);
          }

        return (
            <div>
                <UserReviewFlex>
                    {stars}
                    <UserReviewName>{this.props.name}</UserReviewName>
                </UserReviewFlex>
                <P>{this.props.body}</P>
            </div>
        );
    }
    
};

export default UserReview;

const UserReviewStar = styled.span`
    padding-top: 10px;
    font-size: 14px;
`;

const UserReviewName = styled(P)`
    padding-left: 10px;
`;

const UserReviewFlex = styled(Flex)`
    justify-content: start;
`;