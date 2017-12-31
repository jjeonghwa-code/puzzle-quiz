import Ember from 'ember';
import { task } from 'ember-concurrency';

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

  completeQuestion: task(function* () {
    // Add the selected letter for this question to the results.
    yield this.get('selectedLetters').add(this.get('question.selectLetter'));

    // Let the outside world handle whatever needs to happen next.
    this.get('onGoToNextQuestion')();
  }).drop(),
});
