export const GET_PLANT_DETAILS = 'GET_PLANT_DETAILS';

// -------------------Auth Loading Actions--------------------

export const getPlantDetailsSuccess = payload => {
  return {
    type: GET_PLANT_DETAILS,
    payload,
  };
};
