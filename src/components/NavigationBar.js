import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

export default class NavigationBar extends Component {
    
    state = { isOpen: false };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    
    render(){
        return(
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/login">Login Page</NavbarBrand>
                    <NavbarBrand href="/recipes">Recipes Board</NavbarBrand>
                    <NavbarBrand href="/search">Search for a Recipe</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/ralph127/WebApp">
                                    Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
        );
    }
}