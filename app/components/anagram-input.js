import Ember from 'ember';

export default Ember.Component.extend({
  letters: null,

  onLettersChanged() {},

  actions: {
    lettersChanged(updatedLetters) {
      this.get('onLettersChanged')(updatedLetters);
    },
  }
});
