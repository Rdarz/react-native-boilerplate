import {getUserDetailsSuccess} from './HomeAction';
import {get} from 'services/AxiosClient';
import api from 'common/constants/ApiConstants';

export const getUserDetails = (props = null) => {
  return async (dispatch, getState) => {
    return await get(
      api.fetchUserDetails,
      onSuccessData => {
        console.log('onSuccessData====>>>', onSuccessData);
        dispatch(getUserDetailsSuccess(onSuccessData));
        // setLoader(false)
      },
      OnFailureData => {
        // setLoader(false)
      },
      error => {
        console.log('INSIDE APP CONFIG', error);
        // setLoader(false)
        // dispatch(setErrorSuccess(error.msg))
      },
    );
  };
};
