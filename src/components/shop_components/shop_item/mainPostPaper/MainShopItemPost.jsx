import React, {useEffect, useState} from 'react';
import {Grid, Paper} from "@mui/material";
import {useSelector} from "react-redux";

const MainShopItemPost = () => {
  const urlArray = useSelector(state => state.shopSelect.item.imagesURL)
  const [selectedImage, setImage] = useState('')

  useEffect(() => {
    setImage(urlArray[0])
  }, [urlArray])
  function setUrl(index) {
    setImage(urlArray[index])
    return true
  }
  return (
    <Grid item xs={12} md={6}>
      <Paper sx={{
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${selectedImage})`,
        height: 600,
        m: 4,
      }}/>
      <Grid container sx={{ml: 4}}>
        {
          urlArray.map(url => (
            <Grid item xs={1} key={url.index}>
              <img src={url} height={50} key={url} alt={'fjksdjfk'} onClick={setUrl(url.index)}/>
            </Grid>
          ))
        }
      </Grid>
    </Grid>
  );
};

export default MainShopItemPost;