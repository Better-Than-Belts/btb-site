import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from '../views/Home';
import PDP from '../views/PDP';
import PLP from '../views/PLP';
import OurStory from '../views/OurStory';
import OurProduct from '../views/OurProduct';
import FAQ from '../views/FAQ';
import Blogs from '../views/Blogs';
import Blog from '../components/Blog/Blog';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Cart from '../views/Cart';
import TopBanner from './Banner/TopBanner';
import BottomBanner from './Banner/BottomBanner';

const PageContainer = (props) => {
    const shopifyClient = props.client;
    const prismicCtx = props.prismicCtx;

    return (
        <div>
            <Router>
                <ScrollToTop />
                <TopBanner {...props} />
                <Nav {...props} />
                <Route path="/"
                    exact={true}
                    render={() =>
                        <Home {...props} />
                    } />
                <Route path="/shop/search/:query"
                    exact={true}
                    render={(props) =>
                        <PLP {...props} query={props.match.params.query} client={shopifyClient} />
                    } />
                <Route path="/shop"
                    exact={true}
                    render={(props) =>
                        <PLP {...props} client={shopifyClient} />
                    } />
                <Route path="/shop/:id"
                    exact={true}
                    render={(props) =>
                        <PDP {...props} id={props.match.params.id} client={shopifyClient} prismicCtx={prismicCtx} />
                    } />
                <Route path="/why-suspenders"
                    exact={true}
                    render={() =>
                        <OurProduct {...props} />
                    } />
                <Route path="/our-story"
                    exact={true}
                    render={() =>
                        <OurStory {...props} />
                    } />
                <Route path="/blog"
                    exact={true}
                    render={() =>
                        <Blogs prismicCtx={prismicCtx} />
                    } />
                <Route path="/blog/:id"
                    exact={true}
                    render={(props) =>
                        <Blog id={props.match.params.id} prismicCtx={prismicCtx} />
                    } />
                <Route path="/faq"
                    exact={true}
                    render={() =>
                        <FAQ {...props} />
                    } />
                <Route path="/cart"
                    exact={true}
                    render={() =>
                        <Cart client={shopifyClient} prismicCtx={prismicCtx} />
                    } />
                <Footer {...props} />
                <BottomBanner {...props} />
            </Router>
        </div>
    )
};

export default PageContainer;