export const initialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    // (action.type == "increment"):
    // return {state: state + action.payload}
    // "increment":
    // state + 1;
    //  {state: state + 1};

    case "decrement":
      return state - 1;
      // (action.type == "decrement"):
      return { state: state - action.payload };

    //  (action.type == "decrement"):
    // return state -1;
    // {state: state- 1};
    case "reset":
      // (action.type == "reset"):
      return initialState;

    default:
      state;
  }
};

export default reducer;
