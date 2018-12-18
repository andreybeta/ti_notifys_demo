
var customView = Ti.Android.createRemoteViews({
	layoutId: Ti.App.Android.R.layout.customview
});

// Reference elements in the layout by prefixing the IDs with 'Ti.App.Android.R.id'
customView.setTextViewText(Ti.App.Android.R.id.message, "Update available!");

customView.setImageViewResource(Ti.App.Android.R.id.icon, Ti.App.Android.R.drawable.appicon);
customView.setTextViewText(Ti.App.Android.R.id.info, "test")


var notification = Titanium.Android.createNotification({
	icon: Ti.App.Android.R.drawable.disclosure_192,
	contentView: customView

})

$.image.image = Ti.App.Android.R.drawable.btn_more_192;


function doClick(e) {


	var toast = Ti.UI.createNotification({
		message: "customview" + JSON.stringify(Ti.App.Android.R),
		duration: Ti.UI.NOTIFICATION_DURATION_LONG,
		gravity: Titanium.UI.Android.GRAVITY_FILL_HORIZONTAL | Titanium.UI.Android.GRAVITY_BOTTOM
	});
	toast.show();

	// Send the notification.
	Titanium.Android.NotificationManager.notify(1, notification);
}

var btn1 = Ti.UI.createButton({
	title: '1) Add Big Text Notification'
});

btn1.addEventListener('click', function (e) {
	var style = Titanium.Android.createBigTextStyle({
		bigText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		bigContentTitle: "Title for big text",
		summaryText: "Summary for big text"
	});

	// Create big text style the notification
	var notification = Titanium.Android.createNotification({
		contentTitle: 'Something Happened',
		contentText: 'Click to return to the application.',
		style: style,
		time: Date.now()
	});

	// Send the notification.
	Titanium.Android.NotificationManager.notify(1, notification);
});

$.index.add(btn1);

//************************

var btn2 = Ti.UI.createButton({
	title: '2) Add Big Text Notification'
});

btn2.addEventListener('click', function (e) {

	var style = Ti.Android.createBigTextStyle();
	style.setBigText("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
	style.setBigContentTitle('big title');
	style.setSummaryText('big summmary');

	// Create big text style the notification
	var notification = Ti.Android.createNotification({
		contentTitle: 'Something Happened',
		contentText: 'Click to return to the application.',
		time: Date.now()
	});

	notification.setStyle(style);

	// Send the notification.
	Titanium.Android.NotificationManager.notify(2, notification);
});

$.index.add(btn2);

var btn3 = Ti.UI.createButton({
	title: '3) Add Big Image Notification'
});

btn3.addEventListener('click', function (e) {
	// For test: 
	// * Place the image http://codeversed.com/androidifysteve.png to corresponding folder. 
	// * For example: Resources/android/images/res-xhdpi/  


	// Create big picture style the notification
	var notification = Ti.Android.createNotification({
		icon: Ti.App.Android.R.drawable.notificationicon,
		contentTitle: 'Something Happened',
		contentText: 'Click to return to the application.',
		style: Ti.Android.createBigPictureStyle({
			//bigPicture: "/images/androidifysteve.png",	    	
			// bigPicture: 'http://www.notetab.com/images/More-free-time-thanks-to-NoteTab.jpg',
			bigPicture: Ti.App.Android.R.drawable.notificationicon,
			bigContentTitle: "Title for big picture",
			summaryText: "Summary for big picture"
		}),
		time: Date.now()
	});

	// Send the notification.
	Titanium.Android.NotificationManager.notify(3, notification);
});

$.index.add(btn3);

var btn4 = Ti.UI.createButton({
	title: '4) Add Big Image Notification'
});

btn4.addEventListener('click', function () {

	var intent = Ti.Android.createIntent({
		action: Ti.Android.ACTION_MAIN,
		// Substitute the correct class name for your application
		className: 'com.andreybeta.notifysdemo.MobijobApplication',
		// Substitue the correct package name for your application
		packageName: 'NotifysDemoApplication'
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
		contentText: 'Click to return to the application.',
		category: Titanium.Android.CATEGORY_MONKEY,
		contentIntent: pending,

	});

	notification.addAction(Ti.App.Android.R.drawable.appicon, "Tomar Job", pending);

	var toast = Ti.UI.createNotification({
		message: "Cargando...",
		duration: Ti.UI.NOTIFICATION_DURATION_LONG,
		gravity: Titanium.UI.Android.GRAVITY_FILL_HORIZONTAL | Titanium.UI.Android.GRAVITY_BOTTOM
	});
	toast.show();

	// Send the notification.
	Titanium.Android.NotificationManager.notify(1, notification);
})

$.index.add(btn4);

$.index.open();
