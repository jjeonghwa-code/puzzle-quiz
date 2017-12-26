import Ember from 'ember';

export default Ember.Component.extend({
  letters: null,

  correctAnswer: null,

  onGoToPrize() {},

  currentAnswer: Ember.computed('letters.[]', function() {
    return this.getWithDefault('letters', []).join('');
  }).readOnly(),

  isAnswerCorrect: Ember.computed('correctAnswer', 'currentAnswer', function() {
    let correctAnswer = this.get('correctAnswer');

    return correctAnswer.toLowerCase() === this.get('currentAnswer');
  }).readOnly(),
});
