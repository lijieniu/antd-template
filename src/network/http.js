import axios from 'axios';
// import { Message } from 'ant-design-vue';

let instance = axios.create({ 
	timeout: 30000,
	withCredentials: true
});

instance.defaults.timeout = 30000;

instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

instance.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		return Promise.error(error);
	}
);

instance.interceptors.response.use(
	response => {
		if (response.status === 200) {
			return Promise.resolve(response.data);
		} else {
			return Promise.reject(response);
		}
	},
	error => {
		if (error.response.status) {
			switch (error.response.status) {
			case 401:
				// Message({
				// 	message: '请登录',
				// 	type: 'error'
				// });
				setTimeout(() => {
					location.href = '/#/login';
					location.reload();
				}, 500);
				break;
			case 500:
				// Message({
				// 	message: '服务异常',
				// 	type: 'error'
				// });
				break;
			}
			return Promise.reject(error.response);
		}
	}
);

export default instance;