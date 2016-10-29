/**
 * Created by tedshaffer on 10/29/16.
 */
import * as React from 'react';
import { connect } from 'react-redux';

import BAUI from '../platform/baUI';

// ????
interface Props {
    poo : any
}

class BA extends React.Component<Props, any> {

    baUI: any;

    constructor(props) {
        super(props);
        // this.state = {
        //     bsnPresentations: [],
        //     propertySheetOpen: false,
        //     selectedZone: null,
        //     selectedMediaStateId: "",
        //     selectedPlaylistItemId: "",
        //     open: false,
        // };

        this.baUI = new BAUI(this);

    }
    componentDidMount() {

        this.baUI.init();
    }


    render() {
        return (
            <div>
                BA poop
            </div>
        );
    }
}

function mapStateToProps(baState) {

    const appState = baState.app;

    return {};
    // return {
    //     mediaFolder: appState.mediaFolder,
    //     mediaThumbs: appState.mediaThumbs,
    //     mediaObjects: appState.mediaObjects,
    // };
}

function mapDispatchToProps(dispatch) {
    return {};
    // return bindActionCreators({createDefaultPresentation, loadAppData, selectMediaFolder
    //     },
    //     dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(BA);

