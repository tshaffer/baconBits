import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { baDmReducer, DmState} from '@brightsign/badatamodel';

import App from './components/QDSignBuilder';

ReactDOM.render(
    <Provider store={createStore<DmState>(baDmReducer, applyMiddleware(thunk))}>
        <App />
    </Provider>
    , document.getElementById('example'));
