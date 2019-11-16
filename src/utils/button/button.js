import React from 'react';
import PropTypes from 'prop-types';
import style from './button.module.scss'

const Button = props => {
    return (
        <div className={style.courseBtn}>
            {props.value}
        </div>
    );
};

Button.propTypes = {
    value: PropTypes.string,
};

export default Button;