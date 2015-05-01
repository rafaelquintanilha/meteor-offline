// Global subsmanager to handle caching when startup and after when any change occurs
subs = new SubsManager();

Meteor.startup(function () {
	// Terrible by the point of view of scaling
	subs.subscribe("numbers");
	subs.subscribe("offlineNumbers");
});