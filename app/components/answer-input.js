import Ember from 'ember';
import isEditableChar from 'puzzle-quiz/utils/is-editable-char';

export default Ember.Component.extend({
  correctAnswer: null,

  currentAnswer: Ember.computed({
    get() {
      return '';
    },

    set(key, value) {
      this.get('onAnswerChanged')(value);

      return value;
    }
  }),

  isEditableChar,

  actions: {
    characterPressed(key) {
      let { currentAnswer, correctAnswer } = this.getProperties('currentAnswer', 'correctAnswer');
      if (currentAnswer.length >= correctAnswer.length) {
        return;
      }

      currentAnswer += key;

      // Add non-editable characters to the end of the answer
      // so the next operation will be in the right place.
      let nextCorrectChar;
      while (currentAnswer.length <= correctAnswer.length &&
        !this.isEditableChar(nextCorrectChar = correctAnswer[currentAnswer.length])) {
        currentAnswer += nextCorrectChar;
      }

      this.set('currentAnswer', currentAnswer);
    },

    deleteCharacter() {
      let { currentAnswer, correctAnswer } = this.getProperties('currentAnswer', 'correctAnswer');
      currentAnswer = currentAnswer.slice(0, -1);

      // Remove non-editable characters from the end of the answer
      // so the next operation will be in the right place.
      let nextCorrectChar;
      while (!this.isEditableChar(correctAnswer[currentAnswer.length])) {
        currentAnswer = currentAnswer.slice(0, -1);
      }

      this.set('currentAnswer', currentAnswer);
    },
  }
});
