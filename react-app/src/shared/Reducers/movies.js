import { FETCH_MOVIES } from '../../shared/actions/types';

const initialState = {
  movies: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        movies: [...action.payload]
      };
    default:
      return state;
  }
};
export default movieReducer;