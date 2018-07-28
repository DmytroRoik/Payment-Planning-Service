import * as api from '../utils/api';

export const loginAction = data => {
    alert(1)
    return {
        type: 'LOGIN_USER'
    };
};


// requests 
export const login = data => dispatch => {
    api.User.login(data)
        .then(res => console.log(res))
        .catch(err => console.error(err));
}
