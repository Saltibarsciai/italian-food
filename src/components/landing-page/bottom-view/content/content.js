import React from 'react';
import style from './content.module.scss'

const Content = () => {
    return (
        <div className={style.content}>
            <div>
                We believe that great food is a result of a constant learning,
                experimenting and hard work. We also believe, that anyone who
                works hard can cook great . We are here to help you to discover
                all secrets of Italian cuisine.
            </div>
            <br/>
            <div>
                We strongly emphasise the value of real Italian Cuisine and the
                excellent food products that distinguish, it is one of our cooking
                school’s main objectives in order to promote real Italian food.
            </div>
            <br/>
        </div>
    );
};

export default Content;