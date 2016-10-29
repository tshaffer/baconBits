"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const react_redux_1 = require('react-redux');
const redux_1 = require('redux');
const redux_thunk_1 = require('redux-thunk');
const badatamodel_1 = require('@brightsign/badatamodel');
const QDSignBuilder_1 = require('./components/QDSignBuilder');
ReactDOM.render(React.createElement(react_redux_1.Provider, {store: redux_1.createStore(badatamodel_1.baDmReducer, redux_1.applyMiddleware(redux_thunk_1.default))}, 
    React.createElement(QDSignBuilder_1.default, null)
), document.getElementById('example'));
//# sourceMappingURL=index.js.map