const FirebaseCore = require('firebase.core');
const Secrets = require('/secrets').firebaseConfig;

// const configObject = {
//     APIKey: "AIzaSyCPp5TS9ckTTbnJwowL9wWmiMCYm1QA8-w",
//     googleAppID: 'aesthetic-guild-226115',
//     GCMSenderID: '749426280330',
//     projectID: "test-b6ca1",
//     storageBucket: "test-b6ca1.appspot.com",
//     applicationID: "1:8903486192:android:c6fb5b9095fccdb8"
// }

const configObject = Secrets;

function getApiKey() {
    return configObject.APIKey;
}

function getGoogleAppID() {
    return configObject.googleAppID;
}

function getGCMSenderID() {
    return configObject.GCMSenderID;
}

function getProjectID() {
    return configObject.projectID;
}

function getStorageBucket() {
    return configObject.storageBucket;
}

function getApplicationID() {
    return configObject.applicationID;
}

exports.firebaseConfig = function () {
    console.info('Firebase configuration: ', configObject);
    FirebaseCore.configure(configObject);
}

module.exports = {
    getApiKey,
    getGoogleAppID,
    getGCMSenderID,
    getProjectID,
    getStorageBucket,
    getApplicationID
}