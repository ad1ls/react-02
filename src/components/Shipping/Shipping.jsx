import React from 'react';
import s from './Shipping.module.scss';

const Shipping = (props) => {
    return (
        <div className={s.Shipping}>
            <div className={s.Shipping_tittle}>
                 Shipping address
            </div>
        </div>
    )
}

export default Shipping;