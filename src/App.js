import "./App.css";
import React, { useState, useEffect } from "react";
import { NFTContainer, TopMenu, NFTCardView, ProfilePage, FavoritesPage, LoginPage, SignUpPage } from "./Components";
import { Typography } from "@material-ui/core";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [nfts, setNfts] = useState([]);
  const [specificAsset, setSpecificAsset] = useState({image: '', name: '', buylink: '', description: ''})
  const [offset, setOffset] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cardClick, setCardClick] = useState(false);
  const [token, setToken] = useState();

  const fetchNfts = async () => {
    await fetch(
      `https://api.opensea.io/api/v1/assets?order_direction=desc&offset=${offset}&limit=10`
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

  const handleFavoriteClick = async (e) => {
    //make sure that users who are not logged in can't favorite any NFTs
    // if (!isLoggedIn) {
    //   console.log("Need to login before you can favorite an NFT");
    //   return;
    // } else {
    //   console.log("Favorited");
    // }
    const data = {image: document.querySelector('.cardview-image').style.backgroundImage, name: document.querySelector('.info-title').textContent, buyLink: document.querySelector('.buy-button').href, description: document.querySelector('.info-description').textContent};

    console.log(data);

    await fetch('http://localhost:3001/api/addFavoriteNFT', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => console.log('Success:', data))
    .catch(err => console.error(err));
  }

  return (

    <div className="App">
      <Typography variant="h1">NFT Land</Typography>
      <Router>
      <TopMenu isLoggedIn={isLoggedIn} />
      <Switch>
        <Route exact path="/">
          <NFTContainer nfts={nfts} handleNftClick={handleNftClick} handleButtonClick={handleClick} cardClicked={cardClick} />
        </Route>
        <Route exact path="/profile">
          <ProfilePage />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignUpPage />
        </Route>
      </Switch>
      </Router>
      {cardClick === true && <NFTCardView specificAsset={specificAsset} handleCancelClick={handleNftClick} handleFavoriteClick={handleFavoriteClick} />}

      {cardClick === true && <div className="overlay" onClick={handleNftClick}></div>}

    </div>

  );
}

export default App;
