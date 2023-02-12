import mainApi from "../lib/mainApi";

export const getCategoriesApi = () => {
  const url = "/categories/getCategories";
  let result = mainApi.GET(url);
  return result;
};

// put mate je api hoy te
export const putCategoriesApi = (data) => {
  // console.log(data);
  const url = "/categories/addCategory";
  let result = mainApi.POST(url, data);
  return result;
};

export const deleteCategoryApi = (data) => {
  // console.log(data);
  const url = "/categories/deleteCategory";
  // const id = data.reduceer.id; // aa rite ahi id aapvani thase..
  const result = mainApi.PUT(url, data);
  return result;
};

export const updateCategoryApi = (data) => {
  const url = "/categories/updateCategory";
  const result = mainApi.PUT(url, data);
  return result;
};

export const getNotesApi = () => {
  const url = "/notes/getNotes";
  return mainApi.GET(url);
};

export const postNoteApi = (data) => {
  const url = "/notes/addNote";
  const result = mainApi.POST(url, data);
  return result;
};

export const updateNoteApi = (data) => {
  console.log(data);
  const url = "/notes/updateNote";
  const result = mainApi.PUT(url, data);
  return result;
};

export const deleteNoteApi = (data) => {
  console.log(data);
  const url = "/notes/deleteNote";
  const result = mainApi.PUT(url, data);
  return result;
};
