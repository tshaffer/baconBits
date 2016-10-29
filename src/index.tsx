import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import {combineReducers} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { baDmReducer, DmState} from '@brightsign/badatamodel';

import appReducer from './reducers/index';
import { AppState } from './reducers/index';

export interface ReduxState {
    appState: AppState,
    badmState: DmState
}

import App from './components/QDSignBuilder';

const rootReducer = combineReducers<ReduxState>({
    badm : baDmReducer,
    app : appReducer
});

// {/*<Provider store={createStore<AppState>(rootReducer, applyMiddleware(thunk))}>*/}

ReactDOM.render(
    <Provider store={createStore<ReduxState>(rootReducer, applyMiddleware(thunk))}>
        <App />
    </Provider>
    , document.getElementById('content'));
