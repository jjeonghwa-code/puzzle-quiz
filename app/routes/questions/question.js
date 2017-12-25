import Ember from 'ember';

export default Ember.Route.extend({
  model({ questionNumber }) {
    questionNumber = parseInt(questionNumber);
    let questions = this.modelFor('questions');

    return {
      questionNumber,
      questionsCount: questions.length,
      question: questions.findBy('number', questionNumber),
      nextQuestion: questions.findBy('number', questionNumber + 1) || null,
    };
  },

  setupController(controller, model) {
    this._super(...arguments);

    controller.setProperties(Ember.merge({
      hasCorrectAnswer: false,
    }, model));
  },

  actions: {
    goToNextQuestion() {
      this.transitionTo('questions.question', this.get('controller.nextQuestion.number'));
    },

    goToAnagram() {
      this.transitionTo('anagram');
    },
  }
});
