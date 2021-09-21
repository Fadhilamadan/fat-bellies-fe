import { apiBuffetDelete } from '../../../utils/api/buffet';
import {
  isGetBranchFailed,
  isGetBranchLoading,
} from '../../action/branch/branch.action';
import { getBranch } from '../branch/branch.middleware';

export const getBuffetDelete = (buffetId) => {
  return (dispatch) => {
    dispatch(isGetBranchLoading());
    apiBuffetDelete(buffetId)
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
