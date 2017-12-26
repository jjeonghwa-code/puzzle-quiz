import Ember from 'ember';

export default Ember.Route.extend({
  model({ questionNumber }) {
    questionNumber = parseInt(questionNumber);
    let questions = this.modelFor('questions');

    return {
      question: questions.findBy('number', questionNumber),
      nextQuestion: questions.findBy('number', questionNumber + 1) || null,
      questionNumber,
      questionsCount: questions.length,
      currentAnswer: '',
    };
  },

  setupController(controller, model) {
    this._super(...arguments);

    controller.setProperties(Ember.merge({
      hasCorrectAnswer: false,
    }, model));
  },

  actions: {
    goToNextStep() {
      let nextQuestionNumber = this.get('controller.nextQuestion.number') || null;

      if (nextQuestionNumber) {
        this.transitionTo('questions.question', nextQuestionNumber);
        return;
      }

      this.transitionTo('anagram');
    },
  }
});
