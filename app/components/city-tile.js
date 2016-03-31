import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    delete(city) {
      if (confirm('Are you sure you want to delete this city?')) {
        this.sendAction('destroyCity', city);
      }
    }
  }
});
