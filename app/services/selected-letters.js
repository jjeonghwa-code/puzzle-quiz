import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Service.extend({
  showSelectedLetters: false,

  selectedLetters: Ember.computed(function() {
    return [];
  }).readOnly(),

  addSelectedLetter(letter, { flashSelectedLetters = true}) {
    this.get('selectedLetters').pushObject(letter);

    if (flashSelectedLetters) {
      this.get('flashSelectedLetters').perform();
    }
  },

  flashSelectedLetters: task(function* () {
    this.set('showSelectedLetters', true);
    yield timeout(4000);
    this.set('showSelectedLetters', false);
  }).restartable(),

  clear() {
    this.get('selectedLetters').clear();
  },
});
