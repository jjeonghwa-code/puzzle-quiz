import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        number: 1,
        text: 'TV series set in the 1940s (cruelly cancelled prematurely)',
        answer: 'Agent Carter',
        selectLetter: 'a',
      }, {
        number: 2,
        text: 'Comic series featuring mutants',
        answer: 'X-Men',
        selectLetter: 'x',
      }, {
        number: 3,
        text: 'Actor best known for his role as a young wizard',
        answer: 'Daniel Radcliffe',
        selectLetter: 'e',
      }, {
        number: 4,
        text: 'Treelike character with a limited vocabulary',
        answer: 'Groot',
        selectLetter: 'r',
      }, {
        number: 5,
        text: 'Cheeky magical mole-like creature that loves shiny things',
        answer: 'Niffler',
        selectLetter: 'l',
      }
    ];
  },

  afterModel() {
    this._super(...arguments);

    this.transitionTo('questions.question', 1);
  },
});
