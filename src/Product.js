import React from "react";
import "./Product.css";
import GradeIcon from "@material-ui/icons/Grade";
function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          <p className="product_ratingStar">
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
            <GradeIcon />
          </p>
        </div>
      </div>
      <img
        src="https://images-na.ssl-images-amazon.com/images/I/61PXjYVtmqL._SL1407_.jpg"
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;
