import Ember from 'ember';

export default Ember.Route.extend({
  model({ questionNumber }) {
    let questions = this.modelFor('questions');

    let question = questions.findBy('number', questionNumber);
    let nextQuestion = questions.findBy('number', parseInt(questionNumber) + 1 + '');

    return {
      question,
      nextQuestion,
    };
  },

  setupController(controller, { question, nextQuestion }) {
    this._super(...arguments);

    controller.setProperties({
      question,
      nextQuestion,
    });
  },

  actions: {
    goToNextQuestion() {
      this.transitionTo('questions.question', this.get('controller.nextQuestion.number'));
    },

    goToFinalStage() {
      // this.transitionTo('question.');
    },
  }
});
