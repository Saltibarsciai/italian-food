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
        <section className={style.container}>
            <figure className={style.header}>
                <BrandSVG/>
            </figure>
            <figure className={style.eggMeal}>
                <EggMeal/>
            </figure>
            <figure className={style.redNoodles}>
                <RedNoodles/>
            </figure>
            <figure className={style.yellowNoodles}>
                <YellowNoodles/>
            </figure>
            <div className={style.content}>
                <Content/>
            </div>
            <figure className={style.paprika}>
                <PaprikaSVG/>
            </figure>
        </section>
    );
};

export default TopView;