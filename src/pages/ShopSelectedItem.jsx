import React, {useEffect} from 'react';
import {Box, Grid, Typography} from "@mui/material";
import ItemRateCode from "../components/shop_components/shop_item/ItemRateCode";
import Menu from "../components/shop_components/shop_item/Menu";
import SideItemBar from "../components/shop_components/shop_item/SideItemBar";
import MainShopItemPost from "../components/shop_components/shop_item/mainPostPaper/MainShopItemPost";
import {useDispatch, useSelector} from "react-redux";
import {fetchContent} from "../redux/actions/shopitem_action";

const ShopSelectedItem = () => {
  const dispatch = useDispatch()
  const title = useSelector(state => state.shopSelect.item.title)


  useEffect(() => {
    dispatch(fetchContent())
  }, [dispatch])

  return (
    <>
      <Box sx={{
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        mx: 3
      }}>
        <Typography variant={'h4'} component={'h4'}>
          {title}
        </Typography>
        <ItemRateCode/>
        <Menu/>
      </Box>
      <Grid container sx={{borderBottom: 1, borderColor: 'divider'}}>
        <MainShopItemPost/>
        <SideItemBar/>
      </Grid>
    </>
  );
};

ShopSelectedItem.propTypes = {};

export default ShopSelectedItem;