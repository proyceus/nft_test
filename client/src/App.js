import "./App.css";
import React, { useState, useEffect } from "react";
import { NFTContainer, TopMenu, NFTCardView, ProfilePage, LoginPage, SignUpPage } from "./Components";
import { Typography } from "@material-ui/core";
import axios from 'axios';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [nfts, setNfts] = useState([]);
  const [specificAsset, setSpecificAsset] = useState({image: '', name: '', buylink: '', description: ''});
  const [cardClick, setCardClick] = useState(false);
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [data, setData] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);


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

  const handleLoginSubmit = () => {
    axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword
      },
      withCredentials: true,
      url: "http://localhost:3001/login"
    })
    .then(res => {
      console.log(res);
      setData(res);
    })
    .then(setIsLoggedIn(true))
  };


  const handleSignupSubmit = () => {
    axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword
      },
      withCredentials: true,
      url: "http://localhost:3001/register"
    })
    .then(res => console.log(res))
  };

  const getUser = () => {
    // axios({
    //   method: "GET",
    //   withCredentials: true,
    //   url: "http://localhost:3001/getuser"
    // })
    // .then(res => console.log(res.data))

    console.log(data);
  };

  const logoutUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/logout"
    })
    .then(res => console.log(res))
    .then(setIsLoggedIn(false))
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

  const handleFavoriteClick = async () => {
    //make sure that users who are not logged in can't favorite any NFTs
    // if (!isLoggedIn) {
    //   console.log("Need to login before you can favorite an NFT");
    //   return;
    // } else {
    //   console.log("Favorited");
    // }

    axios({
      method: "POST",
      data: {
        username: data.data.username,
        image: document.querySelector('.cardview-image').style.backgroundImage,
        name: document.querySelector('.info-title').textContent,
        buyLink: document.querySelector('.buy-button').href,
        description: document.querySelector('.info-description').textContent
      },
      withCredentials: true,
      url: "http://localhost:3001/favoritenfts"
    })
    .then(res => console.log(res))
  };

  return (

    <div className="App">
      <Typography variant="h1">NFT Land</Typography>
      <Router>
      <TopMenu isLoggedIn={isLoggedIn} handleLogoutClick={logoutUser} getUser={getUser} />
      <Switch>
        <Route exact path="/" onEnter={fetchNfts}>
          <NFTContainer nfts={nfts} handleNftClick={handleNftClick} handleButtonClick={handleClick} cardClicked={cardClick} />
        </Route>
        <Route exact path="/profile">
          <ProfilePage userData={data} />
        </Route>
        <Route exact path="/login">
          {isLoggedIn === false && <LoginPage
          handleLoginSubmit={handleLoginSubmit}
          setPassword={setLoginPassword}
          setUsername={setLoginUsername}
          />}
        </Route>
        <Route exact path="/signup">
          {isLoggedIn === false &&
          <SignUpPage
          handleSignupSubmit={handleSignupSubmit}
          setPassword={setRegisterPassword}
          setUsername={setRegisterUsername}
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
