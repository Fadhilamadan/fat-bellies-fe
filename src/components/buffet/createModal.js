import React, { useState } from 'react';

import { getBuffetStore } from '../../redux/middleware/buffet/buffetStore.middleware';
import { dayStatic } from '../../utils/const/day';

import { connect } from 'react-redux';

const BuffetCreateModal = (props) => {
  const [buffetCreate, setBuffetCreate] = useState({
    branch_id: props.item.id,
    plan_name: null,
    max_capacity: null,
    current_capacity: null,
    on_demand: null,
    price: null,
    day: null,
    start_time: null,
    end_time: null,
  });

  const handleStore = () => {
    props.onGetBuffetStore(buffetCreate);
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
              setBuffetCreate((val) => ({ ...val, plan_name: e.target.value }))
            }
            placeholder="Japanese Wagyu"
            type="text"
            value={buffetCreate.plan_name}
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
                setBuffetCreate((val) => ({ ...val, max_capacity: e.target.value }))
              }
              placeholder="50"
              type="number"
              value={buffetCreate.max_capacity}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Current Capacity</span>
            </label>
            <input
              className="input input-bordered"
              onChange={(e) =>
                setBuffetCreate((val) => ({
                  ...val,
                  current_capacity: e.target.value,
                }))
              }
              placeholder="10"
              type="number"
              value={buffetCreate.current_capacity}
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
              setBuffetCreate((val) => ({ ...val, price: e.target.value }))
            }
            placeholder="Rp 200.000"
            type="number"
            value={buffetCreate.price}
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
                setBuffetCreate((val) => ({ ...val, day: e.target.value }))
              }
            >
              <option selected="selected" value="">
                Select
              </option>

              {dayStatic.map((item) => {
                return (
                  <>
                    <option
                      selected={buffetCreate.day === item && 'selected'}
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
              checked={buffetCreate.on_demand}
              className="checkbox"
              onChange={(e) =>
                setBuffetCreate((val) => ({
                  ...val,
                  on_demand: !buffetCreate.on_demand,
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
                setBuffetCreate((val) => ({ ...val, start_time: e.target.value }))
              }
              type="time"
              value={buffetCreate.start_time}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">End Time</span>
            </label>
            <input
              className="input input-bordered"
              onChange={(e) =>
                setBuffetCreate((val) => ({ ...val, end_time: e.target.value }))
              }
              type="time"
              value={buffetCreate.end_time}
            />
          </div>
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
    onGetBuffetStore: (data) => {
      return dispatch(getBuffetStore(data));
    },
  };
};

export default connect(mapState, mapDispatchToProps)(BuffetCreateModal);
