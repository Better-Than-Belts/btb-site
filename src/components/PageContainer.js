import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../views/Home';
import PLP from '../views/PLP';
import OurStory from '../views/OurStory';
import OurProduct from '../views/OurProduct';
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
                        <PLP {...props} />
                    } />
                <Route path="/our-product"
                    exact={true}
                    render={() =>
                        <OurProduct {...props.OurProduct} />
                    } />
                <Route path="/our-story"
                    exact={true}
                    render={() =>
                        <OurStory {...props} />
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