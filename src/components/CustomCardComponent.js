import React from 'react';

function CustomCard(props) {
    return(
        <div key={props.details.id} className="card-container">
            <h2 className="custom-card-title">{props.details.title}</h2>
            <div className="card-img-div">
                <img src={props.details.image} className="custom-card-img" height="100%" width="100%" alt={props.details.title} />
            </div>
            <div className="badge-container">
                <span className={props.details.badgeClasses}>{props.details.difficuilty}</span>
            </div>
            <div className="description-div">
                <h4>{props.details.description}</h4>
            </div>
        </div>
    );
}

export default CustomCard;