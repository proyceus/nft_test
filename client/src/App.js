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
  const [specificAsset, setSpecificAsset] = useState({image: '', name: '', buylink: '', description: ''});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cardClick, setCardClick] = useState(false);
  const [token, setToken] = useState();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  //get NFTs from OpenSea API
  const fetchNfts = async () => {
    //fetching assets based on sale date and showing from most recent sale
    await fetch(
      `https://api.opensea.io/api/v1/assets?order_by=sale_date&order_direction=desc&limit=20`
    )
      .then((res) => res.json())
      .then((data) => setNfts(data.assets))
      .then(console.log("Fetched"))
      .catch((err) => console.error("error:" + err));
  };

  //figure out a way to not allow everyone to just sign in, needs to set the isloggedin state to true but only when it's a valid login
  const handleLoginSubmit = () => {
    fetch(
      'http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      }
    )
    .then(res => res.json())
    .catch(err => console.log(err.message))
  };


  const handleSignupSubmit = () => {
    fetch(
      'http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({username, password})
      }
    )
    .then(res => res.json())
    .then(setIsLoggedIn(true))
    .catch(err => console.log(err.message))
  };


  useEffect(() => {
    fetchNfts();
  }, []);




  //lazy solution to refreshing the NFTs coming in to get the most up to date
  const handleClick = (e) => {
    e.preventDefault();
    fetchNfts();

  };

  //clicking on an NFT will initiate a pop up with more information and links specific to that NFT
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

  const handleLogoutClick = () => {
    setIsLoggedIn(false);
    setToken({});
  }

  return (

    <div className="App">
      <Typography variant="h1">NFT Land</Typography>
      <Router>
      <TopMenu isLoggedIn={isLoggedIn} handleLogoutClick={handleLogoutClick} />
      <Switch>
        <Route exact path="/">
          <NFTContainer nfts={nfts} handleNftClick={handleNftClick} handleButtonClick={handleClick} cardClicked={cardClick} />
        </Route>
        <Route exact path="/profile">
          <ProfilePage loginToken={token} />
        </Route>
        <Route exact path="/favorites">
          <FavoritesPage />
        </Route>
        <Route exact path="/login">
          {isLoggedIn === false && <LoginPage
          handleLoginSubmit={handleLoginSubmit}
          setPassword={setPassword}
          setUsername={setUsername}
          />}
        </Route>
        <Route exact path="/signup">
          {isLoggedIn === false &&
          <SignUpPage
          handleSignupSubmit={handleSignupSubmit}
          setPassword={setPassword}
          setUsername={setUsername}
          />}
        </Route>
      </Switch>
      </Router>
      {cardClick === true && <NFTCardView specificAsset={specificAsset} handleCancelClick={handleNftClick} handleFavoriteClick={handleFavoriteClick} />}

      {cardClick === true && <div className="overlay" onClick={handleNftClick}></div>}

    </div>

  );
}

export default App;
