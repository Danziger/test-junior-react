import axios from 'axios';

export const companiesApi = axios.create({
    baseURL: process.env.DEVELOPMENT ? 'http://localhost:3000/companies/' : '',
});
