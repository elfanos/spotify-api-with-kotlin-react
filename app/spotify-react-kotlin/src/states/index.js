/**
 * Created by Rasmus on 2018-05-15.
 */
import { createStore } from 'redux';
import reducers from './reducers/index';

export const store = createStore(
    reducers
);