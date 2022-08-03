import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://gentle-dawn-07883.herokuapp.com',
    headers: {
        'Content-Type': 'application/json'
    },
});

export default Api;