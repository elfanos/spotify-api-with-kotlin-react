/**
 * Created by Rasmus on 2018-05-13.
 */

import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = ( state ) => {
    console.log( state );
    return {
        name: state.userReducer.username,
        email: state.userReducer.email,
        accessToken: state.userReducer.accessToken,
        refreshToken: state.userReducer.refreshToken
    }
};

const HomeView = ( { email, name, accessToken, refreshToken } ) => {
    return(
        <div style = {{
            textAlign: 'center'
        }}>
            <h1> Hello {name} here is your </h1>
                <br/>
            <p> email: {email} </p>
                <br/>
            <p> accessToken: {accessToken} </p>
                <br/>
            <p> and </p>
                <br/>
            <p> refreshToken: {refreshToken} </p>
        </div>
    );
};
HomeView.propTypes = {
    email: PropTypes.string,
    name: PropTypes.string,
    refreshToken: PropTypes.string,
    accessToken: PropTypes.string,
};
export default connect(mapStateToProps, null)(HomeView);