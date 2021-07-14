import React from "react";
import { Card, CardMedia, Grid } from "@material-ui/core";
import "./NFTCard.css";

const NFTCard = (props) => {
  return (
    <Grid item xs={3} className="NFTcard" onClick={props.handleNftClick}>
      <Card className="NFTcardimgcontainer">
        <CardMedia image={props.image} className="NFTcardimage"></CardMedia>
      </Card>
    </Grid>
  );
};

export default NFTCard;
