import {Grid, Typography} from "@mui/material";
import ShopItem from "./ShopItem";
import {useSelector} from "react-redux";

const ShopSection = props => {
  const {title} = props
  const itemSection = useSelector(state => state.shop.posts);

  return (
    <>
      <Typography variant={'h6'} color="inerit" sx={{mt: 5}}>
        {title}
      </Typography>
      <Grid container spacing={1} sx={{ mt: 1, borderBottom: 1, borderColor: 'divider'}}>
        { itemSection.map(item => <ShopItem key={item.id} item={item}/>)}
      </Grid>
    </>
  );
};

ShopSection.propTypes = {

};

export default ShopSection;