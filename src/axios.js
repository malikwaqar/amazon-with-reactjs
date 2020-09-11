import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:5001/with-reactjs/us-central1/api'
});

export default instance;