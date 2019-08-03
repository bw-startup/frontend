import axios from 'axios';

export default (cookie) => {
  return axios.create({
    headers: {
      Authorization: `${cookie}`,
    },
  });
};
