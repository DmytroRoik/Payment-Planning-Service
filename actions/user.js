import * as api from '../utils/api';

export const loginAction = data => {
    return {
        type: 'LOGIN_USER'
    };
};


// requests 
export const login = data => dispatch => {
    api.User.login(data)
        .then(res => console.log(res))
        .catch(err => console.error(err));
};

export const register = data => dispatch => {
    api.User.register(data)
        .then(res => console.log(res))
        .catch(err => console.error(err));
};

export const getCurrent = () => dispatch => {
    api.User.currentUser()
        .then(res => console.log(res))
        .catch(err => console.error(err));
};

