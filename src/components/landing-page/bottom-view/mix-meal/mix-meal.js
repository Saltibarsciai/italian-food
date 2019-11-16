import React from 'react';
import style from './mix-meal.module.scss'
import logo from '../../../../images/meals/mix-meal.png'

const MixMeal = props => {
    return (
        <img className={style.mixMeal} src={logo} alt=""/>
    );
};

export default MixMeal;