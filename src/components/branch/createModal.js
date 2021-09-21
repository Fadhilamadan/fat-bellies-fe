import React, { useState } from 'react';

import { getBranchStore } from '../../redux/middleware/branch/branchStore.middleware';
import { timeStatic } from '../../utils/const/time';

import { connect } from 'react-redux';

const BranchCreateModal = (props) => {
  const [branchCreate, setBranchCreate] = useState({
    name: null,
    latitude: null,
    longitude: null,
    opening_hours: null,
  });

  const handleStore = () => {
    props.onGetBranchStore(branchCreate);
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
              setBranchCreate((val) => ({ ...val, name: e.target.value }))
            }
            placeholder="Branch Name"
            type="text"
            value={branchCreate.name}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Latitude</span>
          </label>
          <input
            className="input input-bordered"
            onChange={(e) =>
              setBranchCreate((val) => ({ ...val, latitude: e.target.value }))
            }
            placeholder="Latitude"
            type="text"
            value={branchCreate.latitude}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Longitude</span>
          </label>
          <input
            className="input input-bordered"
            onChange={(e) =>
              setBranchCreate((val) => ({ ...val, longitude: e.target.value }))
            }
            placeholder="Longitude"
            type="text"
            value={branchCreate.longitude}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Opening Hour</span>
          </label>
          <select
            className="select select-bordered"
            onChange={(e) =>
              setBranchCreate((val) => ({ ...val, opening_hours: e.target.value }))
            }
          >
            <option selected="selected" value="">
              Select
            </option>

            {timeStatic.map((item) => {
              return (
                <>
                  <option
                    selected={branchCreate.opening_hours === item && 'selected'}
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
          <a className="btn btn-primary" onClick={() => handleStore()}>
            Create
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
    onGetBranchStore: (data) => {
      return dispatch(getBranchStore(data));
    },
  };
};

export default connect(mapState, mapDispatchToProps)(BranchCreateModal);
