import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import "../css/Checkout.css";

function Checkout() {
  return (
    <div>
      <Breadcrumb title="Checkout" />
      <div className="checkout">
        <h3>Your Shopping Cart</h3>
        <table>
          <tr>
            <th>Product</th>
            <th className="table-price">Price</th>
          </tr>
          <tr>
            <td>Product 1</td>
            <td>$30</td>
          </tr>
          <tr>
            <td>Product 2</td>
            <td>$60</td>
          </tr>
        </table>
        <div className="checkout-buttons">
          <button className="clear-all-produts-btn">Clear all products</button>
          <button className="payment-btn">Payment</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
