import React from 'react';
//import s from './Checkout.module.css';

const Checkout = () => {
    return (
        <div className="Checkout">

          <div className="Checkout__tittle">
               Checkout
          </div>

          <div className="Steps">
              <div className="First-item">
                  <span className="Checkout__way-block">Shipping address</span>
              </div>
              <span className="Line"></span>
              <div className="Second-item">
                  <span className="Checkout__way-block">Payment details</span>
              </div>
              <span className="Line"></span>
              <div className="Second-item">
                  <span className="Checkout__way-block">Review your order</span>
              </div>
          </div>
        </div>
    )
}

export default Checkout; 