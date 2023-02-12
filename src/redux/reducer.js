// import Category from "src/views/Notes/Category";
import {
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SHOW_SLIDEBAR,
  UPDATE_CATEGORY,
  ADD_NOTE,
  SEARCH_CATEGORY,
  UPDATE_NOTE,
  REMOVE_NOTE,
  CATEGORIES_SUCCESS,
  CATEGORIES_ERROR,
  CATEGORIES_LOADING,
  POST_CATEGORIES_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_ERROR,
  UPDATE_CATEGORY_SUCCESS,
  POST_CATEGORIES_ERROR,
  CLEAR_ERROR,
  POST_CATEGORIES_LOADING,
  DELETE_CATEGORY_LOADING,
  UPDATE_CATEGORY_LOADING,
  GET_NOTES_SUCCESS,
  POST_NOTE_SUCCESS,
  UPDATE_NOTE_SUCCESS,
  GET_NOTES_LOADING,
  GET_NOTES_ERROR,
  POST_NOTE_LOADING,
  POST_NOTE_ERROR,
  UPDATE_NOTE_LOADING,
  UPDATE_NOTE_ERROR,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_LOADING,
  DELETE_NOTE_ERROR,
} from "./actiontype";

const initialState = {
  categories: [], //ama value kevirite push karvi te sikhavanu che.
  sidebarShow: true,
  notes: [],
  message: "",
  // searchCategory: [],
  // state banavo padse ek success..  bacehnd ma jyre aapde connect karie to kahli message j lavano baki badhu tya thai jase.
  success: "",
  error: "",
  loading: false,
};
const reducer = (state = initialState, action) => {
  // console.log(state.notes);
  switch (action.type) {
    case ADD_CATEGORY: {
      // aa {} khali block scop mate ke bhai atla sudhi che em apdi jan mate..
      return {
        ...state,
        categories: [...state.categories, action.payload],
        // searchCategory: [...state.categories],
      }; // mare ahi karvu padse naki tya.
    }
    // aa rite pan thay upar nicche banne same j che khali samaj vani che..
    case UPDATE_CATEGORY: {
      const selectedIndex = state.categories.findIndex(
        (item) => item.id === action.payload.id
      );
      state.categories[selectedIndex] = action.payload;
      return { ...state, categories: [...state.categories] }; // aa same j che khali ama mare select ksru te sodhavanu hatu tethi me uppar na step karya..
    }

    case ADD_NOTE: {
      return { ...state, notes: [...state.notes, action.payload] };
    }
    // update category banavani..

    // aajunu ready..
    // return Object.assign({}, state, {
    //   categories: [...state.categories, action.payload],

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
    //   categories: [...state.categories, action.payload],
    // };
    // case REMOVE_CATEGORY:
    //   return (state = state.filter((x) => {
    //     return x.id !== action.payload.id;
    //   }));
    case REMOVE_CATEGORY: {
      // return [...state];
      // return (state = state.categories.filter((x) => {
      //   //   return x.id !== action.payload.id;
      //   console.log(x, action.payload);
      // }));    // aa kayre karya jyare aapde intial state ma koij array aa rite na hoy tyre.

      return {
        ...state,
        categories: state.categories.filter((x) => x.id !== action.payload.id),
        // categories:[state.categories.filter((x) => x.id !== action.payload.id)],   // aa karvathi su thase ke array ma aa categories mathi filter karse ane e je malse e vastu categories : [aa ma aapse] , ane aapde categories vala array mathi sodhavanu hatu so upper vadu karyu. ano ans. = categories : [array(0)]  aavu aavtu hatu ane aapde categories : [] aavu joy tu hatu tethi..
      };
    }
    // case REMOVE_TO_CART :
    // state.pop();       // data remove karva mate..
    // return [
    //     ...state,
    // ]
    case SHOW_SLIDEBAR: {
      return {
        ...state,
        sidebarShow: action.payload,
      };
    }
    case SEARCH_CATEGORY: {
      return {
        ...state,
        searchCategory: state.searchCategory.filter((item) =>
          console.log(item)
        ), // ahi baki che..
      };
    }
    // ahi mare ene kevu padse ke bhai tu aa id vali note liya ane ema update kar.
    case UPDATE_NOTE: {
      const selectIndex = state.notes.findIndex(
        (item) => item.id === action.payload.id
      );
      // console.log(state.notes[selectIndex].createdAt);
      const createdAt = state.notes[selectIndex].createdAt;
      state.notes[selectIndex] = { createdAt, ...action.payload };
      return { ...state, notes: [...state.notes] };
    }
    // case UPDATE_CATEGORY: {
    //   const selectedIndex = state.categories.findIndex(
    //     (item) => item.id === action.payload.id
    //   );
    //   state.categories[selectedIndex] = action.payload;
    //   return { ...state, categories: [...state.categories] }; // aa same j che khali ama mare select ksru te sodhavanu hatu tethi me uppar na step karya..
    // }
    case REMOVE_NOTE: {
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== action.payload.id),
      };
    }

    // aa badhi me backend ne connect karva mate tehhain banai che upper ni khali reducer mate che.
    // apde ahi koi object nai okal vani kem ke e direct bscke mathi lain aavse to khali ahi message j print karavano.
    case CATEGORIES_SUCCESS: {
      return {
        ...state,
        categories: action.payload,
      };
    }
    case CATEGORIES_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case CATEGORIES_LOADING: {
      // console.log(action.payload);
      return {
        ...state,
        loading: action.payload,
      };
    }
    // categories put karava mate mare upper ni jem payload add karvo padse..
    case POST_CATEGORIES_SUCCESS: {
      return {
        ...state,
        // categories: [...state.categories, action.payload],
        success: action.payload,
        // categories: action.payload,
      };
    }
    case POST_CATEGORIES_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case POST_CATEGORIES_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case DELETE_CATEGORY_SUCCESS: {
      // aapde ahi pela jovu padse ke kai value aave che..
      // console.log(action.payload);
      return {
        ...state,
        // categories : state.categories.filter(Category => Category.id),
        success: action.payload,
      };
    }
    case DELETE_CATEGORY_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case DELETE_CATEGORY_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    case UPDATE_CATEGORY_SUCCESS: {
      // console.log(action.payload);
      // const selectedIndex = state.categories.findIndex(item => item.id === action.payload.id);
      // state.categories[selectedIndex] = {}
      return {
        ...state,
        success: action.payload,
        // categories: [...state.categories, action.payload],
      };
    }
    case UPDATE_CATEGORY_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case GET_NOTES_SUCCESS: {
      // console.log(state.categories);
      return {
        ...state,
        notes: action.payload,
      };
    }

    case GET_NOTES_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case GET_NOTES_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case POST_NOTE_SUCCESS: {
      return {
        ...state,
        success: action.payload,
      };
    }

    case POST_NOTE_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case POST_NOTE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case UPDATE_NOTE_SUCCESS: {
      return {
        ...state,
        success: action.payload,
      };
    }

    case UPDATE_NOTE_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case UPDATE_NOTE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }

    case DELETE_NOTE_SUCCESS: {
      return {
        ...state,
        success: action.payload,
      };
    }
    case DELETE_NOTE_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }

    case DELETE_NOTE_ERROR: {
      return {
        ...state,
        error: action.payload,
      };
    }
    // last ma e message ne khali karva padse to ena mate thi ne apde clear_error name nu banau.
    // ane aa direct call thai jay che ane call karvani jarur nai padti..
    // apde loading ma pan same ke upper loading karaisu ane pa6i call vagse auto clear_error ne etle ban thijase.
    // aa direct call thavanu karan e 6 ke aa clear me get karvu tya use arel che etle.. aa darek vakhte call thay so aa clear call vagi jase..
    case CLEAR_ERROR: {
      return {
        ...state,
        success: "",
        error: "",
        loading: false,
      };
    }
    default:
      return state;
  }
};

// export const changeState = (state = initialState, action) => {
//   switch (action.type) {
//     case "CHANGE_STATE":
//       return {
//         ...state,
//         sidebarShow: action.payload,
//       };
//     default:
//       return state;
//   }
// }; // ano me hajji use nai karyo kem ke khabar nathi so..

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
//     categories : [...state.categories,action.payload]
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
