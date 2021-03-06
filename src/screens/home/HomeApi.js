import {getPlantsSuccess} from './HomeAction';
import {get} from '~/src/services/AxiosClient';
import api from '~/src/common/constants/ApiConstants';
import {TREFLE_TOKEN} from 'react-native-dotenv';

export const getPlants = (props = null, searchText) => {
  return async (dispatch, getState) => {
    const url = `${api.fetchPlants}/search`;
    return await get(
      url,
      {
        params: {token: TREFLE_TOKEN, q: searchText},
      },
      onSuccessData => {
        console.log('onSuccessData====>>>', onSuccessData);
        dispatch(getPlantsSuccess(onSuccessData));
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
