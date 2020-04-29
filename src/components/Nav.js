import React from 'react';
import { P, BGWhite } from '../styles';
import Logo from '../images/logo.svg';
import CartIcon from '../images/CartIcon.svg';
import SearchIcon from '../images/SearchIcon.svg';
import AccountIcon from '../images/AccountIcon.svg';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import PrismicPage from '../prismic/PrismicPage';

class NavRouter extends React.Component {
    static pageType = 'navbar';
    state = { width: 0 };

    updateScreenSize = () => {
        this.setState({ width: window.innerWidth });
    }

    componentDidMount() {
        this.updateScreenSize();
        window.addEventListener('resize', this.updateScreenSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateScreenSize);
    }

    render() {
        console.log(this.props);
        if (this.state.width > 768) {
            // desktop
            return (
                <BGWhite>
                    <Navbar style={navBG} expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Link to={`/`}>
                            <Navbar.Brand>
                                <BTBLogo />
                            </Navbar.Brand>
                        </Link>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <BTBNavLink to={`/shop`}>
                                    Shop
                                </BTBNavLink>
                                <BTBNavLink to={`/why-suspenders`}>
                                    Why Suspenders
                                </BTBNavLink>
                                <BTBNavLink to={`/our-story`}>
                                    Our Story
                                </BTBNavLink>
                                <BTBNavLink to={`/faq`}>
                                    FAQ
                                </BTBNavLink>
                            </Nav>
                        </Navbar.Collapse>
                        <Nav>
                            <Nav.Link><Search /></Nav.Link>
                            <Nav.Link><Account /></Nav.Link>
                            <Nav.Link><Cart /></Nav.Link>
                        </Nav>
                    </Navbar>
                </BGWhite>
            )
        } else {
            // mobile
            return (
                <>
                    <Navbar style={navBG} expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Link to={`/`}>
                            <Navbar.Brand>
                                <BTBLogo />
                            </Navbar.Brand>
                        </Link>
                        <Nav>
                            <Nav.Link><Cart /></Nav.Link>
                        </Nav>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <BTBNavLink to={`/shop`} style={navItem}>
                                    Shop
                                </BTBNavLink>
                                <BTBNavLink to={`/why-suspenders`} style={navItem}>
                                    Our Product
                                </BTBNavLink>
                                <BTBNavLink to={`/our-story`} style={navItem}>
                                    Our Story
                                </BTBNavLink>
                                <BTBNavLink to={`/faq`} style={navItem}>
                                    FAQ
                                </BTBNavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </>
            )
        }
    }
}

export default PrismicPage(NavRouter);

const navBG = {
    'margin-right': 'auto',
    'margin-left': 'auto',
    'max-width': '1100px',
    'padding-right': '20px',
    'padding-left': '20px',
    'backgroundColor': '#F9F9FE',
    'min-height': '90px',
};

const BTBNavLink = styled(NavLink)`
    font-family: "Libre Franklin", sans-serif;
    padding: 0 30px;
    color: #004669;
    font-weight: 800;
    font-size: 20px;
    line-height: 30px;
    text-decoration: none;

    &:hover, &.active {
        color: #004669;
        text-decoration: underline #E87964;
    }
`;

const navItem = {};

const BTBLogo = styled.img`
    content: url(${Logo});
    width: 200px;
`;

const Cart = styled.img`
    content: url(${CartIcon});
`;
const Account = styled.img`
    content: url(${AccountIcon});
`;
const Search = styled.img`
    content: url(${SearchIcon});
`;
