import Ember from 'ember';

export default Ember.Route.extend({
  selectedLetters: Ember.inject.service(),

  model() {
    let questions = [
      {
        text: 'What day is today?',
        answer: 'New Year\'s Eve',
      }, {
        text: 'TV series set in the 1940s (cruelly cancelled prematurely)',
        answer: 'Agent Carter',
        selectLetter: 'a',
      }, {
        text: 'Most impressive building you\'ve ever seen',
        answer: 'Colosseum',
      }, {
        text: 'Comic series featuring mutants',
        answer: 'X-Men',
        selectLetter: 'x',
      }, {
        text: 'Best movie of the year',
        answer: 'Thor: Ragnarok',
      }, {
        text: 'Actor best known for his role as a young wizard',
        answer: 'Daniel Radcliffe',
        selectLetter: 'e',
      }, {
        text: 'Three-legged cat (cute but annoying)',
        answer: 'Jamie',
      }, {
        text: 'Treelike character with a limited vocabulary',
        answer: 'Groot',
        selectLetter: 'r',
      }, {
        text: 'Dream holiday destination',
        answer: 'Hawaii',
      }, {
        text: 'Cheeky magical mole-like creature that loves shiny things',
        answer: 'Niffler',
        selectLetter: 'l',
      }
    ];

    questions.forEach((question, index) => {
      question.number = index + 1;
    });

    return questions;
  },

  afterModel() {
    this._super(...arguments);

    this.get('selectedLetters').clear();

    this.transitionTo('questions.question', 1);
  },
});
