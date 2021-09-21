import { apiBranch } from '../../../utils/api/branch';
import { apiBuffetUpdate } from '../../../utils/api/buffet';
import {
  isGetBranchFailed,
  isGetBranchLoading,
  isGetBranchSuccess,
} from '../../action/branch/branch.action';

export const getBuffetUpdate = (buffetId, data) => {
  return (dispatch) => {
    dispatch(isGetBranchLoading());
    apiBuffetUpdate(buffetId, data)
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
