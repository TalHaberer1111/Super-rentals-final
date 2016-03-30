import Ember from 'ember';

export default Ember.Component.extend({
  addNewCity: false,
  actions: {
    cityFormShow() {
      this.set('addNewCity', true);
    },
    save7() {
      var params = {
        name: this.get('name'),
        country: this.get('country'),
      };
      this.set('addNewCity', false);
      this.sendAction('save8', params);
    }
  }
});
