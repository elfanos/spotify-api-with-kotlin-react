/**
 * Created by Rasmus on 2018-05-15.
 */
import * as type from '../constants/user.contants';
const defaultState = {
    isLoggedIn: false,
    username: '',
    email: '',
    token: {}
};
const reducer = ( state = defaultState, action ) => {
    console.log(action);
    switch ( action.type ) {
        case type.INITIALIZE:
            return {
                ...state,
                isLoggedIn: true,
                username: action.username,
                email: action.email,
                ...action.token
            };
        default:
            return state;
    }
};
export default reducer;