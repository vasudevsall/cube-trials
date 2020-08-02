import React from 'react';
import Beginner from '../components/Beginner Components/BeginnerComponent';
import TwoLook from "../components/TwoLook Components/TwoLookComponent";

export const TUTORIALS = [
    {
        id: 1,
        title: 'Rubik\'s Cube',
        badgeClasses: 'badge badge-success',
        difficulty: 'Easy',
        description: 'The Beginners Method',
        image: 'images/cube-5.jpg',
        tuteComponent: <Beginner />
    },
    {
        id: 2,
        title: 'Rubik\'s Cube',
        badgeClasses: 'badge badge-warning',
        difficulty: 'Medium',
        description: 'Two look OLL and PLL',
        image: 'images/cube-4.jpg',
        tuteComponent: <TwoLook />
    }
];