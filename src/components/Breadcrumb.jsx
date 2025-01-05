import React from "react";
import "../css/Breadcrumb.css";

function Breadcrumb({ title }) {
  return (
    <div className="breadcrumb">
      <h1>{title}</h1>
    </div>
  );
}

export default Breadcrumb;
