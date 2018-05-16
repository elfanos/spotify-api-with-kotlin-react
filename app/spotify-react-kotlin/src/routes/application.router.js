/**
 * Created by Rasmus on 2018-05-15.
 */
/**
 * Created by Rasmus on 2018-05-13.
 */
import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route

} from 'react-router-dom';
import { Provider } from 'react-redux';
import  Store  from '../states/store';
import LoginView from '../components/login.view';
import HomeView from '../components/home.view';
import SpotifyAuthController from '../api/controller/spotify.auth.controller';
import { PersistGate } from 'redux-persist/integration/react';
export const ApplicationRouter = () => {
    return(
        <Provider store ={ Store.store } >
            <PersistGate persistor={Store.persistor}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/login' component={LoginView} />
                        <Route exact path='/home' component={HomeView} />
                        <Route exact path='/auth/spotify/callback' component={ SpotifyAuthController } />
                    </Switch>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    );
};