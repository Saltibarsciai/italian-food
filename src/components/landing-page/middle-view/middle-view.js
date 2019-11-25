import React from 'react';
import style from './middle-view.module.scss'
import { ReactComponent as BrandSVG } from '../../../images/other/brand.svg';
import { ReactComponent as SignatureSVG } from '../../../images/other/signature1.svg';
import Title from "./title/title";

const MiddleView = () => {
    return (
        <section className={style.container}>
            <article className={style.title}>
                <Title/>
            </article>
            <figure className={style.signature}>
                <SignatureSVG width={'100%'}/>
            </figure>
            <figure className={style.brand}>
                <BrandSVG/>
            </figure>
        </section>
    );
};

export default MiddleView;