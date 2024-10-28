import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './actions/reducers/rootReducer';
import { sessionService } from 'redux-react-session';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(), // `redux-thunk` is included by default
    preloadedState: {}, // initialState
});

sessionService.initSessionService(store);

export default store;
