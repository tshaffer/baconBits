/**
 * Created by tedshaffer on 10/29/16.
 */
import { AppAction, AppActionCreator } from './actionBase';

// Actions
export const SET_MEDIA_FOLDER = 'SET_MEDIA_FOLDER';

export interface MediaFolderParams {
    mediaFolder?: string
}

export type MediaFolderAction = AppAction<MediaFolderParams>;

export const setMediaFolder: AppActionCreator<MediaFolderAction> = (mediaFolder: string) => ({
    type: SET_MEDIA_FOLDER,
    payload: {
        mediaFolder: mediaFolder
    }
});
