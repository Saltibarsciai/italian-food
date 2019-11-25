import React from 'react';
import logo from '../../../../images/meals/egg-meal.png'
import style from './egg-meal.module.scss'

const EggMeal = () => {
    return (
        <img className={style.image} src={logo} alt="meal with eggs"/>
    );
};

export default EggMeal;