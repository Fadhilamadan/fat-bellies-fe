import {
  GET_BRANCH_FAILED,
  GET_BRANCH_LOADING,
  GET_BRANCH_SUCCESS,
} from '../../const';

const initState = {
  isLoading: true,
  isFailed: false,
  item: [],
};

const branchReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_BRANCH_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
        isFailed: false,
      });

    case GET_BRANCH_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        item: action.data,
      });

    case GET_BRANCH_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: true,
      });

    default:
      return state;
  }
};

export default branchReducer;
