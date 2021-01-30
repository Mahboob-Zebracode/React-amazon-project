import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Multititle/jan/Blockbuster_entertainment/EN/1500x600_Hero-Tall_01_FT._CB660702447_.jpg"
        />
        <div className="home_row">
          <Product title="the lean startup"/>
          <Product />
        </div>
        <div className="home_row" price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/71Dv5BtTh8L._SL1500_.jpg'
        rating={5}>
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home_row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
