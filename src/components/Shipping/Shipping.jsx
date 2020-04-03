import React from 'react';
import s from './Shipping.module.scss';
import InputArea from './InputArea/InputArea';
import Checkbox from './Checkbox/Checkbox';


const Shipping = (props) => {
    return (
        <div className={s.Shipping}>
            <div className={s.Shipping__tittle}>
                 Shipping address
            </div>
           <div className={s.Shipping__input}>
                <div className={s.Shipping__inputFirst}><InputArea name="First Name *"/></div>
                <div className={s.Shipping__inputLast}><InputArea name="Last Name *"/></div>
                <div className={s.Shipping__inputLine1}><InputArea name="Address line 1 *"/></div>
                <div className={s.Shipping__inputLine2}><InputArea name="Address line 2"/></div>
                <div className={s.Shipping__inputCity}><InputArea name="City *"/></div>
                <div className={s.Shipping__inputState}><InputArea name="State/Province/Region *"/></div>
                <div className={s.Shipping__inputZip}><InputArea name="Zip / Postal code *"/></div>
                <div className={s.Shipping__inputCountry}><InputArea name="Country *"/></div>
                <div className={s.Shipping__inputCheckbox}><Checkbox/></div>
           </div>
        </div>
    )
}

export default Shipping;