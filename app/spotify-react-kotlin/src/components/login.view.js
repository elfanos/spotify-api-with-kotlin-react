/**
 * Created by Rasmus on 2018-05-13.
 */
import React from 'react';
import {
    Button
} from 'react-bootstrap'
import { PropTypes } from 'prop-types';
import { spotifyCallback } from '../api/services/spotify.service';

const handleLogin = () => {
    spotifyCallback().then( data =>
        window.location.href = data
    );
};
const LoginView = () => {

    return(
        <Button
            bsStyle="primary"
            onClick={() => handleLogin()}
        >
            Login with Spotify
        </Button>
    );

};

LoginView.propTypes = {
   handleLogin: PropTypes.func
};

export default LoginView;