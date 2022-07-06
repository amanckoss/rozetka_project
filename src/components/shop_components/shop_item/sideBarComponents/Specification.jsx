import React from 'react';
import PropTypes from 'prop-types';
import {Box, Paper, Typography} from "@mui/material";
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import GppGoodOutlinedIcon from '@mui/icons-material/GppGoodOutlined';

const Specification = () => {
  const specificationArray = [{
    h: 'Оплата', body: 'Оплата при получении товара. В настоящий момент использование бонусов на данный товар недоступно.', icon: <AccountBalanceWalletOutlinedIcon/>
  }, {
    h: 'Гарантия',
    body: 'Законом о защите прав потребителей не предусмотрено возвращение этого товара надлежащего качества.',
    icon: <GppGoodOutlinedIcon/>
  }]
  return (
    <Paper elevation={1} sx={{m: 2, p: 2,}}>
      {
        specificationArray.map(item => (
          <Box key={item.h} sx={{display: 'flex', flexDirection: 'row', borderBottom: 1, borderColor: 'divider'}}>
            {item.icon}
            <Typography sx={{pl: 2}}>
              {<b>{item.h}&nbsp;</b>}
              {item.body}
            </Typography>
          </Box>
        ))
      }
    </Paper>
  );
};

Specification.propTypes = {};

export default Specification;