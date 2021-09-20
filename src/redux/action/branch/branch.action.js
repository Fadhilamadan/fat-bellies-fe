import {
  GET_BRANCH_FAILED,
  GET_BRANCH_LOADING,
  GET_BRANCH_SUCCESS,
} from '../../const';

export const isGetBranchLoading = () => {
  return {
    type: GET_BRANCH_LOADING,
  };
};

export const isGetBranchSuccess = (data) => {
  return {
    type: GET_BRANCH_SUCCESS,
    data: data,
  };
};

export const isGetBranchFailed = () => {
  return {
    type: GET_BRANCH_FAILED,
  };
};
