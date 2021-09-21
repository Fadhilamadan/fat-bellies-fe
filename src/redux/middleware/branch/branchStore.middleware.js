import { apiBranchStore } from '../../../utils/api/branch';
import {
  isGetBranchFailed,
  isGetBranchLoading,
} from '../../action/branch/branch.action';

import { getBranch } from './branch.middleware';

export const getBranchStore = (data) => {
  return (dispatch) => {
    dispatch(isGetBranchLoading());
    apiBranchStore(data)
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
