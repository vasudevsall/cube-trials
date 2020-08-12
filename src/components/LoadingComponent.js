import React from 'react';

export const Loader = (props) => {
    return(
        <>
            <div className="loader-overlay">
                <div className="loader-container">
                    <div className="holder">
                        <div className="box"></div>
                    </div>
                    <div className="holder">
                        <div className="box"></div>
                    </div>
                    <div className="holder">
                        <div className="box"></div>
                    </div>
                </div>
                <div className="loader-text">
                    Loading...
                </div>
            </div>
        </>
    );
}