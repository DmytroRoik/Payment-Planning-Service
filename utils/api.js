import axios from 'axios';
import { AsyncStorage } from 'react-native';
import { API_URL } from '../constants/config';

const requests = {
    get: (url) => {
            return axios.get(`${API_URL}${url}`, {
                headers: { 
                    Authorization: 'Bearer ' + AsyncStorage.getItem('token'),
                    'Content-Type': 'application/json',
                }
            });
    },
    post: (url, data) => {
            return axios.post(`${API_URL}${url}`, data, {
                headers: { 
                    Authorization: 'Bearer ' + AsyncStorage.getItem('token'),
                    'Content-Type': 'application/json',
                }
            })
    },
    patch: (url, data) => {
        return axios.patch(`${API_URL}${url}`, data, {
            headers: { 
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            }
        })
    },
    delete: (url, data) => {
        return axios.delete(`${API_URL}${url}`, data, {
            headers: { 
                Authorization: 'Bearer ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            } 
        })
    }
};

export const User = {
    login: (data) => requests.post('/v1/login', data),
    register: (data) => requests.post('/v1/signup', data),
    currentUser: () => requests.get('/v1/current')
}