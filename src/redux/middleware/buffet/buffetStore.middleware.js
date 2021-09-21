import { apiBuffetStore } from '../../../utils/api/buffet';
import {
  isGetBranchFailed,
  isGetBranchLoading,
} from '../../action/branch/branch.action';
import { getBranch } from '../branch/branch.middleware';

export const getBuffetStore = (data) => {
  return (dispatch) => {
    dispatch(isGetBranchLoading());
    apiBuffetStore(data)
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
