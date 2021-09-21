import { apiBranchDetail } from '../../../utils/api/branch';
import {
  isGetBranchDetailFailed,
  isGetBranchDetailLoading,
  isGetBranchDetailSuccess,
} from '../../action/branch/branchDetail.action';

export const getBranchDetail = (branchId) => {
  return (dispatch) => {
    dispatch(isGetBranchDetailLoading());
    apiBranchDetail(branchId)
      .then((res) => {
        if (res.data.status) {
          dispatch(isGetBranchDetailSuccess(res.data.data));
        } else {
          dispatch(isGetBranchDetailFailed());
        }
      })
      .catch((err) => {
        dispatch(isGetBranchDetailFailed());
      });
  };
};
