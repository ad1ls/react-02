import React from 'react';
import s from './InputArea.module.scss';

const InputArea = (props) => {
    return (
        <div className={s.InputArea}>
            <form action="" className={s.Form}>
                <input className={s.Form__input} type="text" name="" id="" placeholder=" "/>
                <label className={s.Form__label}>{props.name}</label>
            </form>
        </div>
    )
}

export default InputArea;