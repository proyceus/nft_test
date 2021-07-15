import React from 'react';
import { Card, CardMedia, Typography, Container } from "@material-ui/core";
import './NFTCardView.css';


const NFTCardView = ({ specificAsset }) => {
  return (
    <Container className="cardview-container">
      <Card>
        <CardMedia image={specificAsset.image}></CardMedia>
        <Typography variant="h2">{specificAsset.name}</Typography>
      </Card>
    </Container>
  );
}

export default NFTCardView;