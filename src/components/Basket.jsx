import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import {
  removeFromCart,
  clearCart,
  addToCart,
} from "../redux/slices/cartSlice";

import "../css/Basket.css";
import { Link } from "react-router";

function Cart() {
  // CART
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div id="basket">
      <ul>
        {cart.items[0] ? (
          cart.items.map((item) => (
            <li key={item.id}>
              <div className="basket-product-name">
                <div>
                  <img src={item.image} alt="" />
                </div>
                <span>{item.title}</span>
              </div>
              <div className="basket-product-infos">
                <span className="basket-product-price">
                  {item.quantity > 0 ? (
                    <FaMinus
                      className="icon"
                      onClick={() => {
                        dispatch(removeFromCart(item));
                      }}
                    />
                  ) : (
                    <FaTrash
                      className="icon"
                      onClick={() => {
                        dispatch(removeFromCart(item));
                      }}
                    />
                  )}
                  <FaPlus
                    className="icon"
                    onClick={() => {
                      dispatch(addToCart(item));
                    }}
                  />
                  {item.price} x {item.quantity}
                </span>
                <span className="basket-product-total-price">
                  ${(Number(item.price) * Number(item.quantity)).toFixed(2)}
                </span>
              </div>
            </li>
          ))
        ) : (
          <span className="cart-is-empty">Your cart is empty</span>
        )}
      </ul>
      {cart.items[0] && (
        <div>
          <div className="cart-total">
            <p>
              Number of products: <span>{cart.totalQuantity}</span>
            </p>
            <p>
              Total amount: <span>${cart.totalPrice.toFixed(2)}</span>
            </p>
          </div>
          <Link to="/cart">
            <div className="go-to-cart">Go to Cart</div>{" "}
          </Link>
          <div
            className="clear-all-cart"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear All Cart
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
