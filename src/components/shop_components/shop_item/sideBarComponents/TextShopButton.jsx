import React from 'react';
import {Grid, Typography} from "@mui/material";

const TextShopButton = props => {
  const {title} = props

  return (
    <Grid container sx={{direction: 'row', justifyContent: 'space-between', mt: 1, py: 2, borderTop: 1, borderColor: 'divider'}}>
      <Grid item>
        <Typography variant={'h6'} component={'h6'}>
          {title}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant={'h6'} component={'h6'}>
          icon
        </Typography>
      </Grid>
    </Grid>
  );
};

export default TextShopButton;