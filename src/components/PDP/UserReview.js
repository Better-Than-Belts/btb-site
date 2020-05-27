import React from 'react';
import styled from 'styled-components';
import { Flex, P } from '../../styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UserReview extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selected: false
        }
    }
    
    render() {
        var stars = []

        for (var i = 0; i < this.props.rating; i++) {
            stars.push(<FontAwesomeIcon icon="star" />);
          }

        return (
            <div>
                <UserReviewFlex>
                    <Stars>
                        {stars}
                    </Stars>
                    <UserReviewName>{this.props.reviewer.name}</UserReviewName>
                </UserReviewFlex>
                <ReviewBody>{this.props.body}</ReviewBody>
            </div>
        );
    }
    
};

export default UserReview;

const Stars = styled.div`
    color: #FDC16E;
`;

const UserReviewStar = styled.span`
    padding-top: 10px;
    font-size: 14px;
`;

const UserReviewName = styled(P)`
    padding-left: 10px;
    line-height: normal;
    margin-top: 5px;
`;

const UserReviewFlex = styled(Flex)`
    justify-content: start;
    padding-bottom: 0;
`;

const ReviewBody = styled(P)`
    padding-top: 0;
    margin-top: 0;
    padding-bottom: 20px;

`;