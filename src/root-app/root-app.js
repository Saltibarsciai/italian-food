import React from 'react';
import style from './root-app.module.scss'
import LandingPage from "../components/landing-page";


const RootApp = () => {
    return (
        <div className={style.app}>
            <LandingPage/>
        </div>
    );
};

export default RootApp;