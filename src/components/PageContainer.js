import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../views/Home';
import FAQ from '../views/FAQ';
import Footer from './Footer';

const PageContainer = (props) => {
    return (
        <div>
            <Router>
                <Nav {...props} />
                <Route path="/"
                    exact={true}
                    render={() =>
                        <Home {...props.Home} />
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
                        <FAQ {...props.FAQ} />
                    } />
                <Footer {...props} />
            </Router>
        </div>
    )
};

export default PageContainer;