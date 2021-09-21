import {
  GET_BRANCH_DETAIL_FAILED,
  GET_BRANCH_DETAIL_LOADING,
  GET_BRANCH_DETAIL_SUCCESS,
} from '../../const';

const initState = {
  isLoading: true,
  isFailed: false,
  item: [],
};

const branchDetailReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_BRANCH_DETAIL_LOADING:
      return Object.assign({}, state, {
        isLoading: true,
        isFailed: false,
      });

    case GET_BRANCH_DETAIL_SUCCESS:
      return Object.assign({}, state, {
        isLoading: false,
        item: action.data,
      });

    case GET_BRANCH_DETAIL_FAILED:
      return Object.assign({}, state, {
        isLoading: false,
        isFailed: true,
      });

    default:
      return state;
  }
};

export default branchDetailReducer;
