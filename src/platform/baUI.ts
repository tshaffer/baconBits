/**
 * Created by tedshaffer on 10/29/16.
 */
/**
 * Created by tedshaffer on 6/12/16.
 */
import * as React from 'react';

const {remote} = require('electron');
const {Menu, dialog} = remote;
const fs = require('fs');
const path = require('path');


export default class BAUI {

    ba: any;

    constructor(ba) {
        this.ba = ba;
    }

    init() {

        var self = this;

        const menuTemplate = [
            {
                label: 'File',
                submenu: [
                    {
                        label: 'Open Presentation',
                        click: function() {
                            self.handleOpenPresentation();
                            console.log("poo");
                        }
                    },
                    {
                        label: 'Save Presentation',
                        click: function() {
                            self.handleSavePresentation();
                            console.log("poo");
                        }
                    },
                    {
                        label: 'Open Media Library',
                        click: function() {
                            self.handleBrowseForMediaLibrary();
                            console.log("poo");
                        }
                    }
                ]
            },
            {
                label: 'Edit',
                submenu: [
                    {
                        label: 'Preferences',
                        click: function() {
                            self.handleEditPreferences();
                            console.log("poo");
                        }
                    }
                ]
            }
        ];

        if (process.platform === 'darwin') {
            const name = remote.app.getName();
            menuTemplate.unshift(
                {
                    label: name,
                    submenu: [
                        {
                            label: 'About ' + name,
                            click: function () {
                                console.log("poo");
                            }
                        },
                        // {
                        //     type: 'separator'
                        // },
                        {
                            label: 'Services',
                            click: function () {
                                console.log("poo");
                            }
                        },
                        {
                            label: 'Hide ' + name,
                            click: function () {
                                console.log("poo");
                            }
                        },
                        {
                            label: 'Hide Others',
                            click: function () {
                                console.log("poo");
                            }
                        },
                        {
                            label: 'Show All',
                            click: function () {
                                console.log("poo");
                            }
                        },
                        {
                            label: 'Quit',
                            click: function() {
                                remote.app.quit();
                            }
                        }
                    ]
            })
        }

            // menuTemplate.unshift({
            //     label: name,
            //     submenu: [
            //         {
            //             label: 'About ' + name,
            //         },
            //         {
            //             type: 'separator'
            //         },
            //         {
            //             label: 'Services',
            //             // submenu: []
            //         },
            //         {
            //             type: 'separator'
            //         },
            //         {
            //             label: 'Hide ' + name,
            //             accelerator: 'Command+H',
            //         },
            //         {
            //             label: 'Hide Others',
            //             accelerator: 'Command+Alt+H',
            //         },
            //         {
            //             label: 'Show All',
            //         },
            //         {
            //             type: 'separator'
            //         },
            //         {
            //             label: 'Quit',
            //             accelerator: 'Command+Q',
            //             click: function() {
            //                 remote.app.quit();
            //             }
            //         },
            //     ]
            // });
        // }

        const menu = Menu.buildFromTemplate(menuTemplate);
        Menu.setApplicationMenu(menu);
    }

    handleOpenPresentation() {

        var self = this;

        const options = {
            title: 'Open Presentation',
            filters: [
                { name: 'Presentations', extensions: ['bpf'] }
            ]
        };
        dialog.showOpenDialog(options, filenameDir => {
            self.ba.props.fetchSign(filenameDir[0]);
        });
    }

    handleSavePresentation() {

        var self = this;

        const options = {
            title: 'Save Presentation',
            filters: [
                { name: 'Presentations', extensions: ['bpf'] }
            ]
        };
        dialog.showSaveDialog(options, filename => {
            this.ba.props.saveSign(filename);
        });
    }

    handleBrowseForMediaLibrary() {

        var self = this;

        dialog.showOpenDialog({
            properties: ['openDirectory']
        }, function (directories) {
            if (directories) {
                const mediaFolder = directories[0];
                self.ba.props.selectMediaFolder(mediaFolder, self.ba.props.mediaThumbs);
            }
        });
    }

    handleBrowseForHTMLSite() {

        var self = this;

        return new Promise(function(resolve, reject) {

            dialog.showOpenDialog({
                properties: ['openFile']
            }, function (files) {
                console.log(files);
                if (files) {
                    resolve(files[0]);
                }
                else {
                    reject();
                }
            });
        });
    }

    handleEditPreferences() {
        this.ba.handleEditPreferences();
    }
}