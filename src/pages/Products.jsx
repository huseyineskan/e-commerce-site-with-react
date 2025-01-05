import React from "react";
import ProductList from "../components/ProductList";
import Breadcrumb from "../components/Breadcrumb";

function Products() {
  return (
    <div>
      <Breadcrumb title={Products.name} />
      <ProductList />
    </div>
  );
}

export default Products;
