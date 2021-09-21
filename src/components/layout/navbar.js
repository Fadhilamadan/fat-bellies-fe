import React, { useState } from 'react';

import BranchCreateModal from '../branch/createModal';

const Navbar = () => {
  const [modal, setModal] = useState(false);
  const [modalType, setModalType] = useState();

  const handleAction = (type) => {
    setModal(true);
    setModalType(type);
  };

  return (
    <>
      <div className="container mx-auto my-4 px-4">
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div className="flex-1 px-2 mx-2">
            <span className="text-lg font-bold">Fat Bellies</span>
          </div>
          <div className="flex-none px-2 mx-2 lg:flex">
            {location.search === '?as=admin' && (
              <div className="flex items-stretch">
                <a
                  className="btn btn-ghost btn-sm rounded-btn"
                  onClick={() => handleAction('BRANCH')}
                >
                  Create Branch
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {modal && modalType === 'BRANCH' && <BranchCreateModal setModal={setModal} />}
    </>
  );
};

export default Navbar;
