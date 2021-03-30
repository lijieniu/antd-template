import base from './base';
import axios from '../http';

const commonApi = {
	login(params) {
		return axios.post(`${base.serverUrl}/auth/login`, params);
	},
	getData() {
		return axios.get(`${base.serverUrl}/ajaxList`); // /mock/ajaxList
	}
};

export default commonApi;