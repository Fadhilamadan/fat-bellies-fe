import React from 'react';

import rupiah from 'rupiah-format';

const BuffetCard = (props) => {
  return (
    <div className="card compact shadow mb-2">
      <div className="card-body">
        <h4 className="card-title text-sm">
          {props.item.plan_name}
          {props.item.on_demand && (
            <div className="badge badge-info ml-2">On Demand</div>
          )}
        </h4>
        <p>Price: {rupiah.convert(props.item.price)}</p>
        <p>Max Capacity: {props.item.max_capacity ?? 0}</p>
        <p>Current Capacity: {props.item.current_capacity ?? 0}</p>
        <p>
          Time: {props.item.start_time} - {props.item.end_time}
        </p>

        <div className="card-actions">
          <button
            className="btn btn-outline btn-sm"
            onClick={() => console.log('edit buffet')}
          >
            Edit
          </button>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => console.log('delete buffet')}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuffetCard;
