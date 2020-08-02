import React, {Component} from "react";

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

export default NavExpandList;