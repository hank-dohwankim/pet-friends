import axios from 'axios';
import {
  PET_LIST_REQUEST,
  PET_LIST_SUCCESS,
  PET_LIST_FAIL,
  PET_DETAILS_REQUEST,
  PET_DETAILS_SUCCESS,
  PET_DETAILS_FAIL,
} from '../constants/petConstants.js';

export const petDetailAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PET_DETAILS_REQUEST });

    const { data } = await axios.get(`/api/pets/${id}`);

    dispatch({
      type: PET_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PET_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listPetsAction = () => async (dispatch) => {
  try {
    dispatch({ type: PET_LIST_REQUEST });

    const { data } = await axios.get('/api/pets');

    dispatch({
      type: PET_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PET_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
