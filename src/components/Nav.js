import React from 'react';
import { MockLogo, H3, MockCartIcon } from '../styles';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class NavRouter extends React.Component {
    state = { width: 0 };

    updateScreenSize = () => {
        this.setState({ width: window.innerWidth });
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateScreenSize);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateScreenSize);
    }

    render() {
        if (this.state.width > 768) {
            // desktop
            return (
                <>
                    <Navbar style={navBG} expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Link to={`/`}>
                            <Navbar.Brand>
                                <MockLogo />
                            </Navbar.Brand>
                        </Link>
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
                        <Nav>
                            <Nav.Link><MockCartIcon /></Nav.Link>
                        </Nav>
                    </Navbar>
                </>
            )
        } else {
            // mobile
            return (
                <>
                    <Navbar style={navBG} expand="lg">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Link to={`/`}>
                            <Navbar.Brand>
                                <MockLogo />
                            </Navbar.Brand>
                        </Link>
                        <Nav>
                            <Nav.Link><MockCartIcon /></Nav.Link>
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
    'backgroundColor': '#E2E2E2',
};

const navItem = {
    'padding': '0 30px'
};

const NavText = styled(H3)`
    color: black;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
`;
