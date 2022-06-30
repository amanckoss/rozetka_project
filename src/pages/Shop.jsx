import React, {useEffect} from 'react';
import SideMenu from "../components/shop_components/SideMenu";
import {Grid} from "@mui/material";
import MainShop from "../components/shop_components/MainShop";
import {useDispatch} from "react-redux";
import {fetchShopItem} from "../redux/actions/shop_action";

const Shop = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchShopItem())
  }, [dispatch])

  return (
    <Grid container spacing={'5'}>
      <SideMenu/>
      <MainShop/>
    </Grid>
  );
};

export default Shop;