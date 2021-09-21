import { apiBuffetUpdate } from '../../../utils/api/buffet';
import {
  isGetBranchFailed,
  isGetBranchLoading,
} from '../../action/branch/branch.action';
import { getBranch } from '../branch/branch.middleware';

export const getBuffetUpdate = (buffetId, data) => {
  return (dispatch) => {
    dispatch(isGetBranchLoading());
    apiBuffetUpdate(buffetId, data)
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
