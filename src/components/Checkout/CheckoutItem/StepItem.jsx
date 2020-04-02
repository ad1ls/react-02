import React from 'react';
import s from './StepItem.module.scss';

const StepItem = (props) => {
    return (
        <div className={s.StepItem}>
            <svg className={`${s.MuiSvgIconRoot} ${s.MuiStepIconRoot} ${props.className}`} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="12"></circle>
                <text className={s.MuiStepIconText} x="12" y="16" text-anchor="middle">{props.number}</text>
             </svg>
            <span className={`${s.Checkout__wayBlock} ${props.textActive}`}>{props.text}</span>
        </div>
    )
}

export default StepItem;