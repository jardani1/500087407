import { useEffect } from 'react';
import './App.css';
import { register } from './apis/register';
import { auth } from './apis/auth';
import { getAccessToken } from './helpers/getAccessToken';
import { getTrains } from './apis/getTrains';

const App = () => {
  // const [trainData, setTrainData] = useEffect();
  // const [loading, setLoading] = useEffect(true);
  // const [error, setError] = useEffect(true);
  const accessToken = getAccessToken();

  useEffect(() => {
    // register
    register()
      .then(data => {
        console.log('Registration successful:', data);
      })
      .catch(error => {
        console.error('Error during registration:', error);
      });

    // set auth token 

    // if (!accessToken) {
    auth()
      .then(data => {
        // Set the access token in the cookie
        const expirationDate = new Date(Date.now() + data.expires_in * 1000);
        document.cookie = `access_token=${data.access_token}; expires=${expirationDate.toUTCString()}; path=/`;
      })
      .catch(error => {
        console.error('Error during authentication:', error);
      });
    // }
  }, []);


  useEffect(() => {
    getTrains(accessToken)
      .then(response => {
        // setTrainData(response.data);
        console.log("response >>> ", response.data)
        // setLoading(false);
      })
      .catch(error => {
        // setLoading(false);
        // setError('Error fetching trains:', error)
      });
  }, [accessToken])
  return (
    <div>
      Hello world
    </div>
  )
}

export default App;
