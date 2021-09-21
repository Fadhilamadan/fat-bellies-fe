import React, { useState } from 'react';

import { getBranchUpdate } from '../../redux/middleware/branch/branchUpdate.middleware';
import { timeStatic } from '../../utils/const/time';

import { connect } from 'react-redux';

const BranchEditModal = (props) => {
  const [branchEdit, setBranchEdit] = useState({
    name: props.item.name,
    latitude: props.item.latitude,
    longitude: props.item.longitude,
    opening_hours: props.item.opening_hours,
  });

  const handleUpdate = (branchId) => {
    props.onGetBranchUpdate(branchId, branchEdit);
    props.setModal(false);
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Branch Name</span>
          </label>
          <input
            className="input input-bordered"
            onChange={(e) =>
              setBranchEdit((val) => ({ ...val, name: e.target.value }))
            }
            placeholder="Branch Name"
            type="text"
            value={branchEdit.name}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Latitude</span>
          </label>
          <input
            className="input input-bordered"
            onChange={(e) =>
              setBranchEdit((val) => ({ ...val, latitude: e.target.value }))
            }
            placeholder="Latitude"
            type="text"
            value={branchEdit.latitude}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Longitude</span>
          </label>
          <input
            className="input input-bordered"
            onChange={(e) =>
              setBranchEdit((val) => ({ ...val, longitude: e.target.value }))
            }
            placeholder="Longitude"
            type="text"
            value={branchEdit.longitude}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Opening Hour</span>
          </label>
          <select
            className="select select-bordered"
            onChange={(e) =>
              setBranchEdit((val) => ({ ...val, opening_hours: e.target.value }))
            }
          >
            <option selected="selected" value="">
              Select
            </option>

            {timeStatic.map((item) => {
              return (
                <>
                  <option
                    selected={branchEdit.opening_hours === item && 'selected'}
                    value={item}
                  >
                    {item}
                  </option>
                </>
              );
            })}
          </select>
        </div>

        <div className="modal-action">
          <a className="btn" onClick={() => props.setModal(false)}>
            Cancel
          </a>
          <a className="btn btn-primary" onClick={() => handleUpdate(props.item.id)}>
            Update
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
    onGetBranchUpdate: (branchId, data) => {
      return dispatch(getBranchUpdate(branchId, data));
    },
  };
};

export default connect(mapState, mapDispatchToProps)(BranchEditModal);
