import React from 'react';
import { Card, CardMedia, Typography, CardContent, Button } from "@material-ui/core";
import './NFTCardView.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CloseIcon from '@material-ui/icons/Close';


const NFTCardView = ({ specificAsset, handleCancelClick, handleFavoriteClick }) => {
  const descriptionClean = () => {
    return specificAsset.description ? specificAsset.description.replace(/['"]+/g, '') : '';
  }

  return (
    <Card className="cardview-container">
      <CardMedia image={specificAsset.image} className="cardview-image" />
      <div className="info-container">
        <CardContent className="info-content">
          <Typography variant="h2" className="info-title">{specificAsset.name}</Typography>
          <Typography variant="subtitle1" className="info-description">{descriptionClean()}</Typography>
          <div className="buttons">
          <Button variant="contained" className={"cardview-button buy-button"} href={specificAsset.buylink} target="_blank">Buy on OpenSea</Button>
          <Button variant="contained" onClick={handleFavoriteClick} className={"cardview-button fav-button"} href="" startIcon={<FavoriteBorderIcon />}>Favorite</Button>
          </div>

        </CardContent>


      </div>
      <div className="cancel" onClick={handleCancelClick}>
        <CloseIcon />
      </div>
      </Card>

  );
}

export default NFTCardView;