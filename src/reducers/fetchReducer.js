export const initialState = {
  loading: true,
  error: "",
  posts: {},
};

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: "",
        posts: action.payload
      };

      case "FETCH_ERROR":
        return {
          loading: false,
          error: "something wrong",
          posts: {}
        };
  }
};

export default fetchReducer;
