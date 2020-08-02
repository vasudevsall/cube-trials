import React from 'react';
import {Link} from 'react-router-dom';

export const TwoOLL = (props) => {
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <h2>Two Look OLL</h2>
                        <hr/>
                    </div>
                    <div className='col-12'>
                        <p>
                            In this step, we complete the top yellow layer of the cube without caring if the
                            side colors match or not.
                        </p>
                        <p>
                            First thing, to do in Two Look OLL is to make a
                            <Link to={`${props.url}/last-layer`}> yellow cross </Link>
                            on the top layer, which being a beginner method's step has been skipped here,
                            but you can always go back for a refresher.
                        </p>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12'>
                        <h3>Advanced Moves</h3>
                        <p>
                            Before going for the algorithms we have to learn some new moves. Let's have a look.
                        </p>
                    </div>
                    <div className='col-12 mt-3'>
                        <h5>Two layers at a time</h5>
                        <p>
                            Turning of two layers at once is marked by lowercase letter of the corresponding face:
                            <strong> f, u, r, b, l, d </strong>. For example, <strong>r</strong> means
                            rotation of right two layers clockwise, and <strong>r'</strong> means rotation of right
                            two layers counter-clockwise
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}