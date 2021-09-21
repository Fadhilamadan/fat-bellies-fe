import React, { useState } from 'react';

import { getBuffetUpdate } from '../../redux/middleware/buffet/buffet.middleware';
import { dayStatic } from '../../utils/const/day';

import { connect } from 'react-redux';

const BuffetEditModal = (props) => {
  const [buffetEdit, setBuffetEdit] = useState({
    branch_id: props.item.branch_id,
    plan_name: props.item.plan_name,
    max_capacity: props.item.max_capacity,
    current_capacity: props.item.current_capacity,
    on_demand: props.item.on_demand,
    price: props.item.price,
    day: props.item.day,
    start_time: props.item.start_time,
    end_time: props.item.end_time,
  });

  const handleUpdate = (buffetId) => {
    props.onGetBuffetUpdate(buffetId, buffetEdit);
    props.setModal(false);
  };

  return (
    <div className="modal modal-open overscroll-y-auto">
      <div className="modal-box">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Plan Name</span>
          </label>
          <input
            className="input input-bordered"
            onChange={(e) =>
              setBuffetEdit((val) => ({ ...val, plan_name: e.target.value }))
            }
            placeholder="Japanese Wagyu"
            type="text"
            value={buffetEdit.plan_name}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Max Capacity</span>
            </label>
            <input
              className="input input-bordered"
              onChange={(e) =>
                setBuffetEdit((val) => ({ ...val, max_capacity: e.target.value }))
              }
              placeholder="50"
              type="number"
              value={buffetEdit.max_capacity}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Current Capacity</span>
            </label>
            <input
              className="input input-bordered"
              onChange={(e) =>
                setBuffetEdit((val) => ({
                  ...val,
                  current_capacity: e.target.value,
                }))
              }
              placeholder="10"
              type="number"
              value={buffetEdit.current_capacity}
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            className="input input-bordered"
            onChange={(e) =>
              setBuffetEdit((val) => ({ ...val, price: e.target.value }))
            }
            placeholder="Rp 200.000"
            type="number"
            value={buffetEdit.price}
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Day</span>
            </label>
            <select
              className="select select-bordered"
              onChange={(e) =>
                setBuffetEdit((val) => ({ ...val, day: e.target.value }))
              }
            >
              <option selected="selected" value="">
                Select
              </option>

              {dayStatic.map((item) => {
                return (
                  <>
                    <option
                      selected={buffetEdit.day === item && 'selected'}
                      value={item}
                    >
                      {item}
                    </option>
                  </>
                );
              })}
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">On Demand</span>
            </label>
            <input
              checked={buffetEdit.on_demand}
              className="checkbox"
              onChange={(e) =>
                setBuffetEdit((val) => ({
                  ...val,
                  on_demand: !buffetEdit.on_demand,
                }))
              }
              type="checkbox"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Start Time</span>
            </label>
            <input
              className="input input-bordered"
              onChange={(e) =>
                setBuffetEdit((val) => ({ ...val, start_time: e.target.value }))
              }
              type="time"
              value={buffetEdit.start_time}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">End Time</span>
            </label>
            <input
              className="input input-bordered"
              onChange={(e) =>
                setBuffetEdit((val) => ({ ...val, end_time: e.target.value }))
              }
              type="time"
              value={buffetEdit.end_time}
            />
          </div>
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
    onGetBuffetUpdate: (buffetId, data) => {
      return dispatch(getBuffetUpdate(buffetId, data));
    },
  };
};

export default connect(mapState, mapDispatchToProps)(BuffetEditModal);
