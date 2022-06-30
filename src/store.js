import {compose, configureStore} from '@reduxjs/toolkit'
import {postsReducer} from "./redux/postsReducer";

export default configureStore({
  reducer: {
    posts: postsReducer
  },

}, compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))