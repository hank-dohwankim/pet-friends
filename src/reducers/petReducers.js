import {
  PET_LIST_REQUEST,
  PET_LIST_SUCCESS,
  PET_LIST_FAIL,
  PET_DETAILS_REQUEST,
  PET_DETAILS_SUCCESS,
  PET_DETAILS_FAIL,
} from '../constants/petConstants.js';

export const petDetailsReducer = (state = { pet: {} }, action) => {
  switch (action.type) {
    case PET_DETAILS_REQUEST:
      return { ...state, loading: true };
    case PET_DETAILS_SUCCESS:
      return { loading: false, pet: action.payload };
    case PET_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const PetListReducer = (state = { pets: [] }, action) => {
  switch (action.type) {
    case PET_LIST_REQUEST:
      return { pets: [] };
    case PET_LIST_SUCCESS:
      return {
        pets: action.payload,
      };
    case PET_LIST_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
