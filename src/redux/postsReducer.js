import {FETCH_POSTS} from "./type";

const initialState = {
  posts: [],
}

export const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS:
      return {...state, posts: state.posts.concat(action.payload)}
    default: return state
  }
}