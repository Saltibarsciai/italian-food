import React from 'react';
import logo from '../../images/meals/red-noodles.png'
import style from './red-noodles.module.scss'

const RedNoodles = () => {
    return (
        <img className={style.image} src={logo} alt=""/>
    );
};

export default RedNoodles;