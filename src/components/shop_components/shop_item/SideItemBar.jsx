import React from 'react';
import {Box, Button, Grid, Icon, IconButton, Link, Paper, Rating, Typography} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import BalanceIcon from "@mui/icons-material/Balance";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import ArticleIcon from '@mui/icons-material/Article';
import DeliverySideBar from "./sideBarComponents/DeliverySideBar";
import Specification from "./sideBarComponents/Specification";
import {useSelector} from "react-redux";

const SideItemBar = () => {
  const price = useSelector(state => state.shopSelect.item.price)
  const shop = useSelector(state => state.shopSelect.shop.name)
  const rate = useSelector(state => state.shopSelect.shop.rate)
  const rateAmount = useSelector(state => state.shopSelect.shop.rateAmount)
  return (
    <Grid item xs={12} md={6}>
      <Box sx={{
        width: 'fit-content',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        m: 2,
        mt: 4,
        borderRadius: 1
      }}>
        <CheckCircleOutlineIcon fontSize={'small'} sx={{m: 1}} color={"primary"}/>
        <Typography variant={'body2'} color={"primary"} sx={{mr: 2}}>Есть в наличии</Typography>
      </Box>
      <Paper elevation={1} sx={{display: "flex", alignItems: 'center', justifyContent: 'flex-start', m: 2, p: 2}}>
        <Typography variant={'h4'} component={'h4'}>{price}$</Typography>
        <Button variant={'contained'} size={'large'} startIcon={<ShoppingCartOutlinedIcon/>}
                sx={{ml: 2}}>Купити</Button>
        <IconButton aria-label="filt" sx={{ml: 2}}><BalanceIcon/></IconButton>
        <IconButton aria-label="filt" color={'success'} sx={{ml: 1}}><FavoriteBorderIcon/></IconButton>
      </Paper>
      <Paper elevation={1} sx={{mt: 2, mx: 2, mb: 1, pt: 1, px: 2, pb: 1}}>
        <Typography variant={'body1'}>
          Продвавець:&nbsp;
          <Link href={'#'} underline="hover" color={'secondary'}>{shop}</Link>
        </Typography>
        <Box display={'flex'} alignItems={'center'} justifyItems={'flex-start'}
             sx={{borderBottom: 1, borderColor: 'divider', mx: 0}}>
          <Rating name="read-only" precision={0.5} value={rate} size={'small'}/>
          <Link href={'#'} underline="hover" color={'secondary'} variant={'body2'} sx={{m: 1}}>{rate} ({rateAmount} отзывов)</Link>
        </Box>
        <Box>
          <Button variant={'text'} size={'small'} color={'secondary'} startIcon={<HelpOutlineIcon/>}
                  sx={{mt: 1, mr: 1}}>Написать продавцу</Button>
          <Button variant={'text'} size={'small'} color={'secondary'} startIcon={<WarningAmberIcon/>}
                  sx={{mt: 1, mr: 1}}>Пожаловаться на товар</Button>
          <Button variant={'text'} size={'small'} color={'secondary'} startIcon={<ArticleIcon/>} sx={{mt: 1, mr: 1}}>Страница
            продавца</Button>
        </Box>
      </Paper>

      <Box sx={{
        borderRadius: 1,
        border: 1,
        backgroundColor: '#ffe0b2',
        borderColor: 'orange',
        mb: 1,
        padding: 2,
        m: 2
      }}>
        <Typography variant={'body1'} component={'h6'}>
          Во время отправка войны отправка товара только по полной предоплате и только на Новую Почту. Минимальная
          сума заказа 120 грн.
        </Typography>
      </Box>
      <DeliverySideBar/>
      <Specification/>
    </Grid>
  );
};

SideItemBar.propTypes = {};

export default SideItemBar;