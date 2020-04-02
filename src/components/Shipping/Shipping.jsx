import React from 'react';
import s from './Shipping.module.scss';
import InputArea from './InputArea/InputArea';


const Shipping = (props) => {
    return (
        <div className={s.Shipping}>
            <div className={s.Shipping__tittle}>
               Shipping address
            </div>
           <div className="Shipping__input">
             <InputArea name="First Name *"/>
             <InputArea name="Second Name *"/>
           </div>
        </div>
    )
}

export default Shipping;