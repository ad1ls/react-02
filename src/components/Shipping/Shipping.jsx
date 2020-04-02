import React from 'react';
import s from './Shipping.module.scss';
import InputArea from './InputArea/InputArea';


const Shipping = (props) => {
    return (
        <div className={s.Shipping}>
            <div className={s.Shipping__tittle}>
                 <h6>Shipping address</h6>
            </div>
           <InputArea/>
        </div>
    )
}

export default Shipping;