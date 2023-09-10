// Function to get the access token from the cookie
export const getAccessToken = () => {
	const cookies = document.cookie.split(';');
	for (const cookie of cookies) {
		const [name, value] = cookie.trim().split('=');
		if (name === 'access_token') {
			return value;
		}
	}
	return null;
};