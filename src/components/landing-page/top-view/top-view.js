import React from 'react';
import style from './top-view.module.scss';
import { ReactComponent as BrandSVG } from '../../../images/other/brand.svg';
import { ReactComponent as PaprikaSVG } from '../../../images/other/paprika.svg';
import Content from "./content/content";
import YellowNoodles from "./yellow-noodles/yellow-noodles";
import RedNoodles from "./red-noodles/red-noodles";
import EggMeal from "./egg-meal/egg-meal";

const TopView = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <BrandSVG/>
            </div>
            <div className={style.eggMeal}>
                <EggMeal/>
            </div>
            <div className={style.redNoodles}>
                <RedNoodles/>
            </div>
            <div className={style.yellowNoodles}>
                <YellowNoodles/>
            </div>
            <div className={style.content}>
                <Content/>
            </div>
            <div className={style.paprika}>
                <PaprikaSVG/>
            </div>
        </div>
    );
};

export default TopView;