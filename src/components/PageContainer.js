import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../views/Home';

const PageContainer = (props) => {
    return (
        <div>
            <Router>
                <Route path="/"
                    exact={true}
                    render={() =>
                        <Home {...props} />
                    } />
                <Route path="/shop"
                    exact={true}
                    render={() =>
                        <Home {...props} />
                    } />
                <Route path="/our-product"
                    exact={true}
                    render={() =>
                        <Home {...props} />
                    } />
                <Route path="/our-story"
                    exact={true}
                    render={() =>
                        <Home {...props} />
                    } />
                <Route path="/faq"
                    exact={true}
                    render={() =>
                        <Home {...props} />
                    } />
            </Router>
        </div>
    )
};

export default PageContainer;