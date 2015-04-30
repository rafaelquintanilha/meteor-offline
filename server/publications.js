Meteor.publish('numbers', function() {
  return Numbers.find();
});

Meteor.publish('offlineNumbers', function() {
  return OfflineNumbers.find();
});