/**
 * Created by tedshaffer on 10/29/16.
 */
import {combineReducers} from 'redux';

import MediaFolderReducer from './reducerMediaFolder';

export interface AppState {
    mediaFolder: string
}

const appReducer = combineReducers<AppState>({
    mediaFolder: MediaFolderReducer
});

export default appReducer;
