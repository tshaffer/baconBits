/**
 * Created by jsugg on 10/1/16.
 * * Quick and Dirty Sign Builder
 */

import * as React from 'react';
import { connect } from 'react-redux';
import { ThunkAction } from 'redux-thunk';

import {
    DmState, DmDispatch, DmSign,
    VideoMode, VideoModeName, ZoneType,
    baNewSign, baAddZone,
    baGetSignMetaData, baGetZoneCount, baGetZoneByName
} from '@brightsign/badatamodel';

import {
    AppState
} from '../reducers/index';

import {
    ReduxState
} from '../index';

interface Props {
    sign : DmSign,
    zoneCount : number,
    onNewSign : DmDispatch,
    onAddZone : DmDispatch
}

function handleAddZone() : ThunkAction<void, ReduxState, undefined> {
    return (dispatch, getState, ex) =>
    {
        console.log("handleAddZone invoked");
        let badmState = getState().badm;

        let zoneCount = baGetZoneCount(badmState);
        let newZoneName = "Zone" + (zoneCount+1).toString();
        dispatch(baAddZone(newZoneName,ZoneType.Images));

        badmState = getState().badm;

        zoneCount = baGetZoneCount(badmState);
        console.log("number of zones is:", zoneCount);

        let zone = baGetZoneByName(badmState, {name: newZoneName});
        if (zone) {
            console.log("Found new zone: ", zone.name);
        } else {
            console.log("Could not add and find zone!")
        }
    };
}

class App extends React.Component<Props, any> {

    componentDidMount() {
        console.log("QDSignBuilder.tsx::componentDidMount invoked");
    }

    render() {
        const {sign, zoneCount, onNewSign, onAddZone} = this.props;
        return (
            <div>
                <h2>Sign: {sign.name} (mode: {VideoModeName(sign.videoMode)}), contains {zoneCount} zone(s)!</h2>
                <button type="button" onClick={onNewSign}>New Sign</button>
                <button type="button" onClick={onAddZone}>
                    Add Zone
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    let badmState: DmState;
    badmState = state.badm;
    return (
    {
        sign: baGetSignMetaData(badmState),
        zoneCount: baGetZoneCount(badmState),
        zones: badmState.zones,
    }
    );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onNewSign : () => {dispatch(baNewSign("New Sign", VideoMode.v1920x1080x30p))},
    onAddZone : () => {dispatch(handleAddZone())}
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
