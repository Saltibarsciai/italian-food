import React from 'react';
import style from './landing-page.module.scss'
import TopView from "./top-view/top-view";
import MiddleView from "./middle-view/middle-view";
import BottomView from "./bottom-view/bottom-view";

const LandingPage = () => {
    return (
        <div className={style.container}>
            <TopView/>
            <MiddleView/>
            <BottomView/>
        </div>
    );
};

export default LandingPage;