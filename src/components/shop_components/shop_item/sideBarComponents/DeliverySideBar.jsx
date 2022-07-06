import React from 'react';
import {Box, Grid, Link, Paper, Typography} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import {useSelector} from "react-redux";

const DeliverySideBar = props => {
  // const deliveryArray = [{text: 'Самовывоз из отделений почтовых операторов', link: 'Показать на карте'},
  //   {text: 'Доставка курьером'}]
  const deliveryArray = useSelector(state => state.shopSelect.shop.delivery)


  return (
    <Paper elevation={1} sx={{m: 2, p: 2}}>
      <Typography variant={'body1'} component={'h6'} sx={{borderBottom: 1, borderColor: 'divider'}}>
        Доставка в&nbsp;
        <Link href={'#'} color={'secondary'}>Киев</Link>
      </Typography>
      <Grid container>
        {
          deliveryArray.map(item => (
            <>
              <Grid item xs={6} sx={{mt: 2}}>
                <Box sx={{
                  width: 'fit-content',
                  display: 'flex',
                  alignItems: 'center',
                  maxWidth: '80%'
                }}
                >
                  <StorefrontIcon sx={{mr: 1}}/>
                  <Typography variant={'body2'} component={'h6'}>
                    {item.text}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6} sx={{mt: 2, display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                <Typography variant={'body2'} sx={{maxWidth: '30%'}}>
                  по тарифам перевозчика
                </Typography>
              </Grid>
              {item.link &&
              <Grid item xs={12} >
                <Link href={'#'} color={'secondary'} sx={{ml: 4}}>{item.link}</Link>
              </Grid>}
            </>
          ))
        }
      </Grid>
    </Paper>
  );
};

DeliverySideBar.propTypes = {

};

export default DeliverySideBar;