import {GET_USER_DETAILS} from './HomeAction';

const ACTION_HANDLERS = {
  [GET_USER_DETAILS]: (state, action) => ({
    ...state,
    userDetails: action.payload,
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
