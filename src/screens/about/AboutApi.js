import {getPlantDetailsSuccess} from './AboutAction';
import {get} from '~/src/services/AxiosClient';
import api from '~/src/common/constants/ApiConstants';
import {TREFLE_TOKEN} from 'react-native-dotenv';

export const getPlantDetails = (props = null, id) => {
  return async (dispatch, getState) => {
    const url = `${api.fetchPlants}/${id}`;
    return await get(
      url,
      {
        params: {token: TREFLE_TOKEN},
      },
      onSuccessData => {
        console.log('onSuccessData====>>>', onSuccessData);
        dispatch(getPlantDetailsSuccess(onSuccessData));
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
