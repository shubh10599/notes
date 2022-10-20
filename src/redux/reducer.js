import {
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  CHANGE_STATE,
  UPDATE_CATEGORY,
} from "./actiontype";

const initialState = {
  categoried: [], //ama value kevirite push karvi te sikhavanu che.
  sidebarShow: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return { ...state, categoried: [...state.categoried, action.payload] }; // mare ahi karvu padse naki tya.

    case UPDATE_CATEGORY: {
      const selectedIndex = state.categoried.findIndex(
        (item) => item.id === action.payload.id
      );
      state.categoried[selectedIndex] = action.payload;
      return { ...state, categoried: [...state.categoried] }; // mare ahi karvu padse naki tya.
    }
    // update category banavani..

    // aajunu ready..
    // return Object.assign({}, state, {
    //   categoried: [...state.categoried, action.payload],

    // notes: [
    // ...state.pendingAddNotes,
    // ...state.pendingUpdateNotes,
    // ...action.payload,
    // ],
    // error: '',
    // loading: false,
    // });

    // me try karel
    // return [...state, {}];
    // state = {
    //   ...state,
    //   categoried: [...state.categoried, action.payload],
    // };
    // case REMOVE_CATEGORY:
    //   return (state = state.filter((x) => {
    //     return x.id !== action.payload.id;
    //   }));
    case REMOVE_CATEGORY:
      // return [...state];
      return (state = state.categoried.filter((x) => {
        return x.id !== action.payload.id;
      }));

    // case REMOVE_TO_CART :
    // state.pop();       // data remove karva mate..
    // return [
    //     ...state,
    // ]
  }
  return state;
};
export const changeState = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_STATE":
      return {
        ...state,
        sidebarShow: action.payload,
      };
    default:
      return state;
  }
}; // ano me hajji use nai karyo kem ke khabar nathi so..

export default reducer;

// const initialState = {
//     sidebarShow: true,
//   };

//   const changeState = (state = initialState, { type, ...rest }) => {
//     switch (type) {
//       case "set":
//         return { ...state, ...rest };
//       default:
//         return state;
//     }
//   };

// case 'add' : {
//   state = {
//     ...state,
//     result : state.result + action.payload,   aa koi agad na project jevu icecream type hoy to aa thsy.
//     categoried : [...state.categoried,action.payload]
//   };
// }

// genray kevu hoy ke ...state, action.payload aa rite aap vanu hoy barobar but 1 karta vadhre hoy to state
// ni property use karvani like ke result : state.result+action.payload, 2 hoy to 2 aa rite use karvani..

// case 'remove' : {  // aa rite aapde use kari sakie but biju reducer banau pade.
//   state ={
//     ...state,
//     result : action.payload
//   }
// }
