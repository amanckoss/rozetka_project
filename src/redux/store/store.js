import {compose, configureStore} from '@reduxjs/toolkit'
import {postsReducer} from "../reducers/postsReducer";
import createSagaMiddleware from 'redux-saga'
import {mainPageReducer} from "../reducers/mainPageReducer";
import {selectedItemReducer} from "../reducers/selectedItemReducer";

// const sagaMiddleware = createSagaMiddleware()

export default configureStore({
  reducer: {
    shop: postsReducer,
    main: mainPageReducer,
    shopSelect: selectedItemReducer,
  },
}, compose(
  // sagaMiddleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

// sagaMiddleware.run(mySaga)
