const initialState = {
  data: [],
  isLoading: false,
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DATA":
      return {
        ...state.data,
        isLoading: false,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};
