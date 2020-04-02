import React from 'react';
import s from './InputArea.module.scss';

const InputArea = (props) => {
    return (
        <div className={s.InputArea}>
            <form action="">
                <label><input type="text" name="" id=""/>First Name</label>
            </form>
        </div>
    )
}

export default InputArea;