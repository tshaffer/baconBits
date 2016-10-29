/**
 * Created by tedshaffer on 10/29/16.
 */


// not importing from AppInterfaces
interface MediaFolderState
{
    readonly mediaFolder: string,
}

import { MediaFolderAction } from '../actions/actionMediaFolder';
import { SET_MEDIA_FOLDER } from '../actions/actionMediaFolder';

const createMediaFolderState =
    (mediaFolder: string) =>
        ({
            mediaFolder: mediaFolder
        });

const newMediaFolderState = createMediaFolderState("");

const mediaFolderReducer = (state: MediaFolderState = newMediaFolderState, {type, payload}: MediaFolderAction) => {
    switch (type) {
        case SET_MEDIA_FOLDER:
            let { mediaFolder } = payload;
            return createMediaFolderState(mediaFolder);
    }
    return state;
}

export default mediaFolderReducer;