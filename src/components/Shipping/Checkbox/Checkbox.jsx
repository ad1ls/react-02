import React from 'react';
import s from './Checkbox.module.scss';

const Checkbox = (props) => {
    return (
        <div className={s.Checkbox}>
                <input type="checkbox" className={s.customCheckbox} id="happy" name="happy" value="yes"/>
                <label for="happy">Use this address for payment details</label>
        </div>
    )
}

export default Checkbox;