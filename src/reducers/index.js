const initialState = {
  lists: [],
};

const listReducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS' :
      newState.lists = action.payload;
      return newState;
    case 'ADD_SUPER_HERO':
      newState.lists = [...newState.lists, action.payload];
      return newState;
    default:
      return state;
  }
};

export default listReducer;
