import React from 'react';
import { Card, CardMedia, Typography, Container } from "@material-ui/core";
import './NFTCardView.css';


const NFTCardView = (props) => {
  return (
    <Container className="cardview-container">
      <Card>
        <CardMedia image={props.image}></CardMedia>
        <Typography variant="h2">Testing</Typography>
      </Card>
    </Container>
  );
}

export default NFTCardView;