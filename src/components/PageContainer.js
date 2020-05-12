import React from 'react';
import Nav from './Nav';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../views/Home';
import PDP from '../views/PDP';
import PLP from '../views/PLP';
import OurStory from '../views/OurStory';
import OurProduct from '../views/OurProduct';
import FAQ from '../views/FAQ';
import Blogs from '../views/Blogs';
import GenericPage from '../views/GenericPage';
import Blog from '../components/Blog/Blog';
import Footer from './Footer';
import TopBanner from './Banner/TopBanner';
import BottomBanner from './Banner/BottomBanner';


// TODO: have PageContainer load all Generic pages from Prismic using prismicCtx
const PageContainer = (props) => {
    const shopifyClient = props.client;
    const prismicCtx = props.prismicCtx;

    return (
        <div>
            <Router>
                <TopBanner {...props}/>
                <Nav {...props} />
                <Route path="/"
                    exact={true}
                    render={() =>
                        <Home {...props} />
                    } />
                <Switch>
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
                            <Blog id={props.match.params.id} prismicCtx={prismicCtx}/>
                        } />
                    <Route path="/faq"
                        exact={true}
                        render={() =>
                            <FAQ {...props} />
                        } />
                    <Route path="/:uid"
                        exact={true}
                        render={(props) =>
                            <GenericPage uid={props.match.params.uid} prismicCtx={prismicCtx} />
                        } />
                </Switch>
                <Footer {...props} />
                <BottomBanner {...props}/>
            </Router>
        </div>
    )
};

export default PageContainer;