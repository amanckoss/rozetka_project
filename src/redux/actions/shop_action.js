import {DEFAULT, SHOP_FETCH_POSTS} from "./type";
import {collection, doc, onSnapshot, updateDoc} from "firebase/firestore";
import {db} from "../../firebase-config";

export function fetchShopItem() {
  return async dispatch => {
    const userCollectionRef = collection(db, "shop_item")
    onSnapshot(userCollectionRef, (data) => {
      const array = data.docs.map(doc => {
        return {data: doc.data(), id: doc.id}
      })
      dispatch({type: SHOP_FETCH_POSTS, payload: array})
    })
  }
}

export function fetchLikes(id, likeState) {
  return async dispatch => {
    const item = doc(db, "shop_item", id);
    await updateDoc(item, {
      like: !likeState
    });
    dispatch({type: DEFAULT})
  }
}

