import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  Typography,
  Container,
  Button
} from "@material-ui/core";
import { NFTCard } from "../../Components";
import RefreshIcon from "@material-ui/icons/Refresh";

const NFTContainer = ({ nfts, handleNftClick, cardClicked, handleButtonClick }) => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center">
        {nfts &&
          nfts
            .filter((item) => item.image_url !== "")
            .map((item) => <NFTCard
            image={item.image_url}
            name={item.name}
            assetContract={item.asset_contract.address}
            buyLink={item.permalink}
            tokenId={item.token_id}
            key={item.id}
            handleNftClick={handleNftClick}
            cardClicked={cardClicked}
            description={item.description} />)}
      </Grid>
      <Button
          onClick={handleButtonClick}
          startIcon={<RefreshIcon />}
          variant="contained"
          className="button-refresh"
          >
          Refresh
          </Button>
    </Container>

  );
};

export default NFTContainer;