/**
 * Created by Rasmus on 2018-05-16.
 */
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index';
import { persistReducer, persistStore } from 'redux-persist';
import  storage  from 'redux-persist/lib/storage';
import thunk from 'redux-thunk';

const persistConfig = {
    key: 'root',
    storage
};
const persistedReducer = persistReducer( persistConfig, reducers );

const store = createStore(
    persistedReducer,
    applyMiddleware( thunk )
);

const persistor = persistStore( store );

export default { store, persistor };