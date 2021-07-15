import React from "react";
import { Card, CardMedia, Grid } from "@material-ui/core";
import "./NFTCard.css";


const NFTCard = (props) => {
  return (
    <Grid item xs={3} className="NFTcard" value={props.value} onClick={props.handleNftClick} >
      <Card className="NFTcardimgcontainer">
        <CardMedia
        image={props.image}
        className="NFTcardimage"
        data-image={props.image}
        data-name={props.name}
        data-linky={props.buyLink}
        data-description={props.description}

        ></CardMedia>
      </Card>
    </Grid>
  );
};

export default NFTCard;
