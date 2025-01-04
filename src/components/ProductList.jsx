import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/slices/productsSlice";
import "../css/Products.css";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className="product-list">
      {products.loading ? (
        <h1>Loading...</h1>
      ) : (
        products.products.map((product) => (
          <div className="product" key={product.id}>
            <img
              className="product-image"
              src={product.image}
              alt={product.title}
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
            <span className="product-category">{product.category}</span>
          </div>
        ))
      )}
    </div>
  );
}

export default ProductList;
