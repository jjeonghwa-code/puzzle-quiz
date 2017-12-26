import Ember from 'ember';

export default Ember.Component.extend({
  currentAnswer: null,

  correctAnswer: null,

  highlightedLetter: null,

  isAnswerCorrect: false,

  letterIndices: Ember.computed('correctAnswer', function() {
    return [ ...this.getWithDefault('correctAnswer', '') ].map((letter, index) => {
      return index.toString();
    });
  }).readOnly(),

  correctAnswerLetters: Ember.computed('correctAnswer', function() {
    return [ ...this.getWithDefault('correctAnswer', '') ];
  }).readOnly(),

  currentAnswerLetters: Ember.computed('currentAnswer', function() {
    return [ ...this.getWithDefault('currentAnswer', '') ];
  }).readOnly(),

  highlightedLetterIndex: Ember.computed('correctAnswer', 'highlightedLetter', function() {
    let highlightedLetter = this.get('highlightedLetter');
    if (Ember.isNone(highlightedLetter)) {
      return null;
    }

    let correctAnswer = this.getWithDefault('correctAnswer', '').toLowerCase();
    return correctAnswer.indexOf(highlightedLetter).toString();
  }).readOnly(),

  status: Ember.computed('isAnswerCorrect', 'currentAnswer', 'correctAnswer', function() {
    if (this.get('isAnswerCorrect')) {
      return 'success';
    }

    if (this.get('currentAnswer.length') === this.get('correctAnswer.length')) {
      return 'error';
    }

    return null;
  }).readOnly(),
});
