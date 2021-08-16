import React, {useEffect} from 'react';
import { Typography, Container, Grid } from '@material-ui/core';
import { NFTCard } from "../../Components";

const ProfilePage = ({favoriteNfts, handleNftClick, cardClicked, getNfts}) => {

  useEffect(() => {
    getNfts()
  }, [])

  return (
    <>
      <Typography variant="h1">Your Favorites</Typography>
      <Container maxWidth="lg">
      <Grid container spacing={3} justifyContent="center">
        {favoriteNfts &&
          favoriteNfts
            .map((item) => <NFTCard
            image={item.image.slice(5, item.image.length -2 )}
            name={item.name}
            buyLink={item.permalink}
            key={item._id}
            handleNftClick={handleNftClick}
            cardClicked={cardClicked}
            description={item.description} />)}
      </Grid>
    </Container>
    </>
  )
}

export default ProfilePage;