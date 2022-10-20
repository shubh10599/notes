import {
  ADD_CATEGORY,
  CHANGE_STATE,
  REMOVE_CATEGORY,
  UPDATE_CATEGORY,
} from "./actiontype";

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    payload: category,
  };
};
export const updateCategory = (category) => {
  return {
    type: UPDATE_CATEGORY,
    payload: category,
  };
};

export const removeCategory = (category) => {
  return {
    type: REMOVE_CATEGORY,
    payload: category,
  };
};

export const set = () => {
  return {
    type: CHANGE_STATE,
    payload: true,
  };
};
