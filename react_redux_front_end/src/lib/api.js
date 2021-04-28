import { registerUrl, loginUrl } from './url';
const axios = require('axios');

/**
 * we will connct the back end using axiso requests.
 */

const registerApi = (obj) => {
  return axios.post(registerUrl, obj);
};

const loginApi = (obj) => {
  return axios.post(loginUrl, obj);
};

export { registerApi, loginApi };
