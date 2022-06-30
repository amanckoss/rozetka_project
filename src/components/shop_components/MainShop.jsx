import {Box, Grid, Paper} from "@mui/material";
import ShopSection from "./ShopSection";

const post = {
  text: 'Happy cat',
  image: 'https://s.w-x.co/in-cat_in_glasses.jpg'
}

const MainShop = () => {

  return (
    <Grid item xs={12} md={10}>
      <Paper
        sx={{
          height: 400,
          position: 'relative',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${post.image})`,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            minHeight: 200,
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
      </Paper>
      <ShopSection title={'First Section'}/>
      <ShopSection title={'Second Section'}/>
      <ShopSection title={'Last Section'}/>
    </Grid>
  );
};

export default MainShop;