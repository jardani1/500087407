import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144:80/train/trains';

export const getTrains = (accessToken) => {
	return axios.get(API_BASE_URL, {
		headers: {
			'Authorization': `Bearer ${accessToken}`,
		},
	});
};