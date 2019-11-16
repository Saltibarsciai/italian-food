import React from 'react';
import logo from '../../../../images/meals/white-noodles.png'
import style from './white-noodles.module.scss'

const WhiteNoodles = () => {
    return (
        <img className={style.image} src={logo} alt=""/>
    );
};

export default WhiteNoodles;