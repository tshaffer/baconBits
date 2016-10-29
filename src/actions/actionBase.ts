/**
 * Created by tedshaffer on 10/29/16.
 */
import { Action, Dispatch, ActionCreator } from 'redux';

import { AppState } from '../reducers/index';

// Dispatch type for baDm actions
export type AppDispatch = Dispatch<AppState>;

export interface AppSimpleAction extends Action {
    type: string,   // override Any - must be a string
}

export interface AppAction<T> extends AppSimpleAction {
    payload: T
}

export type AppActionCreator<T extends AppSimpleAction> = ActionCreator<T>;

export type AppThunkAction<T> = (dispatch: AppDispatch, getState: () => AppState, extraArgument: undefined) => Promise<AppAction<T>>;
