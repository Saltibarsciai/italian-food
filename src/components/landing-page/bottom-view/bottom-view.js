import React from 'react';
import style from './bottom-view.module.scss'
import { ReactComponent as OnionSVG } from '../../../images/other/onion.svg';
import MixMeal from "./mix-meal/mix-meal";
import WhiteNoodles from "./white-noodles/white-noodles";
import Content from "./content/content";

const BottomView = () => {
    return (
        <section className={style.container}>
            <figure className={style.whiteNoodles}>
                <WhiteNoodles/>
            </figure>
            <article className={style.content}>
                <Content/>
            </article>
            <figure className={style.mixMeal}>
                <MixMeal/>
            </figure>
            <figure className={style.onion}>
                <OnionSVG/>
            </figure>
        </section>
    );
};

export default BottomView;