import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavExpandList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isExpanded: false
        }

        this.handleListClick = this.handleListClick.bind(this);
    }

    handleListClick(event) {
        this.setState({
            isExpanded: !this.state.isExpanded
        });
        event.preventDefault();
    }

    render() {
        return(
            <>
                <button className={`nav-link begin-nav-link ${(this.state.isExpanded)? 'expanded':'not-expanded'}`}
                    onClick={this.handleListClick}
                >
                    {this.props.title}
                </button>
                <div>
                    {this.props.children}
                </div>
            </>
        );
    }
}

class BeginnerNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isNavOn: false
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, scroll = true) {
        this.setState({
            isNavOn: !this.state.isNavOn
        });
        if(scroll)
            this.props.scrollTop(event);
    }

    render() {

        return(
            <div className={`aside-div ${this.props.className} ${(this.state.isNavOn)?'aside-div-expand':''}`}>
                <button className='beginner-nav-btn navbar-toggler' onClick={(e) => {this.handleClick(e, false)}}>
                    <span className='fa fa-bars'></span>
                </button>
                <aside className={`${(this.state.isNavOn)?'expand':''}`}>
                    <h5>Beginner's Method</h5>
                    <nav>
                        <ul style={{listStyle: 'none'}}>
                            <li>
                                <NavLink onClick={this.handleClick}
                                    className='nav-link' 
                                    to={`${this.props.url}/beginner-basics`}
                                >
                                    Cube Basics
                                </NavLink>
                            </li>
                            <li>
                                <NavExpandList title='Cube Basic Moves'>
                                    <NavLink onClick={this.handleClick}
                                        className='nav-link sub-link' 
                                        to={`${this.props.url}/basic-moves`}
                                    >
                                        Forward Moves
                                    </NavLink>
                                    <NavLink onClick={this.handleClick}
                                        className='nav-link sub-link'
                                        to={`${this.props.url}/basic-moves-prime`}
                                    >
                                        Prime Moves
                                    </NavLink>
                                    <NavLink onClick={this.handleClick}
                                        className='nav-link sub-link' 
                                        to={`${this.props.url}/basic-moves-example`}
                                    >
                                        Example Algorithms
                                    </NavLink>
                                </NavExpandList>
                            </li>
                            <li>
                                <NavExpandList title='Solving First Layer'>
                                    <NavLink onClick={this.handleClick}
                                        className = 'nav-link sub-link'
                                        to={`${this.props.url}/first-layer`}
                                    >
                                        The White Cross
                                    </NavLink>
                                    <NavLink onClick={this.handleClick}
                                        className = 'nav-link sub-link'
                                        to={`${this.props.url}/first-layer-corners`}
                                    >
                                        The White Corners
                                    </NavLink>
                                </NavExpandList>
                            </li>
                            <li>
                                <NavLink onClick={this.handleClick}
                                    className='nav-link' 
                                    to={`${this.props.url}/second-layer`}
                                >
                                    Solving Second Layer
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </aside>
            </div>
        );
    }

}

export default BeginnerNav;