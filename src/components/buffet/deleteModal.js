import React, { useEffect } from 'react';

import { getBranchDetail } from '../../redux/middleware/branch/branchDetail.middleware';
import { getBuffetDelete } from '../../redux/middleware/buffet/buffetDelete.middleware';

import { connect } from 'react-redux';

const BuffetDeleteModal = (props) => {
  useEffect(() => {
    props.onGetBranchDetail(props.item.branch_id);
  }, [props.item.branch_id]);

  const handleUpdate = (buffetId) => {
    props.onGetBuffetDelete(buffetId);
    props.setModal(false);
  };

  return (
    <div className="modal modal-open overscroll-y-auto">
      <div className="modal-box">
        <p className="text-lg	text-center">
          Are you sure want to delete Buffet <strong>{props.item.plan_name}</strong>{' '}
          from Branch{' '}
          <strong>
            {props.getBranchDetailReducer.isLoading ? (
              <span>Loading...</span>
            ) : (
              props.getBranchDetailReducer.item?.name
            )}
          </strong>
          ?
        </p>

        <div className="modal-action">
          <a className="btn" onClick={() => props.setModal(false)}>
            Cancel
          </a>
          <a className="btn btn-primary" onClick={() => handleUpdate(props.item.id)}>
            Delete
          </a>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    getBranchDetailReducer: state.getBranchDetailReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBranchDetail: (branchId) => {
      return dispatch(getBranchDetail(branchId));
    },
    onGetBuffetDelete: (buffetId) => {
      return dispatch(getBuffetDelete(buffetId));
    },
  };
};

export default connect(mapState, mapDispatchToProps)(BuffetDeleteModal);
