import React, { Component } from 'react';
import {Navbar, NavItem, Nav, NavbarToggler, Collapse, NavbarBrand} from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return(
            <>
                <Navbar className="bg-dark" fixed="top" dark expand="md">
                    <div className="container">
                        <NavbarToggler className="mr-2" onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="../images/CubeTute.png" height="60" alt="Cube Trials" />
                        </NavbarBrand>
                        <Collapse isOpen = {this.state.isNavOpen} navbar>
                            <Nav navbar className = "ml-auto">
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem> 
                                    <NavLink exact className="nav-link" to="/tutorial">
                                        <span className="fa fa-graduation-cap fa-lg"></span> Tutorials
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/contact">
                                        <span className="fa fa-phone-square fa-lg"></span> Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </>
        );
    }
}

export default Header;