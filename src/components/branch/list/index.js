import React, { useLayoutEffect, useState } from 'react';

import { getBranch } from '../../../redux/middleware/branch/branch.middleware';

import BranchCard from './card';
import BranchCardLoader from './cardLoader';

import { connect } from 'react-redux';

const Branch = (props) => {
  const [branchName, setBranchName] = useState();
  const [openingHour, setOpeningHour] = useState();
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  useLayoutEffect(() => {
    props.onGetBranch();
  }, []);

  const handleFilter = () => {
    props.onGetBranch(branchName, openingHour, minPrice, maxPrice);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-2 mb-4">
        <input
          className="input input-bordered"
          onChange={(e) =>
            setBranchName(e.target.value !== '' ? e.target.value : undefined)
          }
          placeholder="Seach branch..."
          type="text"
        />

        <input
          className="input input-bordered"
          onChange={(e) =>
            setMinPrice(e.target.value !== '' ? e.target.value : undefined)
          }
          placeholder="Min Price Rp 100.000"
          type="number"
        />

        <input
          className="input input-bordered"
          onChange={(e) =>
            setMaxPrice(e.target.value !== '' ? e.target.value : undefined)
          }
          placeholder="Max Price Rp 500.000"
          type="number"
        />

        <select
          className="select select-bordered"
          onChange={(e) =>
            setOpeningHour(e.target.value !== '' ? e.target.value : undefined)
          }
        >
          <option selected="selected" value="">
            Opening hour
          </option>
          <option value="07:00">07:00</option>
          <option value="08:00">08:00</option>
          <option value="09:00">09:00</option>
          <option value="10:00">10:00</option>
          <option value="11:00">11:00</option>
          <option value="12:00">12:00</option>
          <option value="13:00">13:00</option>
          <option value="14:00">14:00</option>
          <option value="15:00">15:00</option>
          <option value="16:00">16:00</option>
          <option value="17:00">17:00</option>
          <option value="18:00">18:00</option>
          <option value="19:00">19:00</option>
          <option value="20:00">20:00</option>
          <option value="21:00">21:00</option>
        </select>

        <button className="btn btn-primary" onClick={() => handleFilter()}>
          Filter
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {props.getBranchReducer.isLoading ? (
          <BranchCardLoader count={3} />
        ) : props.getBranchReducer.item.length === 0 ? (
          <div key="key" className="card compact shadow">
            <div className="card-body">
              <h4 className="card-title">Branch not found...</h4>
            </div>
          </div>
        ) : (
          props.getBranchReducer.item.map((item) => {
            return <BranchCard key={item.id} item={item} />;
          })
        )}
      </div>
    </>
  );
};

const mapState = (state) => {
  return {
    getBranchReducer: state.getBranchReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetBranch: (name, openingHours, minPrice, maxPrice) => {
      return dispatch(getBranch(name, openingHours, minPrice, maxPrice));
    },
  };
};

export default connect(mapState, mapDispatchToProps)(Branch);
