import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import "../css/Checkout.css";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slices/cartSlice";

function Checkout() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Breadcrumb title="Checkout" />
      <div className="checkout">
        {cart.items[0] ? (
          <>
            <caption>Your Shopping Cart</caption>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th className="table-price">Price</th>
                </tr>
              </thead>
              <tbody>
                {cart.items[0] &&
                  cart.items.map((product, key) => (
                    <tr key={product.id}>
                      <td>{product.title}</td>
                      <td>${product.price}</td>
                    </tr>
                  ))}
              </tbody>
              <tfoot>
                <tr>
                  <td>TOTAL PRICE</td>
                  <td>${cart.totalPrice.toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
            <div className="checkout-buttons">
              <button
                className="clear-all-produts-btn"
                onClick={() => dispatch(clearCart())}
              >
                Clear all products
              </button>
              <button className="payment-btn">Payment</button>
            </div>
          </>
        ) : (
          <span className="cart-is-empty">Your cart is empty</span>
        )}
      </div>
    </div>
  );
}

export default Checkout;
