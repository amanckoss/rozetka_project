import React from 'react';
import {Grid, Link, Paper, Typography} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IconButton from "@mui/material/IconButton";

const ShopItem = props => {
  const {item, onLikeClicked} = props

  return (
    <Grid item md={2} xs={3} sx={{borderRight: 1, borderColor: 'divider', position: 'relative'}}>
      <IconButton color="success" onClick={() => onLikeClicked(item.id)} sx={{position: 'absolute', right: 0, top: 0}}>
        {item.data.like
          ? <FavoriteIcon />
          : <FavoriteBorderIcon />
        }
      </IconButton>
      <Paper
        sx={{
          mt: 4,
          mr: 2,
          mb: 1,
          height: 150,
          color: '#fff',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url('https://picsum.photos/200')`,
        }}
      />
      <Link variant={'body1'} underline="hover" href={'#'} color={'inherit'}>
        {item.data.title}
      </Link>
      <Typography variant="h6" color={'secondary.main'}>
        {item.data.price + ' ₴'}
      </Typography>
    </Grid>
  );
};

ShopItem.propTypes = {};

export default ShopItem;