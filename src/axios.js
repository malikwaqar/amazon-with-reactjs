import axios from 'axios';
const instance = axios.create({
    baseURL: 'https://us-central1-with-reactjs.cloudfunctions.net/api'
    //'http://localhost:5001/with-reactjs/us-central1/api'
});

export default instance;