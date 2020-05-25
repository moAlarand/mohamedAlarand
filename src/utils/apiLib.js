import {BASEURL} from './urls';
import axios from 'axios';
import {ACCESS_TOKEN} from './keys';

export const apiConfig = () => {
  axios.defaults.baseURL = BASEURL;
  axios.defaults.headers.common['Authorization'] = `Bearer ${ACCESS_TOKEN}`;
};
