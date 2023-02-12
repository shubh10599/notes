import {
  ADD_CATEGORY,
  ADD_NOTE,
  SHOW_SLIDEBAR,
  REMOVE_CATEGORY,
  UPDATE_CATEGORY,
  SEARCH_CATEGORY,
  UPDATE_NOTE,
  REMOVE_NOTE,
  GET_CATEGORIES,
  POST_CATEGORIES,
  DELETE_CATEGORY,
  GET_NOTES,
  POST_NOTE,
  DELETE_NOTE,
} from "./actiontype";

export const addCategory = (category) => {
  return {
    type: ADD_CATEGORY,
    payload: category,
  };
};
// AA ME REDUCER MA USE KARI HATI..
// export const updateCategory = (category) => {
//   return {
//     type: UPDATE_CATEGORY,
//     payload: category,
//   };
// };

export const removeCategory = (category) => {
  return {
    type: REMOVE_CATEGORY,
    payload: category,
  };
};

export const toggleSidebar = (value) => {
  return {
    type: SHOW_SLIDEBAR,
    payload: value,
  };
};

export const addNote = (note) => {
  // console.log(note);
  return {
    type: ADD_NOTE,
    payload: note,
  };
};

export const searchCategory = (searchAction) => {
  return {
    type: SEARCH_CATEGORY,
    payload: searchAction,
  };
};

// export const updateNote = (note) => {
//   return {
//     type: UPDATE_NOTE,
//     payload: note,
//   };
// };

export const removeNote = (note) => {
  return {
    type: REMOVE_NOTE,
    payload: note,
  };
};

export const getCategories = () => {
  return {
    type: GET_CATEGORIES, // jo aa hase to sidho call saga ma vagse..
  };
};

export const postCategories = (data) => {
  // console.log(data);
  return {
    type: POST_CATEGORIES,
    payload: data,
  };
};

export const deleteCategory = (data) => {
  return {
    type: DELETE_CATEGORY,
    payload: data,
  };
};

export const updateCategory = (data) => {
  // console.log(data);
  return {
    type: UPDATE_CATEGORY,
    payload: data, // saga ma call vagse..
  };
};

export const getNotes = () => {
  return {
    type: GET_NOTES, // direct saga ma
  };
};

export const postNote = (data) => {
  // console.log(data);
  return {
    type: POST_NOTE,
    payload: data,
  }; // saga flight
};

export const updateNote = (data) => {
  // console.log(data);
  return {
    type: UPDATE_NOTE,
    payload: data,
  }; //saga
};

export const deleteNote = (data) => {
  return {
    type: DELETE_NOTE,
    payload: data, //saga
  };
};
