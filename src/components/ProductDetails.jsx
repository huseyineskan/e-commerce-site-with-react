import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import "../css/Product.css";
import { getSingleProduct } from "../redux/slices/productSlice";

function ProductDetails() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getSingleProduct(id));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="single-product">
      <div className="product-img">
        <img src={product.image} alt={product.title} />
        <span className="product-category">{product.category}</span>
      </div>
      <div className="product-details">
        <h1>{product.title}</h1>
        <p className="product-price">${product.price}</p>
        <span>{product.description}</span>
        <div className="buttons">
          <button className="whatsapp">Order from whatsapp</button>
          <button className="add-to-cart">Add Basket</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
