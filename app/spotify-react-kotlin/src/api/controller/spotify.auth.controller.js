/**
 * Created by Rasmus on 2018-05-15.
 */
import React from 'react';
import queryString from 'query-string';
import { spotifyTokens, getCurrentUserData } from '../services/spotify.service';
import { initialize } from '../../states/actions/user.action';
import { connect } from 'react-redux';
const REGEX_STRING_ARRAY = /["\]']+/gi;

const retrieveStringFromArray = ( stringArray ) => {
    let output = stringArray.replace(REGEX_STRING_ARRAY,'');
    let newStringArray = output.split(',');
    return {
        accessToken: newStringArray[0].slice(1),
        refreshToken: newStringArray[1]
    };
};

const intializeUserData = async ( parsed ) => {
    let userData = {};
    userData.token = retrieveStringFromArray(
        await spotifyTokens( parsed.code ).then( response => Promise.resolve( response ) )
    );
    console.log(userData.token);
    let newUser = await getCurrentUserData( userData.token.accessToken ).
    then( response => console.log(response) ).catch(error => error);
    console.log(newUser);
};
class SpotifyAuthController extends React.Component {

    componentDidMount(){
        console.log(this.props.location.search);
        intializeUserData( queryString.parse( this.props.location.search ))
    }
    render() {
        return (
            <h1>TODO fix this auth</h1>
        );
    }

}

export default SpotifyAuthController;