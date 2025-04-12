import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/slices/productsSlice";
import { Link } from "react-router";
import { FaCartPlus } from "react-icons/fa";
import { addToCart } from "../redux/slices/cartSlice";

import "../css/Products.css";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [visibleCount, setVisibleCount] = useState(6);
  const cart = useSelector((state) => state.cart);

  const loadMore = () => {
    setVisibleCount((prevCount) => prevCount + 6);
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <>
      <div className="product-list">
        {products.loading ? (
          <h1>Loading...</h1>
        ) : (
          products.products.slice(0, visibleCount).map((product) => (
            <div className="product" key={product.id}>
              <Link
                to={{ pathname: "/product/" + product.id }}
                key={product.id}
              >
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                />
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">${product.price}</p>
                <span className="product-category">{product.category}</span>
              </Link>
              <FaCartPlus
                className="addToCartIcon"
                onClick={() => {
                  dispatch(addToCart(product));
                }}
              />
            </div>
          ))
        )}
      </div>
      {products.products.length > visibleCount && (
        <div className="load-more-container">
          <button className="load-more" onClick={loadMore}>
            Load More
          </button>
        </div>
      )}
    </>
  );
}

export default ProductList;
