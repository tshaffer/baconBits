/**
 * Created by tedshaffer on 10/29/16.
 */
import * as React from 'react';

import BA from '../containers/ba';

// doesn't work
// Cannot find module .....
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

// ????
interface Props {
    poo : any
}

// <MuiThemeProvider>
//     <div className = "container bangContainer">
//     <BA />
//     </div>
//     </MuiThemeProvider>

export default class App extends React.Component<Props, any> {

    render() {

        return (
            <div className = "container bangContainer">
                <BA/>
            </div>
        );
    }

}
