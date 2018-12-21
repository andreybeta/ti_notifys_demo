const FirebaseCore = require('firebase.core');
const firebase_configuration = require('/firebase_configuration');
const fcm = require('firebase.cloudmessaging');

exports.setNotifications = function () {
    firebase_configuration.firebaseConfig();
    fcm.registerForPushNotifications();
    console.info('[fcmToken: ]', fcm.fcmToken);

    fcm.createNotificationChannel({
        sound: 'warn_sound',
        channelId: 'general',
        channelName: 'General Notifications',
        importance: 'high'
    });

    if (fcm.fcmToken) {
        Ti.API.info('FCM-Token', fcm.fcmToken);
    } else {
        Ti.API.info('Token is empty. Waiting for the token callback ...');
    }



    fcm.addEventListener('didRefreshRegistrationToken', function (e) {
        Ti.API.info('Token', e.fcmToken);
    });

    // Called when direct messages arrive. Note that these are different from push notifications.
    fcm.addEventListener('didReceiveMessage', function (e) {
        Ti.API.info('Message', e.message);

    });
}


