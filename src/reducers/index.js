const initialState = {
  lists: [],
  isLoading: false,
};

const listReducer = (state = initialState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'FETCH_DATA_SUCCESS' :
      newState.lists = action.payload;
      newState.isLoading = false;
      return newState;
    case 'ADD_SUPER_HERO' :
      const hero = action.payload;
      console.log(hero);
      newState.lists = [...newState.lists, hero];
      return newState;
    case 'IN_PROGRESS' :
      newState.isLoading = true;
      return newState;
    default:
      return state;
  }
};

export default listReducer;
