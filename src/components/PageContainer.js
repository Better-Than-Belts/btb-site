import React from 'react';
import Nav from '../components/Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../views/Home';
import PDP from '../views/PDP';
import FAQ from '../views/FAQ';

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
                <Route path="/shop/:id"
                exact={true}
                render={() =>
                    <PDP {...props.PDP} />
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
            </Router>
        </div>
    )
};

export default PageContainer;