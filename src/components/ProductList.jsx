import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/slices/productsSlice";
import "../css/Products.css";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [visibleCount, setVisibleCount] = useState(6);

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
