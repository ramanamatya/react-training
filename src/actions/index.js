import axios from 'axios';

export const getSuperHeroList = () => (dispatch) => {
  const url = 'https://ramanamatya.github.io/react-training/json/list.json';
  dispatch({ type: 'FETCH_DATA_IN_PROGRESS' });
  return axios.get(url)
    .then((response) => {
      dispatch({
        type: 'FETCH_DATA_SUCCESS',
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: 'FETCH_DATA_ERROR',
      });
    });
};

export const addSuperHero = params => ({
  type: 'ADD_SUPER_HERO',
  payload: params,
});
