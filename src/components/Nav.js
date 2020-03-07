import React from 'react';
import { MockLogo, H3, MockCartIcon } from '../styles';
import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavRouter = (props) => {
    return (
        <>
            <Navbar style={navBG} expand="lg">
                <Link to={`/`}>
                    <Navbar.Brand>
                        <MockLogo />
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
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
                    <Nav className="ml-auto">
                        <Nav.Link><MockCartIcon /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </>

    )
}

export default NavRouter;

const navBG = {
    'background-color': '#E2E2E2',
    'padding': '0 150px',
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
