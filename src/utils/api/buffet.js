import axios from 'axios';

export const apiBuffetDetail = (buffetId) => {
  return axios({
    method: 'GET',
    url: `${process.env.REACT_APP_API_URL}/api/buffet/${buffetId}`,
    headers: {
      ContentType: 'application/json',
      Accept: 'application/json',
    },
  });
};

export const apiBuffetStore = (data) => {
  return axios({
    method: 'POST',
    url: `${process.env.REACT_APP_API_URL}/api/buffet`,
    headers: {
      ContentType: 'application/json',
      Accept: 'application/json',
    },
    data: data,
  });
};

export const apiBuffetUpdate = (buffetId, data) => {
  return axios({
    method: 'PUT',
    url: `${process.env.REACT_APP_API_URL}/api/buffet/${buffetId}`,
    headers: {
      ContentType: 'application/json',
      Accept: 'application/json',
    },
    data: data,
  });
};

export const apiBuffetDelete = (buffetId) => {
  return axios({
    method: 'DELETE',
    url: `${process.env.REACT_APP_API_URL}/api/buffet/${buffetId}`,
    headers: {
      ContentType: 'application/json',
      Accept: 'application/json',
    },
  });
};
