/**
 * Created by jsugg on 10/1/16.
 * * Quick and Dirty Sign Builder
 */
"use strict";
const React = require('react');
const react_redux_1 = require('react-redux');
const badatamodel_1 = require('@brightsign/badatamodel');
function handleAddZone() {
    return (dispatch, getState, ex) => {
        console.log("handleAddZone invoked");
        let zoneCount = badatamodel_1.baGetZoneCount(getState());
        let newZoneName = "Zone" + (zoneCount + 1).toString();
        dispatch(badatamodel_1.baAddZone(newZoneName, badatamodel_1.ZoneType.Images));
        zoneCount = badatamodel_1.baGetZoneCount(getState());
        console.log("number of zones is:", zoneCount);
        let zone = badatamodel_1.baGetZoneByName(getState(), { name: newZoneName });
        if (zone) {
            console.log("Found new zone: ", zone.name);
        }
        else {
            console.log("Could not add and find zone!");
        }
    };
}
class App extends React.Component {
    componentDidMount() {
        console.log("QDSignBuilder.tsx::componentDidMount invoked");
    }
    render() {
        const { sign, zoneCount, onNewSign, onAddZone } = this.props;
        return (React.createElement("div", null, 
            React.createElement("h2", null, 
                "Sign: ", 
                sign.name, 
                " (mode: ", 
                badatamodel_1.VideoModeName(sign.videoMode), 
                "), contains ", 
                zoneCount, 
                " zone(s)!"), 
            React.createElement("button", {type: "button", onClick: onNewSign}, "New Sign"), 
            React.createElement("button", {type: "button", onClick: onAddZone}, "Add Zone")));
    }
}
const mapStateToProps = (state, ownProps) => ({
    sign: badatamodel_1.baGetSignMetaData(state),
    zoneCount: badatamodel_1.baGetZoneCount(state),
    zones: state.zones,
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    onNewSign: () => { dispatch(badatamodel_1.baNewSign("New Sign", badatamodel_1.VideoMode.v1920x1080x30p)); },
    onAddZone: () => { dispatch(handleAddZone()); }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=QDSignBuilder.js.map