
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

$.index.open();
