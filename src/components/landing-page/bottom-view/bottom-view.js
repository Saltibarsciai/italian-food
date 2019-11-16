import React from 'react';
import style from './bottom-view.module.scss'
import { ReactComponent as OnionSVG } from '../../../images/other/onion.svg';
import MixMeal from "./mix-meal/mix-meal";
import WhiteNoodles from "./white-noodles/white-noodles";
import Content from "./content/content";

const BottomView = () => {
    return (
        <div className={style.container}>
            <div className={style.whiteNoodles}>
                <WhiteNoodles/>
            </div>
            <div className={style.content}>
                <Content/>
            </div>
            <div className={style.mixMeal}>
                <MixMeal/>
            </div>
            <div className={style.onion}>
                <OnionSVG/>
            </div>
        </div>
    );
};

export default BottomView;