import {GET_PLANTS} from './HomeAction';

const ACTION_HANDLERS = {
  [GET_PLANTS]: (state, action) => ({
    ...state,
    plants: action.payload,
  }),
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {};

export default function HomeReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
