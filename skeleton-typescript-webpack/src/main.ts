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
  //   apiKey: "AIzaSyC_fEKlapEbfm3yBtnnzttuqF5IOykQURQ",
  // authDomain: "admincp-skeleton-db.firebaseapp.com",
  // databaseURL: "https://admincp-skeleton-db.firebaseio.com",
  // storageBucket: "admincp-skeleton-db.appspot.com",
  // messagingSenderId: "593494488415"
   apiKey: "AIzaSyDd0DThtm4RpjGeSk51-h9Gw5lS8KgQ6EM",
    authDomain: "vuejs-4456b.firebaseapp.com",
    databaseURL: "https://vuejs-4456b.firebaseio.com",
    storageBucket: "vuejs-4456b.appspot.com",
    messagingSenderId: "626245802813"
};
firebase.initializeApp(config);

console.log(process.env);
