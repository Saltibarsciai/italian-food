import React from 'react';
import PropTypes from 'prop-types';
import style from './mix-meal.module.scss'
import logo from '../../images/meals/mix-meal.png'

const MixMeal = props => {
    return (
        <img className={style.mixMeal} src={logo} alt=""/>
    );
};

MixMeal.propTypes = {

};

export default MixMeal;