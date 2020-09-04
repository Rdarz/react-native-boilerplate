export const GET_PLANTS = 'GET_PLANTS';

// -------------------Auth Loading Actions--------------------

export const getPlantsSuccess = payload => {
  return {
    type: GET_PLANTS,
    payload,
  };
};
