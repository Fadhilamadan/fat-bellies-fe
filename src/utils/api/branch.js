import axios from 'axios';

export const apiBranch = (name, openingHours, minPrice, maxPrice) => {
  return axios({
    method: 'GET',
    url: `${process.env.REACT_APP_API_URL}/api/branch`,
    params: {
      name: name,
      opening_hours: openingHours,
      min_price: minPrice,
      max_price: maxPrice,
    },
    headers: {
      ContentType: 'application/json',
      Accept: 'application/json',
    },
  });
};

export const apiBranchUpdate = (branchId, data) => {
  return axios({
    method: 'PUT',
    url: `${process.env.REACT_APP_API_URL}/api/branch/${branchId}`,
    headers: {
      ContentType: 'application/json',
      Accept: 'application/json',
    },
    data: data,
  });
};
