import axios from 'axios';

export const weatherApi = axios.create({
    baseURL: 'https://api.weatherbit.io/v2.0/forecast',
    params: {
        key: '5490d8df7dba44ca8af337baa984ba31',
        days: '5'
    }
});

export const iconApiUrl = 'https://www.weatherbit.io/static/img/icons/';