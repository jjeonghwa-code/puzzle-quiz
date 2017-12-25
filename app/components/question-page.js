import Ember from 'ember';

export default Ember.Component.extend({
  question: null,

  nextQuestion: null,

  questionNumber: null,

  questionsCount: null,

  currentAnswer: null,

  isAnswerCorrect: Ember.computed('question.answer', 'currentAnswer', function() {
    let correctAnswer = this.get('question.answer');

    return correctAnswer.toLowerCase() === this.get('currentAnswer');
  }).readOnly(),
});
