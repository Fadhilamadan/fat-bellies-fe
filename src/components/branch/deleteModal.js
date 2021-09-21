import React from 'react';

import { getBranchDelete } from '../../redux/middleware/branch/branchDelete.middleware';

import { connect } from 'react-redux';

const BranchDeleteModal = (props) => {
  const handleUpdate = (branchId) => {
    props.onGetBranchDelete(branchId);
    props.setModal(false);
  };

  return (
    <div className="modal modal-open overscroll-y-auto">
      <div className="modal-box">
        <p className="text-lg	text-center">
          Are you sure want to delete Branch <strong>{props.item.name}</strong>?
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
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBranchDelete: (branchId) => {
      return dispatch(getBranchDelete(branchId));
    },
  };
};

export default connect(mapState, mapDispatchToProps)(BranchDeleteModal);
