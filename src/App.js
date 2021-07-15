import "./App.css";
import React, { useState, useEffect } from "react";
import { NFTContainer, TopMenu, NFTCardView } from "./Components";
import { Button, Typography } from "@material-ui/core";
import RefreshIcon from "@material-ui/icons/Refresh";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [nfts, setNfts] = useState([]);
  const [specificAsset, setSpecificAsset] = useState({image: '', name: '', buylink: '', description: ''})
  const [offset, setOffset] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cardClick, setCardClick] = useState(false);

  // const fetchNfts = async () => {
  //   await fetch(
  //     `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset}&limit=10`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => setNfts(data.assets))
  //     .then(console.log("Fetched"))
  //     .catch((err) => console.error("error:" + err));
  // };

  // useEffect(() => {
  //   fetchNfts();
  // }, [offset]);

  const handleClick = (e) => {
    e.preventDefault();
    setOffset(Math.floor(Math.random() * 100));

  };

  const handleLoginClick = () => {
    isLoggedIn === false ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }

  const handleNftClick = (e) => {
    const image = e.target.dataset.image;
    const name = e.target.dataset.name;
    const buylink = e.target.dataset.linky;
    const description = e.target.dataset.description;

    if (cardClick === false) {
      setSpecificAsset({
        image: image,
        name: name,
        buylink: buylink,
        description: description
      })
    }

    cardClick === false ? setCardClick(true) : setCardClick(false);
  }

  return (
    <Router>
    <div className="App">
      <Typography variant="h1">NFT Land</Typography>
      <TopMenu isLoggedIn={isLoggedIn} onClick={handleLoginClick} />
      <Button
        onClick={handleClick}
        startIcon={<RefreshIcon />}
        variant="contained"
        className="button-refresh"
      >
        Refresh
      </Button>
      {cardClick === true && <NFTCardView specificAsset={specificAsset} handleCancelClick={handleNftClick} />}
      <NFTContainer nfts={nfts} handleNftClick={handleNftClick} cardClicked={cardClick} />
      {cardClick === true && <div className="overlay" onClick={handleNftClick}></div>}
    </div>
    </Router>
  );
}

export default App;
