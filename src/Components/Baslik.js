import React from "react";
import "./Baslik.css";

function Baslik() {
  return (
    <div className="coin-header-container">
      <div className="coin-header-row">
        <div className="coin-header">
          <p className="coin-header-name">Name</p>
          <p className="coin-header-symbol">Symbol</p>
        </div>
        <div className="coin-header-data">
          <p className="coin-header-price">Price</p>

          <p className="coin-header-percent">Price Change</p>

          <p className="coin-header-marketcap">Market Cap</p>
        </div>
      </div>
    </div>
  );
}

export default Baslik;
