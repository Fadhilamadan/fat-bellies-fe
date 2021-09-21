import {
  GET_BRANCH_DETAIL_FAILED,
  GET_BRANCH_DETAIL_LOADING,
  GET_BRANCH_DETAIL_SUCCESS,
} from '../../const';

export const isGetBranchDetailLoading = () => {
  return {
    type: GET_BRANCH_DETAIL_LOADING,
  };
};

export const isGetBranchDetailSuccess = (data) => {
  return {
    type: GET_BRANCH_DETAIL_SUCCESS,
    data: data,
  };
};

export const isGetBranchDetailFailed = () => {
  return {
    type: GET_BRANCH_DETAIL_FAILED,
  };
};
