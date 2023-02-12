import { fork } from "redux-saga/effects";

import watchNotesSaga from "../redux/saga";
// import watchActivationSaga from '../screens/ActivationScreen/saga';
// import {watchGetChecksheetAsync} from '../screens/NewCheckSheet/saga';
// import {watchSubmitIncidentAsync} from '../screens/ReportSubmission/saga';

export function* rootSaga() {
  // aa lava nu karan e che ke aahi saga mathi lavan karan e che ke tya me badhi call karaiche etle..
  yield fork(watchNotesSaga);
  // yield fork(watchActivationSaga);
  // yield fork(watchGetChecksheetAsync);
  // yield fork(watchSubmitIncidentAsync);
}
