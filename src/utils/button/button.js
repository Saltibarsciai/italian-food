import React from 'react';
import PropTypes from 'prop-types';
import style from './button.module.scss'

const Button = props => {
    return (
        <button className={style.courseBtn}>
            {props.value}
        </button>
    );
};

Button.propTypes = {
    value: PropTypes.string,
};

export default Button;