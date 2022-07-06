import React from 'react';
import {Box, Button, Grid} from "@mui/material";

const Menu = props => {
  const menuButtonsText = ['Все о товаре', 'Характеристики', 'Отзывы', 'Впросы', 'Фото']

  return (
    <Box sx={{backgroundColor: '#f5f5f5', width: '100%', borderRadius: 1}}>
      <Grid container sx={{direction: 'row', justifyContent: 'flex-start'}}>
        <Grid item>
          {menuButtonsText.map(title => <Button variant={'text'} size={'small'} key={title} sx={{py: 1, px: 2}}>{title}</Button>)}
        </Grid>
      </Grid>
    </Box>
  );
};

Menu.propTypes = {

};

export default Menu;