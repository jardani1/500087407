import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/train/auth';

export const auth = async () => {
	const authData = {
		companyName: "Train central",
		clientId: "61e626d7-0e59-4ac0-9688-6577c1b2a81f",
		ownerName: "Sumukh Srivastava",
		ownerEmail: "Sumukh@gmail.com",
		rollNo: "500087407",
		clientSecret: "rUuUYynIaqJjgVXQ"
	};

	try {
		const response = await axios.post(API_BASE_URL, authData);
		return response.data;
	} catch (error) {
		throw error;
	}
};


