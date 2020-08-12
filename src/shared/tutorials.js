import React, {lazy} from 'react';

const Beginner = lazy(() => import('../components/Beginner Components/BeginnerComponent'));
const TwoLook = lazy(() => import('../components/TwoLook Components/TwoLookComponent'));


export const TUTORIALS = [
    {
        id: 1,
        title: 'Rubik\'s Cube',
        badgeClasses: 'badge badge-success',
        difficulty: 'Easy',
        description: 'The Beginners Method',
        image: 'images/cube-5.jpg',
        tuteComponent: <Beginner/>
    },
    {
        id: 2,
        title: 'Rubik\'s Cube',
        badgeClasses: 'badge badge-warning',
        difficulty: 'Medium',
        description: 'Two look OLL and PLL',
        image: 'images/cube-4.jpg',
        tuteComponent: <TwoLook/>
    }
];