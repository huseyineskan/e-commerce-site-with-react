import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import "../css/Payment.css";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

// Card information verification will be added.
function Payment() {
  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className="payment">
      <Breadcrumb title="Payment" />
      <div className="cart-div">
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus}
        />
        <form>
          <div className="row">
            <div className="col">
              <input
                type="tel"
                name="number"
                placeholder="Card Number"
                value={state.number}
                pattern="[\d| ]{16,22}"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="col">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={state.name}
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <input
                type="text"
                name="expiry"
                placeholder="Valid Thru"
                value={state.expiry}
                pattern="\d\d/\d\d"
                required
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
            <div className="col-6">
              <input
                type="number"
                name="cvc"
                required
                placeholder="CVC"
                value={state.cvc}
                maxLength={3}
                onChange={handleInputChange}
                onFocus={handleInputFocus}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Payment;
