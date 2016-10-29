# BrightAuthor Next Generation (BANG)
## BrightAuthor Example TypeScript App using BADataModel

This project contains a Typescript based example app which uses the BrightAuthor data model package.

#### General dependencies
* Node.js 6.x (supports ES6)
    * We have minor dependencies so far in code, otherwise this is used for compiling, running tests, etc.
* React, React-DOM, Redux, React-Redux, Reselect
* Typescript
* Typings (Typescript definition manager for libraries)

#### About Typescript
* This project is currently using version 2.0 of Typescript. The latest version of Webstorm still bundles version 1.8 - see setup instructions below to point Webstorm at the newer compiler.

### General Development Prep
* If you get errors when using 'npm install' or 'npm link', see <https://docs.npmjs.com/getting-started/fixing-npm-permissions>
* You still might have to use sudo to install global packages
* Install node.js (Latest version recommended - currently 6.9.1.)
* Install the 'typings' package:
    > npm install -g typings
* Typescript: the stand-alone version must be installed and used. If you have already installed it, install again to get version 2.0.
    > npm install - g typescript
    
### Project Prep
* Before doing anything to prepare this project, make sure that the directory you have opened in WebStorm is the baDmTsAppTest directory - not the base directory of the repo, which is the master directory for other related projects.
    * The baDmTsAppTest directory will then become the "content root" of the WebStorm project - all additional paths are calculated relative to that.
* Install node_modules (this will create or update node-modules directory.) Since this project uses a private package available only to BrightSign npm users, you will need to log in to your npm account in the WebStorm terminal window before doing the npm install.
    > npm adduser (or npm login)
* Provide your npm account information, then continue with the nom install step:
    > npm install
* Link globally installed Typescript compiler for current project
    > npm link typescript
* Retrieve library typings (this will create or update typings directory)
    > typings install

### WebStorm Setup
* Open WebStorm Preferences
    * On page: Directories
        * Make sure the top line in the Directory list - the "content root" -  is \<repo_base\>/baDmTsAppTest. If it isn't, you probably started in the wrong directory.
    * On page: Languages and Frameworks, select Javascript
        * Select React JSX as Javascript language version
    * On page: Languages and Frameworks, expand Javascript node, select Libraries
        * If libraries are already installed, you will see react-DefinitelyType and/or redux-DefinitelyTyped in the Libraries list
        * For each library that is not installed, click on Download button, find library (react or redux,) select it, and click 'Download and Install'
        * Make sure both libraries are enabled for this project (checked in "Enabled" column in Libraries list)
        * The library for ECMAScript 6 should also be checked.
    * On page: Languages and Frameworks, select TypeScript
        * If the Typescript version is less than 2.0, you need to point to version 2 of the compiler that you have installed globally.
            * Click the edit button next to Typescript version
            * Browse to the directory containing the typescriptServices.js files. On macOS, this is probably _/usr/local/lib/node_modules/typescript/lib_.
            * Set this as the custom directory and click ok.
        * Make sure "Enable TypeScript Compiler" and "Track Changes" is  checked (this enables the watcher for immediate transpilation.)
        * Make sure "Resolve objects using tsconfig.json is checked.

* Set up debug configuration to debug from within WebStorm
    * From Run menu, select "Edit Configurations..."
    * Click on the '+' at upper left to add a debug configuration
    * Select Javascript Debug as configuration type. Javascript Debug details page will open.
    * Type a friendly name into the Name box (e.g., 'Test App Debug')
    * In URL field, add path to the index.html file in the project root directory (use Browse button)
    * In the list that is labeled "Remote URLs of local files (optional)", specify links to root execution directory, and to source maps:
        * In the content root directory row (the top row of the list, which will show "\<repo base\>/baDmTsAppTest",) click in "Remote URL" column and add "webpack:///." This is used to find the source maps.
        * In the "build" subdirectory row, click in the "Remote URL" column and add "http://localhost:63342/baDmTsAppTest/build".
            * This assumes you have not changed the default debug port from 63342. Modify the port number if it is different.
    * Click OK

* Build and Run
    * To build, from Terminal window:
        > npm run build
    * Start debugging by clicking on green bug icon at top right of WebStorm menu

### Notes on using the NPM based baDataModel library
* Because we have published the data model package as an NPM private package, it is "scoped" within NPM. The scope name is 'brightsign'.
* For such a scoped package, you must refer to the package in your import or require statements as '@brightsign/badatamodel'.
* Example:
    > import {baDmReducer, DmState} from '@brightsign/badatamodel';
* The package.json file for this project is already set up correctly. If you need to initially install the package into a new project and save the dependency, you would do this as follows:
    > npm install @brightsign/badatamodel --save
* Remember you must log in to NPM with your NPM account in order to access this package.
    