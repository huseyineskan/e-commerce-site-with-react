import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import "../css/Cart.css";
import { useDispatch, useSelector } from "react-redux";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import {
  removeFromCart,
  clearCart,
  addToCart,
} from "../redux/slices/cartSlice";
import { Link } from "react-router";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div>
      <Breadcrumb title="Cart" />
      <div className="cart">
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
                      <td>
                        <span className="cart-product-name">
                          {product.title}
                        </span>
                        {product.quantity > 0 ? (
                          <FaMinus
                            className="icon"
                            onClick={() => {
                              dispatch(removeFromCart(product));
                            }}
                          />
                        ) : (
                          <FaTrash
                            className="icon"
                            onClick={() => {
                              dispatch(removeFromCart(product));
                            }}
                          />
                        )}

                        <span className="cart-st-label">
                          {product.quantity}
                        </span>
                        <FaPlus
                          className="icon"
                          onClick={() => {
                            dispatch(addToCart(product));
                          }}
                        />
                      </td>
                      <td>
                        $
                        {(
                          Number(product.price) * Number(product.quantity)
                        ).toFixed(2)}
                      </td>
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
            <div className="cart-buttons">
              <button
                className="clear-all-produts-btn"
                onClick={() => dispatch(clearCart())}
              >
                Clear all products
              </button>
              <Link to="/payment">
                <button className="go-to-checkout-btn">Go to Checkout</button>
              </Link>
            </div>
          </>
        ) : (
          <span className="cart-is-empty">Your cart is empty</span>
        )}
      </div>
    </div>
  );
}

export default Cart;
