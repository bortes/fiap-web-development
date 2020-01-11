import throttle from 'lodash.throttle';
import { createStore } from 'redux';

import NewsReducer from '../reducers/NewsReducer';

const TIME_BETWEEN_SAVE = 1000;

const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');

        if (serializedState === null)
            return undefined;
        else
            return JSON.parse(serializedState);
    } catch (ex) {
        return undefined;
    }
}; 

const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);

        localStorage.setItem('state', serializedState);
    } catch (ex) {
    }
};

const persistedState = loadState();

const store = createStore(
    NewsReducer,
    persistedState
);

store.subscribe(throttle(() => {
    saveState(store.getState());
}, TIME_BETWEEN_SAVE));

export default store;