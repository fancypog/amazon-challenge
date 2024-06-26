import React from 'react';
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer';
import { useNavigate } from 'react-router-dom';



function Subtotal() {
  // Pull the basket content from the data layer
  const [{basket}, dispatch] = useStateValue();
  const navigate = useNavigate();



  return (
    <div className='subtotal'>
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
              <strong>{`${value}`}</strong>
            </p>
            <small className='subtotal__gift'>
              <input type="checkbox" />
                This ordercontains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
  </div>
  );
}

export default Subtotal;
