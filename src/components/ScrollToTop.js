import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
        // if (this.props.location !== prevProps.location) {
        //     window.scrollTo(0, 0);
        // }
        let cur = this.props.location.pathname.split("/");
        let prev = prevProps.location.pathname.split("/");
        if (this.props.location.pathname !== prevProps.location.pathname &&
            (cur[1] !== prev[1])) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return null;
    }
}

export default withRouter(ScrollToTop)