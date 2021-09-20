import { apiBranch } from '../../../utils/api/branch';
import {
  isGetBranchFailed,
  isGetBranchLoading,
  isGetBranchSuccess,
} from '../../action/branch/branch.action';

export const getBranch = (name, openingHours, minPrice, maxPrice) => {
  return (dispatch) => {
    dispatch(isGetBranchLoading());
    apiBranch(name, openingHours, minPrice, maxPrice)
      .then((res) => {
        if (res.data.status) {
          dispatch(isGetBranchSuccess(res.data.data));
        } else {
          dispatch(isGetBranchFailed());
        }
      })
      .catch((err) => {
        dispatch(isGetBranchFailed());
      });
  };
};
