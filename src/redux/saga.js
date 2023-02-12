import { put, takeLatest, call } from "redux-saga/effects";
import {
  CATEGORIES_ERROR,
  CATEGORIES_LOADING,
  CATEGORIES_SUCCESS,
  CLEAR_ERROR,
  DELETE_CATEGORY,
  DELETE_CATEGORY_ERROR,
  DELETE_CATEGORY_LOADING,
  DELETE_CATEGORY_SUCCESS,
  DELETE_NOTE,
  DELETE_NOTE_ERROR,
  DELETE_NOTE_LOADING,
  DELETE_NOTE_SUCCESS,
  GET_CATEGORIES,
  GET_NOTES,
  GET_NOTES_ERROR,
  GET_NOTES_LOADING,
  GET_NOTES_SUCCESS,
  POST_CATEGORIES,
  POST_CATEGORIES_ERROR,
  POST_CATEGORIES_LOADING,
  POST_CATEGORIES_SUCCESS,
  POST_NOTE,
  POST_NOTE_ERROR,
  POST_NOTE_LOADING,
  POST_NOTE_SUCCESS,
  UPDATE_CATEGORY,
  UPDATE_CATEGORY_ERROR,
  UPDATE_CATEGORY_LOADING,
  UPDATE_CATEGORY_SUCCESS,
  UPDATE_NOTE,
  UPDATE_NOTE_ERROR,
  UPDATE_NOTE_LOADING,
  UPDATE_NOTE_SUCCESS,
} from "./actiontype";
import {
  deleteCategoryApi,
  deleteNoteApi,
  getCategoriesApi,
  getNotesApi,
  postNoteApi,
  putCategoriesApi,
  updateCategoryApi,
  updateNoteApi,
} from "./api";

import { delay } from "./helper";

// ahi khali post maj navi category jay te mate aa banau nai to direct tu result pan mukay..

// function delay(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }

function* getCategoriesSaga(fromSaga) {
  console.log("fromSaga", fromSaga); // postCategorySaga mathi aapu.. aa fromSaga
  //   let connected = yield call(isConnected);
  //   if (connected) {                  // ahi thi direct jse kya reducer ma..
  try {
    // yield put({ type: GET_NOTES_LOADING, payload: true });
    yield put({ type: CATEGORIES_LOADING, payload: true });
    let res = yield call(getCategoriesApi);
    console.log(res);
    if (res.status === 200) {
      // console.log("value", res.result[0].title);

      // ahi hu backend ma mare parameter alag hoy to hu ahi thi aa rte object banai change karisaku..
      // bauj difficulty re 6 so backend ma je name hoy tej rakhisu to esay rese.
      const newCategories = res.result.map((category) => {
        return {
          id: category._id,
          value: category.title,
        };
      });
      yield put({ type: CATEGORIES_SUCCESS, payload: newCategories });
    } else {
      yield put({ type: CATEGORIES_ERROR, payload: res.message });
    }
  } catch (error) {
    yield put({ type: CATEGORIES_ERROR, payload: error.toString() });
  }
  // console.log(fromSaga); // aa jo hu bahar thi call karais tyre aa call vagse etle loading false thase
  // first time i open webpage to call them so those time in fromSaga = {} type not bollean so its call and when i call in post,delete then in this fromSaga is bolean so its not call.
  if (typeof fromSaga !== "boolean") {
    yield put({ type: CLEAR_ERROR });
  } else {
    yield put({ type: CATEGORIES_LOADING, payload: false });
  }
}

// ahi khali post maj navi category jay te mate aa banau nai to direct tu result pan mukay..
function* postCategoriesSaga(data) {
  // console.log(data);
  try {
    // console.log(data);
    yield put({ type: POST_CATEGORIES_LOADING, payload: true });
    let res = yield call(putCategoriesApi, data.payload); // put mate je api hoy te..
    console.log("post", res); // aa res jovu padse ke aama su aave che
    if (res.status === 200) {
      // const newCategory = res.result.map((category) => {
      //   return {
      //     id: category._id,
      //     value: category.title,
      //   };
      // });
      // console.log(newCategory);
      yield call(getCategoriesSaga, true); //ahi hti hu jare call maris tyre to ahi clear error nai vage and niche me clear error marij 6 so tya call thase.
      yield put({ type: POST_CATEGORIES_SUCCESS, payload: res.message });
    } else {
      yield put({ type: POST_CATEGORIES_ERROR, payload: res.message });
    }
  } catch {
    yield put({ type: POST_CATEGORIES_ERROR, payload: error.toString() }); // ahi mane khabar nathi ke aa su che so..
  }
  // const result = yield delay(3000);
  yield call(delay);
  // yield call(() => delay(3000));
  // console.log("delay");
  yield put({ type: CLEAR_ERROR });
  // yield put({ type: POST_CATEGORIES_LOADING, payload: false });

  // yield put({ type: CLEAR_ERROR });
}

function* deleteCategorySaga(data) {
  // console.log(data);
  try {
    yield put({ type: DELETE_CATEGORY_LOADING, payload: true });
    let res = yield call(deleteCategoryApi, data.payload);
    console.log(res);
    yield call(getCategoriesSaga, true);
    if (res.status === 200) {
      yield put({ type: DELETE_CATEGORY_SUCCESS, payload: res.message });
    } else {
      yield put({ type: DELETE_CATEGORY_ERROR, payload: res.message });
    }
  } catch {
    yield put({ type: DELETE_CATEGORY_ERROR, payload: res.toString() });
  }
  // yield put({
  //   type: DELETE_CATEGORY_SUCCESS,
  //   payload: "Category deleted successfully",
  // });
  // ahi aapde delay karavu padse kem ke tartj aa clear call thai jay che.
  yield call(delay);
  yield put({ type: CLEAR_ERROR });
  // yield put({ type: DELETE_CATEGORY_LOADING, payload: false });
}

function* updateCategorySaga(data) {
  // console.log(data);
  try {
    // 1 loading call karavnu..
    yield put({ type: UPDATE_CATEGORY_LOADING, payload: true });
    const res = yield call(updateCategoryApi, data.payload);
    console.log(res);
    // ahi je kam karie te thai jay che matalb ke apde upadte karu to ahu thai gay niche kahli su action thau e batava mate che ..
    yield call(getCategoriesSaga, true); // ahi hu khali get call karau tyre success khali thai jase to tost call nai thay so amre avu karvu pady.
    if (res.status === 200) {
      yield put({ type: UPDATE_CATEGORY_SUCCESS, payload: res.message });
    } else {
      yield put({ type: UPDATE_CATEGORY_ERROR, payload: res.message });
    }
  } catch {
    yield put({ type: UPDATE_CATEGORY_ERROR, payload: res.toString() });
  }

  yield call(delay);
  yield put({ type: CLEAR_ERROR });
  // yield put({ type: UPDATE_CATEGORY_LOADING, payload: false });
}
function* getnotesSaga(fromSaga) {
  // console.log("fromSaga", fromSaga);
  try {
    yield put({ type: GET_NOTES_LOADING, payload: true });
    const res = yield call(getNotesApi);
    // console.log(res);
    if (res.status === 200) {
      yield put({ type: GET_NOTES_SUCCESS, payload: res.result });
    } else {
      yield put({ type: GET_NOTES_ERROR, payload: res.message });
    }
  } catch {
    yield put({ type: GET_NOTES_ERROR, payload: res.toString() });
  }
  if (typeof fromSaga !== "boolean") {
    yield put({ type: CLEAR_ERROR });
  } else {
    yield put({ type: GET_NOTES_LOADING, payload: false });
  }
}

function* postNoteSaga(data) {
  // console.log(data);
  try {
    yield put({ type: POST_NOTE_LOADING, payload: true });
    const res = yield call(postNoteApi, data.payload);
    // console.log(res);
    yield call(getnotesSaga, true);
    if (res.status === 200) {
      yield put({ type: POST_NOTE_SUCCESS, payload: res.message });
    } else {
      yield put({ type: POST_NOTE_ERROR, payload: res.message });
    }
  } catch {
    yield put({ type: POST_NOTE_ERROR, payload: res.toString() });
  }
  // yield put({ type: POST_NOTE_LOADING, payload: false });
  yield call(delay);
  yield put({ type: CLEAR_ERROR });
}

function* updateNoteSaga(data) {
  // console.log(data);
  try {
    yield put({ type: UPDATE_NOTE_LOADING, payload: true });
    const res = yield call(updateNoteApi, data.payload);
    // console.log(res);
    yield call(getnotesSaga, true);
    if (res.status === 200) {
      yield put({ type: UPDATE_NOTE_SUCCESS, payload: res.message });
    } else {
      yield put({ type: UPDATE_NOTE_ERROR, payload: res.message });
    }
  } catch {
    yield put({ type: UPDATE_NOTE_ERROR, payload: res.toString() });
  }
  // yield put({ type: UPDATE_NOTE_LOADING, payload: false });
  yield call(delay);
  yield put({ type: CLEAR_ERROR });
}

function* deleteNoteSaga(data) {
  try {
    yield put({ type: DELETE_NOTE_LOADING, payload: true });
    const res = yield call(deleteNoteApi, data.payload);
    console.log(res);
    yield call(getnotesSaga, true);
    if (res.status === 200) {
      yield put({ type: DELETE_NOTE_SUCCESS, payload: res.message });
    } else {
      yield put({ type: DELETE_NOTE_ERROR, payload: res.message });
    }
  } catch {
    yield put({ type: DELETE_NOTE_ERROR, payload: res.toString() });
  }
  // yield put({ type: DELETE_NOTE_LOADING, payload: false });
  yield call(delay);
  yield put({ type: CLEAR_ERROR });
}
// ahi thi backend ma update thai jase aapde reucer ma kem kar vanu ke e mane live dekhay ui ma etle..
function* watchNotesSaga() {
  yield takeLatest(GET_CATEGORIES, getCategoriesSaga);
  yield takeLatest(POST_CATEGORIES, postCategoriesSaga);
  yield takeLatest(DELETE_CATEGORY, deleteCategorySaga);
  yield takeLatest(UPDATE_CATEGORY, updateCategorySaga);
  yield takeLatest(GET_NOTES, getnotesSaga); // tommorow all are completed ..
  yield takeLatest(POST_NOTE, postNoteSaga);
  yield takeLatest(UPDATE_NOTE, updateNoteSaga);
  yield takeLatest(DELETE_NOTE, deleteNoteSaga);
  // yield takeLatest(ADD_NOTE_ACTION, addNoteSaga);
  // yield takeLatest(UPDATE_NOTE_ACTION, updateNoteSaga);
  // yield takeLatest(ARCHIVE_NOTE_ACTION, archiveNoteSaga);
  // yield takeLatest(DELETE_NOTE_ACTION, deleteNoteSaga);
  // yield takeLatest(CALL_PENDING_SUBMITS_ACTION, callPendingSubmitsSaga);
}
export default watchNotesSaga;

// get sivay badh ma data ne mokal vopadse.. data.payload rite..main api ma.
