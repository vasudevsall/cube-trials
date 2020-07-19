import React from 'react';
import Beginner from '../components/Beginner Components/BeginnerComponent';

export const TUTORIALS = [
    {
        id: 1,
        title: 'Rubik\'s Cube',
        badgeClasses: 'badge badge-success',
        difficuilty: 'Easy',
        description: 'The Beginners Method',
        image: 'images/cube-5.jpg',
        tuteComponent: <Beginner />
    },
    {
        id: 2,
        title: 'Rubik\'s Cube',
        badgeClasses: 'badge badge-warning',
        difficuilty: 'Medium',
        description: 'Two look OLL and PLL',
        image: 'images/cube-4.jpg'
    }
];