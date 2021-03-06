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

    toggleNav(event,onlyCollapse = false) {
        if(this.state.isNavOpen && onlyCollapse) {
            this.setState({
                isNavOpen: false
            })
        } else if(!onlyCollapse) {
            this.setState({
                isNavOpen: !this.state.isNavOpen
            });
        }
    }

    render() {
        return(
            <>
                <Navbar className="bg-dark" fixed="top" dark expand="md">
                    <div className="container">
                        <NavbarToggler className="mr-2" onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto nav-brand-header" href="/">
                            <img src={process.env.PUBLIC_URL + '/images/CubeTute.png'} height="60" alt="Cube Trials" /> Cube Trials
                        </NavbarBrand>
                        <Collapse isOpen = {this.state.isNavOpen} navbar>
                            <Nav navbar className = "ml-auto mr-4">
                                <NavItem className='mr-4'>
                                    <NavLink
                                        className="nav-link"
                                        onClick={(e) => {this.toggleNav(e, true)}}
                                        to="/home"
                                    >
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem className='mr-4'>
                                    <NavLink
                                        exact
                                        className="nav-link"
                                        onClick={(e) => {this.toggleNav(e, true)}}
                                        to="/tutorial"
                                    >
                                        <span className="fa fa-graduation-cap fa-lg"></span> Tutorials
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        className="nav-link"
                                        onClick={(e) => {this.toggleNav(e, true)}}
                                        to="/contact"
                                    >
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