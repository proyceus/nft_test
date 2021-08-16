import React, {useEffect} from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import { NFTCard } from "../../Components";

const ProfilePage = ({getNfts}) => {

  useEffect(() => {
    getNfts();
  }, [])


  return (
    <>
      <Typography variant="h1">Your Favorites</Typography>
      {/* <Container maxWidth="lg">
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
    </Container> */}
    </>
  )
}

export default ProfilePage;