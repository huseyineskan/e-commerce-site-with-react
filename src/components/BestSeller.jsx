import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/slices/productsSlice";
import "../css/BestSeller.css";

function BestSeller() {
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
    <section>
      <h2>Best Seller</h2>
      <div className="best-seller">
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
              <p className="product-price">${product.price}</p>
              <span className="product-category">{product.category}</span>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default BestSeller;
