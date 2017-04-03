import {Aurelia} from 'aurelia-framework';
// we want font-awesome to load as soon as possible to show the fa-spinner
import '../styles/styles.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import  "ag-grid/dist/styles/ag-grid.css";
import "ag-grid/dist/styles/theme-blue.css";
import "sweetalert2/dist/sweetalert2.min.css";
// comment out if you don't want a Promise polyfill (remove also from webpack.config.js)
import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .plugin('ag-grid-aurelia')
    .plugin('aurelia-validation')
    .plugin('aurelia-dialog', config => {
      config.useDefaults();
      config.settings.lock = true;
      config.settings.centerHorizontalOnly = false;
      config.settings.startingZIndex = 5;
      config.settings.enableEscClose = true;
    })
    .developmentLogging();
 
  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  await aurelia.start();
  aurelia.setRoot('app');

  // if you would like your website to work offline (Service Worker), 
  // install and enable the @easy-webpack/config-offline package in webpack.config.js and uncomment the following code:
  /*
  const offline = await System.import('offline-plugin/runtime');
  offline.install();
  */
}

var firebase = require("firebase/app");
require("firebase/database");
var config = {
 
    apiKey: "AIzaSyBwDY6Zv9JjEgsCsO0BMBNrWn8zl_8i5E4",
    authDomain: "note-be10c.firebaseapp.com",
    databaseURL: "https://note-be10c.firebaseio.com",
    projectId: "note-be10c",
    storageBucket: "note-be10c.appspot.com",
    messagingSenderId: "509386561566"

};
firebase.initializeApp(config);

console.log(process.env);
