import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    startQuiz() {
      this.transitionTo('questions');
    },
  }
});
