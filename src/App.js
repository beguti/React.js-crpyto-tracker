import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Coin from "./Components/Coin";
import Baslik from "./Components/Baslik";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false&locale=en"
      )
      .then((res) => {
        setCoins(res.data);
        console.log("Veriler güncellendi.");
      })
      .catch((error) => alert("Veriler çekilemedi."));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search a Coin</h1>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search..."
          />
      </div>
      <Baslik />
      {filteredCoins.map((coin) => {
        return (
          <div>
            <Coin
              key={coin.id}
              name={coin.name}
              price={coin.current_price}
              symbol={coin.symbol}
              marketcap={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
            />
          </div>
        );
      })}
    </div>
  );
}
export default App;
