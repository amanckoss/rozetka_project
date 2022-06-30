import {MD_POSTS_FETCH, SIDE_BAR_FETCH, SIDE_POSTS_FETCH} from "../actions/type";

const initialState = {
  posts: [],
  md_post: [],
  sideBar: {
    title: '',
    description: '',
    archives: [],
    social: '',
  }
}

export const mainPageReducer = (state = initialState, action) => {
  switch (action.type) {
    case MD_POSTS_FETCH:
      return {...state, md_post: action.payload}
    case SIDE_POSTS_FETCH:
      return {...state, posts: action.payload}
    case SIDE_BAR_FETCH:
      return {...state, sideBar: action.payload}
    default:
      return state
  }
}