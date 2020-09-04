import {combineReducers} from 'redux';
import HomeReducer from '~/src/screens/home/HomeReducer';
import AboutReducer from '~/src/screens/about/AboutReducer';
// import ProfileReducer from '_screens/profile/ProfileReducer';

export const makeRootReducer = asyncReducers => {
  return combineReducers({
    home: HomeReducer,
    about: AboutReducer,
    // profile: ProfileReducer,
    ...asyncReducers,
  });
};

export default {
  makeRootReducer,
};
