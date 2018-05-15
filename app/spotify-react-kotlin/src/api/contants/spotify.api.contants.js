/**
 * Created by Rasmus on 2018-05-13.
 */

export const CALLBACK_URI = 'api/spotify/callback/uri';

export const TOKEN_REQUEST = code =>  '/api/spotify/token/' + code;

export const CURRENT_USER_DATA = accessToken => '/api/spotify/user/' + accessToken;