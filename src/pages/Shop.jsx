import React from 'react';
import SideMenu from "../components/shop_components/SideMenu";
import {Grid} from "@mui/material";
import MainShop from "../components/shop_components/MainShop";

const Shop = () => {
  return (
    <Grid container spacing={'5'}>
      <SideMenu/>
      <MainShop/>
    </Grid>
  );
};

export default Shop;