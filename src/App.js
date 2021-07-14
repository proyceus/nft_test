import "./App.css";
import React, { useState, useEffect } from "react";
import { NFTContainer, SideMenu, NFTCardView } from "./Components";
import { Button, Typography } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";

function App() {
  const [nfts, setNfts] = useState([]);
  const [specificAsset, setSpecificAsset] = useState({})
  const [offset, setOffset] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cardClick, setCardClick] = useState(false);

  const fetchNfts = async () => {
    await fetch(
      `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset}&limit=20`
    )
      .then((res) => res.json())
      .then((data) => setNfts(data.assets))
      .then(console.log("Fetched"))
      .catch((err) => console.error("error:" + err));
  };

  const fetchSpecificNft = async () => {
    //start here
    await fetch()
  }

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

  const handleNftClick = (e) => {
    const contract = e.target.dataset.contract;
    const id = e.target.dataset.id;
    console.log(contract, id);
    //Fetch the asset with the contract and id to show in the CardView
    setSpecificAsset()
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
      {cardClick === true && <NFTCardView />}
      <NFTContainer nfts={nfts} handleNftClick={handleNftClick} cardClicked={cardClick} />
      {cardClick === true && <div className="overlay" onClick={handleNftClick}></div>}
    </div>
  );
}

export default App;
