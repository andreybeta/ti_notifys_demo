var intent = Ti.Android.createIntent({
	action: Ti.Android.ACTION_MAIN,
	// Substitute the correct class name for your application
	className: 'com.andreybeta.notifysdemo.NotifysdemoActivity',
	// Substitue the correct package name for your application
	packageName: 'com.andreybeta.notifysdemo'
});

intent.flags |= Ti.Android.FLAG_ACTIVITY_CLEAR_TOP | Ti.Android.FLAG_ACTIVITY_NEW_TASK;
intent.addCategory(Ti.Android.CATEGORY_LAUNCHER);

// Create a PendingIntent to tie together the Activity and Intent
var pending = Titanium.Android.createPendingIntent({
	intent: intent,
	flags: Titanium.Android.FLAG_UPDATE_CURRENT
});

// Create the notification
var notification = Titanium.Android.createNotification({
	// icon is passed as an Android resource ID -- see Ti.App.Android.R.
	icon: Ti.App.Android.R.drawable.appicon,
	contentTitle: 'Something Happened',
	contentText : 'Click to return to the application.',
	category: Titanium.Android.CATEGORY_MONKEY,
	contentIntent: pending,

});

notification.addAction(Ti.App.Android.R.drawable.appicon, "Tomar Job", pending);

function doClick(e) {
	var toast = Ti.UI.createNotification({
    message:"Cargando...",
		duration: Ti.UI.NOTIFICATION_DURATION_LONG,
		gravity: Titanium.UI.Android.GRAVITY_FILL_HORIZONTAL|Titanium.UI.Android.GRAVITY_BOTTOM
	});
	toast.show();

	// Send the notification.
	Titanium.Android.NotificationManager.notify(1, notification);
}

$.index.open();
