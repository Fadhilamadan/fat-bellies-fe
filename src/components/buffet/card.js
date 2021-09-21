import React, { useState } from 'react';

import BuffetEditModal from './editModal';

import rupiah from 'rupiah-format';

const BuffetCard = (props) => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState();

  const handleAction = (branchId, type) => {
    setModal(true);
    setModalType(type);
  };

  return (
    <>
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
              onClick={() => handleAction(props.item, 'EDIT')}
            >
              Edit
            </button>
            <button
              className="btn btn-outline btn-sm"
              onClick={() => handleAction(props.item, 'DELETE')}
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      {modal && modalType === 'EDIT' && (
        <BuffetEditModal item={props.item} setModal={setModal} />
      )}
    </>
  );
};

export default BuffetCard;
