import axios from "axios";
import {
  PROFILE_LOAD_REQUEST,
  PROFILE_LOAD_SUCCESS,
  PROFILE_LOAD_FAIL,
} from "../constants/profileConstants";

export const profileLoadAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: PROFILE_LOAD_REQUEST });

    const { data } = await axios.get(`/api/profiles/${id}`);

    dispatch({
      type: PROFILE_LOAD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PROFILE_LOAD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
