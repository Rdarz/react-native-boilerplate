import {GET_PLANT_DETAILS} from './AboutAction';

const ACTION_HANDLERS = {
  [GET_PLANT_DETAILS]: (state, action) => ({
    ...state,
    plantDetails: action.payload,
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
