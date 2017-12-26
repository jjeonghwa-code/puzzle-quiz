import Ember from 'ember';

export default Ember.Component.extend({
  selectedLetters: Ember.inject.service(),

  question: null,

  nextQuestion: null,

  questionNumber: null,

  questionsCount: null,

  currentAnswer: null,

  onGoToNextQuestion() {},

  isAnswerCorrect: Ember.computed('question.answer', 'currentAnswer', function() {
    let correctAnswer = this.get('question.answer');

    return correctAnswer.toLowerCase() === this.get('currentAnswer');
  }).readOnly(),

  actions: {
    completeQuestion() {
      // Add the selected letter for this question to the results.
      this.get('selectedLetters').addSelectedLetter(this.get('question.selectLetter'));

      // Let the outside world handle whatever needs to happen next.
      this.get('onGoToNextQuestion')();
    },
  }
});
