/**
 * Created by Rasmus on 2018-05-15.
 */
import React from 'react';
import queryString from 'query-string';
import { spotifyTokens, getCurrentUserData } from '../services/spotify.service';
import { initialize } from '../../states/actions/user.action';
import { Redirect } from 'react-router-dom';
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

const initializeUserData = async ( parsed ) => {
    let userData = {};
    userData.token = retrieveStringFromArray(
        await spotifyTokens( parsed.code ).then( response => Promise.resolve( response ) )
    );
    let newUser = await getCurrentUserData( userData.token.accessToken ).
    then( response => {return JSON.parse(response)}
    ).catch(error => error);
    userData.email = newUser.email;
    userData.name = newUser.displayName;
    return userData
};
class SpotifyAuthController extends React.Component {

    componentDidMount(){
        initializeUserData( queryString.parse( this.props.location.search ))
            .then( user =>
                this.props.dispatch( initialize( user.name, user.email, user.token ) ) )
            .catch( error => console.log(error) );
    }
    render() {
        if( queryString.parse( this.props.location.search ) !== undefined ) {
            return( <Redirect to='/home' /> )
        }else {
            return( <Redirect to='/login' /> )
        }
    }

}

export default connect(null,null)(SpotifyAuthController);