import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";
import {MD_POSTS_FETCH, SIDE_BAR_FETCH, SIDE_POSTS_FETCH} from "./type";

export function fetchMdPost() {
  return async dispatch => {
    const userCollectionRef = collection(db, "md_post")
    const data = await getDocs(userCollectionRef);
    const array = data.docs.map(doc => {return doc.data()})
    dispatch({type: MD_POSTS_FETCH, payload: array})
  }
}

export function fetchCards() {
  return async dispatch => {
    const userCollectionRef = collection(db, "post")
    const data = await getDocs(userCollectionRef);
    const array = data.docs.map(doc => {return doc.data()})
    dispatch({type: SIDE_POSTS_FETCH, payload: array})
  }
}

export function fetchSideBarText() {
  return async dispatch => {
    const userCollectionRef = collection(db, "sidebar")
    const data = await getDocs(userCollectionRef)
    const array = data.docs[0].data()
    dispatch({type: SIDE_BAR_FETCH, payload: array})
  }
}