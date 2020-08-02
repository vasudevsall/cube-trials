import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import {Stagger, Fade} from 'react-animation-components';
import NavExpandList from "../NavExpandComponent";

class TwoLookNav extends Component{

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
                <Link to='/tutorial/2' className='aside-head-link'>
                    <h5 className='ml-auto text-center d-inline-block'>Two Look OLL and PLL</h5>
                </Link>
                <aside className={`${(this.state.isNavOn)?'expand':''}`}>
                    <nav>
                        <ul style={{listStyle: 'none'}}>
                            <Stagger in>
                                <Fade in>
                                    <li>
                                        <NavLink onClick={this.handleClick}
                                                 className='nav-link'
                                                 to={`${this.props.url}/beginner-basics`}
                                        >
                                            Cube Basics
                                        </NavLink>
                                    </li>
                                </Fade>
                                <Fade in>
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
                                </Fade>
                                <Fade in>
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
                                                White Corners
                                            </NavLink>
                                        </NavExpandList>
                                    </li>
                                </Fade>
                                <Fade in>
                                    <li>
                                        <NavLink onClick={this.handleClick}
                                                 className='nav-link'
                                                 to={`${this.props.url}/second-layer`}
                                        >
                                            Solving Second Layer
                                        </NavLink>
                                    </li>
                                </Fade>
                                <Fade in>
                                    <li>
                                        <NavExpandList title='Two Look OLL'>
                                            <NavLink onClick={this.handleClick}
                                                     className='nav-link sub-link'
                                                     to={`${this.props.url}/last-layer`}
                                            >
                                                The Yellow Cross
                                            </NavLink>
                                            <NavLink onClick={this.handleClick}
                                                     className='nav-link sub-link'
                                                     to={`${this.props.url}/two-oll`}
                                            >
                                                Completing Top Layer
                                            </NavLink>
                                        </NavExpandList>
                                    </li>
                                </Fade>
                            </Stagger>
                        </ul>
                    </nav>
                </aside>
            </div>
        );
    }

}

export default TwoLookNav;