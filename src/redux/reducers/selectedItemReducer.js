import {FETCH_SELECTED_ITEM} from "../actions/shopType";

const initialState = {
  item: {
    title: '',
    rate: 0,
    code: '',
    imagesURL: [],
    price: 0
  },
  shop: {
    name: '',
    rate: 0,
    rateAmount: 0,
    delivery: []
  }
}

export const selectedItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SELECTED_ITEM: {
      console.log(action.payload)
      return {...state, item: action.payload.item, shop: action.payload.shop}
    }
    default:
      return state
  }
}