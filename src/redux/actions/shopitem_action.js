import {doc, getDoc} from "firebase/firestore";
import {db} from "../../firebase-config";
import {FETCH_SELECTED_ITEM} from "./shopType";


export function fetchContent() {
  return async dispatch => {
    const ref = doc(db, "shop_items", "jFT7wFhJYj9yiadl6TYt")
    const data = await getDoc(ref)
    console.log(data.data())
    dispatch({type: FETCH_SELECTED_ITEM, payload: data.data()})
  }
}