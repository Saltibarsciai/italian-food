import React from 'react';
import style from './middle-view.module.scss'
import { ReactComponent as BrandSVG } from '../../../images/other/brand.svg';
import { ReactComponent as SignatureSVG } from '../../../images/other/signature1.svg';
import Title from "./title/title";

const MiddleView = () => {
    return (
        <div className={style.container}>
            <div className={style.title}>
                <Title/>
            </div>
            <div className={style.signature}>
                <SignatureSVG width={'100%'}/>
            </div>
            <div className={style.brand}>
                <BrandSVG/>
            </div>
        </div>
    );
};

export default MiddleView;