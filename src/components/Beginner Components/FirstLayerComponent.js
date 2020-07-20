import React from 'react';
import Cube from '../CubeComponent';

export const FixCross = (props) => {
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <h2 className='col-12'>Solving First Layer</h2>
                    <p className='col-12'>
                        You have got all the weapons you require in your arsenal. But, what is the use
                         if you don't know when and how to use a weapon.
                        So, let's start implementing the knowledge we have gained so far.
                    </p>
                    <p className='col-12'>
                        Solving first layer, is divided into two parts:
                        <ol>
                            <li>
                                <strong>The White Cross:</strong> In this step we will make a cross,
                                 which is all four edge pieces around white center, with perfect alignment 
                                 with adjacent faces.
                            </li>
                            <li>
                                <strong>White corners:</strong> In this step, the white face is fully completed
                                 and bottom first layer is fully fixed.
                            </li>
                        </ol>
                    </p>
                    <p className='col-12'>
                        Come aboard, it gonna be a fun ride!
                    </p>
                </div>
                <div className='row'>
                    <h2 className='col-12'>The White Cross</h2>
                    <p className='col-12'>
                        Just don't get mislead by the name,
                        you can start solving by creating cross on any colored face. It's more like
                        a tradition to start solving with white face.
                    </p>
                    <p className='col-12'>
                        As I have said before, in the starting, all pieces other than the center pieces are
                         considered not solved. So, representing all the not solved pieces using grey color.
                         The initial unsolved cube can be represented as:
                    </p>
                </div>
            </div>
            <Cube cubeId="id0" 
                cubeClasses="cube"
                cubeTitle='front'
                colors={props.colors.filter((color) => color.id === 2)[0]}
            />
            <div className='container'>
                <div className='row'>
                    <p className='col-12'>
                        In the above example, you see white face at the bottom, which is good and helpful for 
                        solving middle and top layers of a cube while solving first layer, it is good for keeping
                        white face as the top face. So, in this section, from now on, we will see
                        see white face as the top face.
                    </p>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <h3 className='col-12'>Final Result of this step</h3>
                    <p className='col-12'>
                        What! already final result?
                    </p>
                    <p className='col-12'>
                        Actually yes, this step is very simple, so, with some goofing around, you can solve this yourself.
                        Also, I will suggest you to find your way to the final result, as this will help you to get
                        familiar with the cube, which will be very helpful in future steps.<br/>
                        This is your goal for the step:
                    </p>
                </div>
            </div>
            <Cube cubeId="id1" 
                cubeClasses="cube"
                cubeTitle='front'
                Cross = {true}
                colors={props.colors.filter((color) => color.id === 5)[0]}
            />
            <div className='container'>
                <div className='row'>
                    <p className='col-12'>
                        There is something very important to note in the above state of the cube. That is
                        along with the completed white face, all the pieces on the top "layer" are matched
                        correctly with the center of the respective face.
                    </p>
                </div>
            </div>
            <div className='container'>
                <div className='row'>
                    <h3 className='col-12'>

                    </h3>
                </div>
            </div>
        </>
    );
}