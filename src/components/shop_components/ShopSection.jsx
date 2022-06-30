import {Grid, Typography} from "@mui/material";
import ShopItem from "./ShopItem";
import {useSelector} from "react-redux";
import {db} from "../../firebase-config";
import {doc, updateDoc} from "firebase/firestore";

const ShopSection = props => {
  const {title} = props
  const itemSection = useSelector(state => state.posts.posts);

  async function onLikeClicked(itemId) {

  }

  return (
    <>
      <Typography variant={'h6'} color="inerit" sx={{mt: 5}}>
        {title}
      </Typography>
      <Grid container spacing={1} sx={{ mt: 1, borderBottom: 1, borderColor: 'divider'}}>
        { itemSection.map(item => <ShopItem key={item.id} item={item} onLikeClicked={onLikeClicked}/>)}
      </Grid>
    </>
  );
};

ShopSection.propTypes = {

};

export default ShopSection;