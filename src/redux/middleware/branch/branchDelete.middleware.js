import { apiBranchDelete } from '../../../utils/api/branch';
import {
  isGetBranchFailed,
  isGetBranchLoading,
} from '../../action/branch/branch.action';

import { getBranch } from './branch.middleware';

export const getBranchDelete = (branchId) => {
  return (dispatch) => {
    dispatch(isGetBranchLoading());
    apiBranchDelete(branchId)
      .then((res) => {
        if (res.data.status) {
          dispatch(getBranch());
        } else {
          dispatch(isGetBranchFailed());
        }
      })
      .catch((err) => {
        dispatch(isGetBranchFailed());
      });
  };
};
