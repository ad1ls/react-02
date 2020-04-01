import React from 'react';
import s from './Checkout.module.scss';

const Checkout = () => {
    return (
        <div className={s.Checkout}>
          <div className={s.Wrapper}>
            <div className={s.Checkout__tittle}>
                Checkout
            </div>

            <div className={s.Steps}>
                <div className={s.FirstItem}>
                    <svg className={`${s.MuiSvgIconRoot} ${s.MuiStepIconRoot} ${s.MuiStepIconActive}`} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="12"></circle>
                        <text className={s.MuiStepIconText} x="12" y="16" text-anchor="middle">1</text>
                    </svg>
                    <span className={s.Checkout__wayBlock}>Shipping address</span>
                </div>
                <span className={`${s.MuiStepConnectorLine} ${s.MuiStepConnectorLineHorizontal}`}></span>
                <div className={s.SecondItem}>
                    <svg className={`${s.MuiSvgIconRoot} ${s.MuiStepIconRoot} ${s.MuiStepIconActive}`} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="12"></circle>
                        <text className={s.MuiStepIconText} x="12" y="16" text-anchor="middle">2</text>
                    </svg>
                    <span className={s.Checkout__wayBlock}>Payment details</span>
                </div>
                <span class="MuiStepConnector-line MuiStepConnector-lineHorizontal"></span>
                <div className={s.ThirdItem}>
                     <svg className={`${s.MuiSvgIconRoot} ${s.MuiStepIconRoot} ${s.MuiStepIconActive}`} focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="12"></circle>
                        <text className={s.MuiStepIconText} x="12" y="16" text-anchor="middle">3</text>
                    </svg>
                    <span className={s.Checkout__wayBlock}>Review your order</span>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Checkout; 