import "./App.css";
import React, { useState, useEffect } from "react";
import { NFTContainer, SideMenu } from "./Components";
import { Button, Typography } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";

function App() {
  const [nfts, setNfts] = useState([]);
  const [offset, setOffset] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const fetchNfts = async () => {
    await fetch(
      `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset}&limit=50`
    )
      .then((res) => res.json())
      .then((data) => setNfts(data.assets))
      .catch((err) => console.error("error:" + err));
  };

  useEffect(() => {
    fetchNfts();
  }, [offset]);

  const handleClick = (e) => {
    e.preventDefault();
    setOffset(Math.floor(Math.random() * 100));
  };

  return (
    <div className="App">
      <Typography variant="h1">NFT Land</Typography>
      <SideMenu isLoggedIn={isLoggedIn} />
      <Button
        onClick={handleClick}
        startIcon={<RefreshIcon />}
        variant="contained"
        className="button-refresh"
      >
        Refresh
      </Button>
      <NFTContainer nfts={nfts} />
    </div>
  );
}

export default App;