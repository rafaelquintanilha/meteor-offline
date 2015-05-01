subs = new SubsManager();

Meteor.startup(function () {
	subs.subscribe("numbers");
	subs.subscribe("offlineNumbers");
});