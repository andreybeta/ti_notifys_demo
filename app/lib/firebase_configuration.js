const FirebaseCore = require('firebase.core');
const Secrets = require('/secrets').firebaseConfig;



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