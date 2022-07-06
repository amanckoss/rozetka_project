import React from 'react';
import {Grid, Rating, Typography} from "@mui/material";
import {useSelector} from "react-redux";

const ItemRateCode = () => {
  const code = useSelector(state => state.shopSelect.item.code)
  const rate = useSelector(state => state.shopSelect.item.rate)

  return (
    <Grid container sx={{direction: 'row', justifyContent: 'space-between', my: 2}}>
      <Grid item>
        <Rating name="read-only" size={'small'} precision={0.5} value={rate} readOnly />
      </Grid>
      <Grid item>
        <Typography variant={'body2'} component={'h1'}>
          {'Код ' + code}
        </Typography>
      </Grid>
    </Grid>
  );
};

ItemRateCode.propTypes = {
  
};

export default ItemRateCode;