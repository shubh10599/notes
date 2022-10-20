import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import RootReducer from "./redux/rootReducer";

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

const store = createStore(RootReducer, applyMiddleware(logger));
export default store;
