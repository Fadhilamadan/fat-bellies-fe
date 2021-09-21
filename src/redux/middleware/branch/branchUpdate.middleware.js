import { apiBranch, apiBranchUpdate } from '../../../utils/api/branch';
import {
  isGetBranchFailed,
  isGetBranchLoading,
} from '../../action/branch/branch.action';

export const getBranchUpdate = (branchId, data) => {
  return (dispatch) => {
    dispatch(isGetBranchLoading());
    apiBranchUpdate(branchId, data)
      .then((res) => {
        if (res.data.status) {
          dispatch(apiBranch());
        } else {
          dispatch(isGetBranchFailed());
        }
      })
      .catch((err) => {
        dispatch(isGetBranchFailed());
      });
  };
};
