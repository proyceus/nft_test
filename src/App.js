import "./App.css";
import React, { useState, useEffect } from "react";
import { NFTContainer, SideMenu, NFTCardView } from "./Components";
import { Button, Typography } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";

function App() {
  const [nfts, setNfts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cardClick, setCardClick] = useState(false);

  const fetchNfts = async () => {
    await fetch(
      `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset}&limit=50`
    )
      .then((res) => res.json())
      .then((data) => setNfts(data.assets))
      .then(console.log("Fetched"))
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    fetchNfts();
  }, [offset]);

  const handleClick = (e) => {
    e.preventDefault();
    setOffset(Math.floor(Math.random() * 100));
  };

  const handleLoginClick = () => {
    isLoggedIn === false ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }

  const handleNftClick = () => {
    cardClick === false ? setCardClick(true) : setCardClick(false);
  }

  return (
    <div className="App">
      <Typography variant="h1">NFT Land</Typography>
      <SideMenu isLoggedIn={isLoggedIn} onClick={handleLoginClick} />
      <Button
        onClick={handleClick}
        startIcon={<RefreshIcon />}
        variant="contained"
        className="button-refresh"
      >
        Refresh
      </Button>
      {/* <NFTCardView /> */}
      <NFTContainer nfts={nfts} handleNftClick={handleNftClick} />
      {cardClick === true && <div className="overlay" onClick={handleNftClick}></div>}
    </div>
  );
}

export default App;
