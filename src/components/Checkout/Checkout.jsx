import React from 'react';
import s from './Checkout.module.scss';
import StepItem from './CheckoutItem/StepItem';

const Checkout = () => {
    return (
        <div className={s.Checkout}>
            <div className={s.Checkout__tittle}>
                Checkout
            </div>
            <div className={s.Steps}>
                <StepItem number='1' text='Shipping address'/>
                <div className={`${s.MuiStepConnectorRoot} ${s.MuiStepConnectorHorizontal} ${s.MuiDisabled}`}><span className={`${s.MuiStepConnectorLine} ${s.MuiStepConnectorLineHorizontal}`}></span></div>
                <StepItem number='2' text='Payment details'/>
                <div className={`${s.MuiStepConnectorRoot} ${s.MuiStepConnectorHorizontal} ${s.MuiDisabled}`}><span className={`${s.MuiStepConnectorLine} ${s.MuiStepConnectorLineHorizontal}`}></span></div>
                <StepItem number='3' text='Review your order'/>
          </div>
        </div>
    )
}

export default Checkout; 