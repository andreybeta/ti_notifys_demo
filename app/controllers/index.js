const FirebaseCore = require('firebase.core');
const fcm = require('firebase.cloudmessaging');
const FirebaseAnalytics = require('firebase.analytics');


$.image.image = Ti.App.Android.R.drawable.btn_more_192;

function startAnalytics() {

	// Configure Firebase
	// FirebaseCore.configure({
	// 	APIKey: "AIzaSyCPp5TS9ckTTbnJwowL9wWmiMCYm1QA8-w",
	// 	googleAppID: 'aesthetic-guild-226115',
	// 	GCMSenderID: '749426280330',
	// 	projectID: "test-b6ca1",
	// 	storageBucket: "test-b6ca1.appspot.com",
	// 	applicationID: "1:8903486192:android:c6fb5b9095fccdb8"
	// });

	FirebaseCore.configure();
	// Get the App Instance ID
	// Ti.API.info('App Instance ID: ' + JSON.stringify(FirebaseAnalytics));

	// Log to the Firebase console
	FirebaseAnalytics.log('My_event', {
		'Custom_method': 'arrancó la vuelta'
	});

}

function startPerformance() {
	// require('/notifications').setNotifications();


	// Configure core module (required for all Firebase modules)
	FirebaseCore.configure({
		APIKey: "AIzaSyCPp5TS9ckTTbnJwowL9wWmiMCYm1QA8-w",
		googleAppID: 'aesthetic-guild-226115',
		GCMSenderID: '749426280330',
		projectID: "test-b6ca1",
		storageBucket: "test-b6ca1.appspot.com",
		applicationID: "1:8903486192:android:c6fb5b9095fccdb8"
	});

	// Called when the Firebase token is ready
	fcm.addEventListener('didRefreshRegistrationToken', onToken);

	// Called when direct messages arrive. Note that these are different from push notifications
	fcm.addEventListener('didReceiveMessage', onMessage);

	fcm.registerForPushNotifications();

	function onToken(e) {
		Ti.API.info('Token', e.fcmToken);
	}

	function onMessage(e) {
		Ti.API.info('Message', JSON.stringify(e.message));
	}

	// Android: For configuring custom sounds and importance for the generated system 
	// notifications when app is in the background
	fcm.createNotificationChannel({
		sound: 'warn_sound',
		channelId: 'default',
		channelName: 'General Notifications',
		importance: 'high' //will pop in from the top and make a sound
	});

	// check if token is already available
	if (fcm.fcmToken !== null) {
		Ti.API.info('FCM-Token', fcm.fcmToken);
	} else {
		Ti.API.info('Token is empty. Waiting for the token callback ...');
	}

	// subscribe to topic
	// fcm.subscribeToTopic('testTopic');
}

function doClick(e) {

	startAnalytics();
	startPerformance();
	var toast = Ti.UI.createNotification({
		message: "Loading...",
		duration: Ti.UI.NOTIFICATION_DURATION_LONG,
		gravity: Titanium.UI.Android.GRAVITY_FILL_HORIZONTAL | Titanium.UI.Android.GRAVITY_BOTTOM
	});
	toast.show();




}

$.index.open();
