import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../views/Home';
import PDP from '../views/PDP';
import PLP from '../views/PLP';
import OurStory from '../views/OurStory';
import OurProduct from '../views/OurProduct';
import FAQ from '../views/FAQ';
import Footer from './Footer';

const PageContainer = (props) => {
    const shopifyClient = props.client;
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
                        <PLP {...props} />
                    } />
                <Route path="/shop/:id"
                    exact={true}
                    render={(props) =>
                        <PDP id={props.match.params.id} client={shopifyClient} />
                    } />
                <Route path="/our-product"
                    exact={true}
                    render={() =>
                        <OurProduct {...props.OurProduct} />
                    } />
                <Route path="/our-story"
                    exact={true}
                    render={() =>
                        <OurStory {...props.OurStory} />
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