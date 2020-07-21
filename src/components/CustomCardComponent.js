import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class CustomCard extends Component {

    constructor (props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, id) {
        this.props.history.push(`/tutorial/${id}`);
        this.props.scrollTop(event);
    }

    render() {
        return(
            <div key={this.props.details.id} className="card-container"
                onClick={(e)=>
                        { this.handleClick(e,this.props.details.id) } }
            >
                <h2 className="custom-card-title">{this.props.details.title}</h2>
                <div className="card-img-div">
                    <img src={this.props.details.image} className="custom-card-img" height="100%" width="100%" alt={this.props.details.title} />
                </div>
                <div className="badge-container">
                    <span className={this.props.details.badgeClasses}>{this.props.details.difficuilty}</span>
                </div>
                <div className="description-div">
                    <h4>{this.props.details.description}</h4>
                </div>
            </div>
        );
    }
}

export default withRouter(CustomCard);