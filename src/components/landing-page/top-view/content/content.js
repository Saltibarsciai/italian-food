import React from 'react';
import style from './content.module.scss'
import {Button} from "../../../../utils";
import { ReactComponent as SignatureSVG } from '../../../../images/other/signature.svg';

const Content = () => {
    return (
        <div className={style.container}>
            <div className={style.title}>Short Italian cooking lessons</div>
            <div className={style.signature}>
                {/*<Signature/>*/}
                <SignatureSVG/>
            </div>
            <div className={style.button}>
                <Button value={'VIEW COURSES'} />
            </div>
        </div>
    );
};

export default Content;