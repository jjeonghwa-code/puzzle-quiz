import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        number: 1,
        text: 'Current favourite TV series',
        answer: 'Agent Carter',
      }, {
        number: 2,
        text: 'Comic series featuring mutants',
        answer: 'X-Men',
      }
    ];
  },

  afterModel(model) {
    this._super(...arguments);

    // TODO: #finish re-enable this.
    // this.transitionTo('questions.question', 1);
  },
});
