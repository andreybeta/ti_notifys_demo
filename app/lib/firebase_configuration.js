const FirebaseCore = require('firebase.core');
const configObject = {
    APIKey: "AIzaSyCPp5TS9ckTTbnJwowL9wWmiMCYm1QA8-w",
    googleAppID: 'aesthetic-guild-226115',
    GCMSenderID: '749426280330',
    projectID: "test-b6ca1",
    storageBucket: "test-b6ca1.appspot.com",
    applicationID: "1:8903486192:android:c6fb5b9095fccdb8"
}

exports.firebaseConfig = function () {
    console.info('Firebase configuration: ', configObject);
    FirebaseCore.configure(configObject);
}