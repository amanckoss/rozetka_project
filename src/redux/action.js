import {FETCH_POSTS, GET_POST} from "./type";
import {collection, doc, onSnapshot, updateDoc} from "firebase/firestore";
import {db} from "../firebase-config";

export function fetchPosts() {
  return async dispatch => {
    const userCollectionRef = collection(db, "shop_item")
    console.log('fetch')
    onSnapshot(userCollectionRef, (data) => {
      const array = data.docs.map(doc => {return {data: doc.data(), id: doc.id}})
      dispatch({type: FETCH_POSTS, payload: array})
    })
  }
}

export function fetchLikes(itemSection, itemId) {
  return async dispatch => {
    const updateItem = itemSection.filter(item => item.id === itemId)[0];
    const item = doc(db, "shop_item", itemId);
    await updateDoc(item, {
      like: !updateItem.data.like
    });
  }
}