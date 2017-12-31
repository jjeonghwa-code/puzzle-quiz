import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Service.extend({
  movableComponentService: Ember.inject.service('movable-component'),

  showSelectedLetters: false,

  selectedLetters: Ember.computed(function() {
    return [];
  }).readOnly(),

  add(letter) {
    return this.get('addLetter').perform(letter);
  },

  clear() {
    this.get('selectedLetters').clear();
  },

  addLetter: task(function* (letter) {
    // Show the letters bar.
    this.set('showSelectedLetters', true);

    // Move the selected letter to the letters bar.
    yield this.get('movableComponentService').startMove('selected-letter', 2000);

    // Hide the letters bar again.
    this.set('showSelectedLetters', false);

    this.get('selectedLetters').pushObject(letter);
  }),
});
