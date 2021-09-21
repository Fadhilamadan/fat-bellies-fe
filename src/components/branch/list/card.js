import React, { useState } from 'react';

import BranchEditModal from '../../branch/editModal';
import BuffetCreateModal from '../../buffet/createModal';
import BuffetCard from '../../buffet/list/card';
import BranchDeleteModal from '../deleteModal';

import _ from 'lodash';
import rupiah from 'rupiah-format';

const BranchCard = (props) => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState();

  const handleAction = (type) => {
    setModal(true);
    setModalType(type);
  };

  return (
    <>
      <div className="card compact shadow">
        <div className="card-body">
          <h2 className="card-title pb-2 text-2xl">{props.item.name}</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
            {props.item.Buffets.length === 0 ? (
              <div key="key" className="card compact shadow">
                <div className="card-body">
                  <h4 className="card-title">Don&apos;t have any Branch yet.</h4>
                </div>
              </div>
            ) : (
              _(props.item.Buffets)
                .groupBy((item) => item.day)
                .map((day, iDay) => (
                  <div key={iDay} className="card shadow">
                    <div className="card-body">
                      <h4 className="card-title text-md pb-2">
                        {iDay} - Price from
                        <div className="badge ml-2">
                          {rupiah.convert(day[0].price)}
                        </div>
                      </h4>

                      {day.map((buffet, iBuffet) => (
                        <BuffetCard key={iBuffet} item={buffet} />
                      ))}
                    </div>
                  </div>
                ))
                .value()
            )}
          </div>

          <div className="card-actions">
            <button
              className="btn btn-warning btn-sm"
              onClick={() => handleAction('EDIT')}
            >
              Edit
            </button>
            <button className="btn btn-sm" onClick={() => handleAction('DELETE')}>
              Delete
            </button>

            <button
              className="btn btn-success btn-sm ml-auto"
              onClick={() => handleAction('CREATE_BUFFET')}
            >
              Create Buffet
            </button>
          </div>
        </div>
      </div>

      {modal && modalType === 'EDIT' ? (
        <BranchEditModal item={props.item} setModal={setModal} />
      ) : modal && modalType === 'DELETE' ? (
        <BranchDeleteModal item={props.item} setModal={setModal} />
      ) : modal && modalType === 'CREATE_BUFFET' ? (
        <BuffetCreateModal item={props.item} setModal={setModal} />
      ) : null}
    </>
  );
};

export default BranchCard;
