/**
 * Created by Rasmus on 2018-05-13.
 */
import React from 'react';
import * as spotify from '../contants/spotify.api.contants';


export const spotifyTokens = async( code ) => {
    return await fetch(spotify.TOKEN_REQUEST( code ))
        .then(handleHTTPErros)
        .then( response => response.text())
        .catch(data => console.log(data));
};
export const spotifyCallback = async() => {
    return await fetch(spotify.CALLBACK_URI)
        .then(handleHTTPErros)
        .then(data => data.text())
        .catch( data => console.log( data ));
};
export const getCurrentUserData = async( accessToken ) => {
    return await fetch(spotify.CURRENT_USER_DATA( accessToken ))
        .then(handleHTTPErros)
        .then( response => response.text())
        .catch(data => console.log(data));
};
const handleHTTPErros = ( response ) => {
    if (!response.ok) throw new TypeError( response.statusText);
    return response
};