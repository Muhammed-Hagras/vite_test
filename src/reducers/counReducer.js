export const initialState = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    // case (action.type == "increment"):
    // return state+1;
    // {state: state+1}

    case  "decrement":
      return state - 1;
      // case (action.type == "decrement"):
      // return state -1;

    case   "reset":
      // case (action.type == "reset"):
      return initialState;

    default:
      state;
  }
};

export default reducer;
