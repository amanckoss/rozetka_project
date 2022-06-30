import React, {useState} from 'react';
import {
  Box,
  Grid,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Typography
} from "@mui/material";
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import LaptopIcon from '@mui/icons-material/Laptop';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';

const FireNav = styled(List)({
  '& .MuiListItemButton-root': {
    paddingTop: 1,
    paddingBottom: 1,
  },
  '& .MuiListItemIcon-root': {
    minWidth: 0,
    marginRight: 16,
  },
  '& .MuiSvgIcon-root': {
    fontSize: 20,
  },
});

const SideMenu = () => {

  const data = [
    {icon: <DirectionsCarIcon/>, label: 'Cars'},
    {icon: <PhoneAndroidIcon/>, label: 'Phones'},
    {icon: <LaptopIcon/>, label: 'Laptop'},
    {icon: <SportsTennisIcon/>, label: 'Sport'},
    {icon: <DirectionsCarIcon/>, label: 'Cars1'},
    {icon: <PhoneAndroidIcon/>, label: 'Phones1'},
    {icon: <LaptopIcon/>, label: 'Laptop1'},
    {icon: <SportsTennisIcon/>, label: 'Sport1'},
    {icon: <DirectionsCarIcon/>, label: 'Cars2'},
    {icon: <PhoneAndroidIcon/>, label: 'Phones2'},
    {icon: <LaptopIcon/>, label: 'Laptop2'},
    {icon: <SportsTennisIcon/>, label: 'Sport2'},
  ];

  return (
    <Grid component={Box}  item xs={2} display={{xs: "none", lg: "block"}}>
      <Box sx={{
        width: 'absolute',
        height: '100%',
        borderRight: 1, borderColor: 'divider', marginRight: 3,
      }}>
        <FireNav sx={{marginLeft: 2}}>
          {
            data.map((item) => (
              <ListItemButton key={item.label}>
                <ListItemIcon>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.label} primaryTypographyProps={{fontSize: 14, fontWeight: 'medium'}}/>
              </ListItemButton>
            ))
          }
        </FireNav>
      </Box>
    </Grid>
  );
};

export default SideMenu;