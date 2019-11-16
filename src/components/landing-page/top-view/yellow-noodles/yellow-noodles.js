import React from 'react';
import logo from '../../../../images/meals/yellow-noodles.png'
import style from './yellow-noodles.module.scss'

const YellowNoodles = () => {
    return (
        <img className={style.image} src={logo} alt=""/>
    );
};

export default YellowNoodles;