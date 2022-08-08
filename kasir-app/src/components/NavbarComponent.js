import React from "react";
import { Nav, NavDropdown, Navbar, Container } from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <Navbar variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home"><strong>Kasir App</strong></Navbar.Brand>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;