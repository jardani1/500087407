import axios from 'axios';

const API_BASE_URL = 'http://20.244.56.144/train/register';

export const register = async () => {
	const registrationData = {
		companyName: "Train central",
		ownerName: "Sumukh Srivastava",
		rollNo: "500087407",
		ownerEmail: "Sumukh@gmail.com",
		accessCode: "JnNPGs"
	};

	try {
		const response = await axios.post(API_BASE_URL, registrationData);
		return response.data;
	} catch (error) {
		throw error;
	}
};


// * ONE TIME register response for above number 
// {
//     "companyName": "Train central",
//     "clientID": "61e626d7-0e59-4ac0-9688-6577c1b2a81f",
//     "clientSecret": "rUuUYynIaqJjgVXQ",
//     "ownerName": "Sumukh Srivastava",
//     "ownerEmail": "Sumukh@gmail.com",
//     "rollNo": "500087407"
// }