import {SHOP_CHANGE_CARD, SHOP_FETCH_POSTS} from "../actions/type";

const initialState = {
  posts: [],
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOP_FETCH_POSTS:
      return {...state, posts: action.payload}
    case SHOP_CHANGE_CARD:
      return state
    default: return state
  }
}