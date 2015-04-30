Meteor.startup(function () {
	Meteor.subscribe("numbers");
	Meteor.subscribe("offlineNumbers");
});