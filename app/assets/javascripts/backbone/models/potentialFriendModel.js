App.PotentialFriendModel = Backbone.Model.extend({
  initialize: function() {
    console.log('New Friend Model');
  },
  urlRoot: '/users'
});
