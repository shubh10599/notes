import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./redux/rootReducer";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./saga/rootSaga";

// const initialState = {
//   sidebarShow: true,
// };

// const changeState = (state = initialState, { type, ...rest }) => {
//   switch (type) {
//     case "set":
//       return { ...state, ...rest };
//     default:
//       return state;
//   }
// };   it's not work ..
const sagaMiddleware = createSagaMiddleware();

const store = createStore(RootReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
