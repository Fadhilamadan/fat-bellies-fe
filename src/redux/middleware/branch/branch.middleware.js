import { apiBranch, apiBranchUpdate } from '../../../utils/api/branch';
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

export const getBranchUpdate = (branchId, data) => {
  return (dispatch) => {
    dispatch(isGetBranchLoading());
    apiBranchUpdate(branchId, data)
      .then((res) => {
        if (res.data.status) {
          apiBranch()
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
        } else {
          dispatch(isGetBranchFailed());
        }
      })
      .catch((err) => {
        dispatch(isGetBranchFailed());
      });
  };
};
