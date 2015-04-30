Template.numbers.onCreated(function() {
  var self = this;
  if ( Meteor.status().connected ) {
    self.autorun(function () {
      self.subscribe("numbers");
    });
  }
});

Template.offlineNumbers.onCreated(function() {
  var self = this;
  if ( Meteor.status().connected ) {
    self.autorun(function () {
      self.subscribe("offlineNumbers");
    });
  }
});

Template.numbers.helpers({
  numbers: function () {
    return Numbers.find({});
  }
});

Template.numbers.events({
  "click p": function () {
    Numbers.remove(this._id);
  },

  "click #insertNumber": function() {
    var maximum = 1000;
    var minimum = 0;
    var random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return Numbers.insert({number: random});
  }
});

Template.offlineNumbers.helpers({
  numbers: function () {
    var n = OfflineNumbers.find({}).fetch();
    return OfflineNumbers.find({});
  },

  offline: function() {
    return !Meteor.status().connected;
  }
});

Template.offlineNumbers.events({
  "click p": function () {
    OfflineNumbers.remove(this._id);
  },

  "click #insertOfflineNumber": function() {
    var maximum = 1000;
    var minimum = 0;
    var random = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return OfflineNumbers.insert({number: random});
  }
});

Template.header.helpers({
  status: function() {
    return Meteor.status().status;
  }
})

Template.header.events({
  "click #connect": function() {
    return Meteor.reconnect();
  },

  "click #disconnect": function() {
    return Meteor.disconnect();
  }
});