import Ember from 'ember';

export default Ember.Route.extend({
  selectedLettersService: Ember.inject.service('selected-letters'),

  setupController(controller) {
    this._super(...arguments);

    controller.setProperties({
      correctAnswer: 'relax',
      letters: Ember.copy(this.get('selectedLettersService.selectedLetters')),
    });
  },

  actions: {
    goToPrize() {
      this.transitionTo('prize');
    },
  }
});
