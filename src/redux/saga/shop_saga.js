import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {collection, onSnapshot} from "firebase/firestore";
import {db} from "../../firebase-config";
import {SHOP_FETCH_POSTS} from "../actions/type";

function* fetchShopCard(action) {
  try {
    const payload = yield call(async () => {
      const userCollectionRef = collection(db, "shop_item")
      onSnapshot(userCollectionRef, (data) => {
        const array = data.docs.map(doc => {
          return {data: doc.data(), id: doc.id}
        })
        put({type: "USER_FETCH_SUCCEEDED", data: array});
      })
    })
  } catch (e) {
    yield put({type: "USER_FETCH_FAILED", message: e.message});
  }
}

export function* mySaga() {
  yield takeEvery("SHOP_FETCH_REQUESTED", fetchShopCard);
}
