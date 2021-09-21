import getBranchReducer from './reducer/branch/branch.reducer';
import getBranchDetailReducer from './reducer/branch/branchDetail.reducer';

import { combineReducers } from 'redux';

export default combineReducers({
  getBranchReducer,
  getBranchDetailReducer,
});
