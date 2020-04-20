import React from 'react';
import { MockLogo, H3, MockCartIcon, BGWhite } from '../styles';
import Logo from '../images/logo.svg';
import CartIcon from '../images/CartIcon.svg';
import SearchIcon from '../images/SearchIcon.svg';
import AccountIcon from '../images/AccountIcon.svg';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class NavRouter extends React.Component {
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
                                <NavLink to={`/shop`} style={navItem}>
                                    <NavText>Shop</NavText>
                                </NavLink>
                                <NavLink to={`/why-suspenders`} style={navItem}>
                                    <NavText>Why Suspenders</NavText>
                                </NavLink>
                                <NavLink to={`/our-story`} style={navItem}>
                                    <NavText>Our Story</NavText>
                                </NavLink>
                                <NavLink to={`/faq`} style={navItem}>
                                    <NavText>FAQ</NavText>
                                </NavLink>
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
                                <NavLink to={`/shop`} style={navItem}>
                                    <NavText>Shop</NavText>
                                </NavLink>
                                <NavLink to={`/our-product`} style={navItem}>
                                    <NavText>Our Product</NavText>
                                </NavLink>
                                <NavLink to={`/our-story`} style={navItem}>
                                    <NavText>Our Story</NavText>
                                </NavLink>
                                <NavLink to={`/faq`} style={navItem}>
                                    <NavText>FAQ</NavText>
                                </NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </>
            )
        }
    }
}

export default NavRouter;

const navBG = {
    'margin-right': 'auto',
    'margin-left': 'auto',
    'max-width': '1100px',
    'padding-right': '20px',
    'padding-left': '20px',
    'backgroundColor': '#F9F9FE',
    'min-height': '90px',
};

const navItem = {
    'padding': '0 30px'
};

const NavText = styled(H3)`
    color: #004669;
    font-weight: 800;
    font-size: 20px;
    line-height: 30px;
`;

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
