import axios from 'axios';

export const clientData = axios.create({
    baseURL: 'https://randomuser.me/api/?results=4',
});