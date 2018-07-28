const initialState = {
   isUserLogged: false,
  };
  
  export default function user(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_USER': 
        return {
            ...state,
            isUserLogged: true
        }
      case 'LOGOUT': 
        return {
            ...state,
            isUserLogged: false
        }
      default:
        return state;
    }
  }
  