import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";
import "../css/Product.css";
import { getSingleProduct } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";

function Product() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.product);
  const { id } = useParams();
  const [whatsappLink, setWhatsappLink] = useState("");

  useEffect(() => {
    dispatch(getSingleProduct(id));
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    OrderFromWhatsapp();
  }, []);

  function OrderFromWhatsapp() {
    const current_url = window.location.href;
    const phone_nummer = +720001111;
    setWhatsappLink(
      `https://wa.me/${phone_nummer}?text=I'm%20interested%20in%20this%20product%20%0a%0a${current_url}`
    );
  }

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
          <a href={whatsappLink} target="_blank">
            <button className="whatsapp">Order from whatsapp</button>
          </a>
          <button
            className="add-to-cart"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
