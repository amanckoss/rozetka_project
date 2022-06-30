import {compose, configureStore} from '@reduxjs/toolkit'
import {postsReducer} from "../reducers/postsReducer";
import createSagaMiddleware from 'redux-saga'
import {mainPageReducer} from "../reducers/mainPageReducer";

// const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    shop: postsReducer,
    main: mainPageReducer,
  },
}, compose(
  // sagaMiddleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

// sagaMiddleware.run(mySaga)
