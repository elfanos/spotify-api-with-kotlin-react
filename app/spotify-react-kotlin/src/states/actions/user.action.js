/**
 * Created by Rasmus on 2018-05-15.
 */
import * as type from '../constants/user.contants';

export const initialize = ( username, email, token ) => {
    return {
        type: type.INITIALIZE,
        username: username,
        email: email,
        token: token
    };
};