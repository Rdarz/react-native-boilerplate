import {combineReducers} from 'redux';
import HomeReducer from '_screens/home/HomeReducer';
// import ProfileReducer from '_screens/profile/ProfileReducer';

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    home: HomeReducer,
    // profile: ProfileReducer,
    ...asyncReducers,
  });
};

export default {
  makeRootReducer,
};
