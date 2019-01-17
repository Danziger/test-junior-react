import { companiesApi } from './companies.api';

function getAll() {
    return companiesApi.get('/').then(res => res.data);
    // return companiesApi.get('/').then(res => res.data.slice(0, 10));
}

export const CompaniesService = {
    getAll,
};
