import { EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL } from '../actions/types';

const INTIAL_STATE = { 
    email: '', 
    password: '', 
    user: null, 
    error: ''
 };

export default (state = INTIAL_STATE, action) => {

    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            console.log('Email_CHanged');
            return { ...state, email: action.payload };

        case PASSWORD_CHANGED: 
        return { ...state, password: action.payload };

        case LOGIN_USER_SUCCESS:
        return { ...state, user: action.payload };

        case LOGIN_USER_FAIL:
        return { ...state, error: 'Authentication Failed', password: '' };

        default:
            return state;
    }
}