/**
 * Created by tedshaffer on 10/29/16.
 */
import * as React from 'react';
import { connect } from 'react-redux';

// ????
interface Props {
    poo : any
}

class BA extends React.Component<Props, any> {

    componentDidMount() {
        console.log("ba.tsx::componentDidMount invoked");
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

