import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        number: 1,
        text: 'Current favourite TV series',
        answer: 'Agent Carter',
        selectLetter: 'a',
      }, {
        number: 2,
        text: 'Comic series featuring mutants',
        answer: 'X-Men',
        selectLetter: 'x',
      }
    ];
  },

  afterModel() {
    this._super(...arguments);

    this.transitionTo('questions.question', 1);
  },
});
