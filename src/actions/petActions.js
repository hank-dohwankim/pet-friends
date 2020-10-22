import {
  PET_LIST_REQUEST,
  PET_LIST_SUCCESS,
  PET_LIST_FAIL,
  PET_DETAILS_REQUEST,
  PET_DETAILS_SUCCESS,
  PET_DETAILS_FAIL,
} from '../constants/petConstants.js';
import { getPetById, getPetList } from './../config/firestore/firestoreService';

export const petDetail = (id) => async (dispatch) => {
  try {
    dispatch({ type: PET_DETAILS_REQUEST });

    const { data } = await getPetById(id);

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

export const petList = () => async (dispatch) => {
  try {
    dispatch({ type: PET_LIST_REQUEST });
    let petList = getPetList();
    const { data } = petList[0];

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
