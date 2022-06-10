import { INCREMENT, DECREMENT, RESET } from "../action/action";

export const initialState = { count: 0 };

export const reducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      count: state.count + 1,
    };
  }

  if (action.type === DECREMENT) {
    return {
      count: state.count - 1,
    };
  }
  if (action.type === RESET) {
    return {
      count: (state.count = 0),
    };
  }
  return state;
};

// export default reducer;
// import { DECREMENT, INCREMENT, SET } from "./actions";

// export const initialState = { count: 0 };

// export const reducer = (state = initialState, action) => {
//   if (action.type === INCREMENT) {
//     return { count: state.count + 1 };
//   }

//   if (action.type === DECREMENT) {
//     return { count: state.count - 1 };
//   }

//   if (action.type === SET) {
//     return { count: parseInt(action.payload, 10) };
//   }

//   return state;
// };
