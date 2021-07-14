import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Container,
} from "@material-ui/core";
import { NFTCard } from "../../Components";

const NFTContainer = ({ nfts }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center">
        {nfts &&
          nfts
            .filter((item) => item.image_url !== "")
            .map((item) => <NFTCard image={item.image_url} key={item.id} />)}
      </Grid>
    </Container>
  );
};

export default NFTContainer;