import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllProducts } from "../redux/slices/productsSlice";
import "../css/BestSeller.css";
import { Link } from "react-router";

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
            <Link to={{ pathname: "/product/" + product.id }} key={product.id}>
              <div className="product">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                />
                <p className="product-price">${product.price}</p>
                <span className="product-category">{product.category}</span>
              </div>
            </Link>
          ))
        )}
      </div>
    </section>
  );
}

export default BestSeller;
