import Ember from 'ember';

export default Ember.Component.extend({
  correctAnswer: null,

  currentAnswer: '',

  currentAnswerLetterInfos: Ember.computed('correctAnswer', 'currentAnswer', function() {
    let correctAnswer = this.getWithDefault('correctAnswer', '');
    let currentAnswer = this.getWithDefault('currentAnswer', '');

    let correctAnswerLetters = [ ...correctAnswer ];
    let currentAnswerLetters = [ ...currentAnswer ];

    return correctAnswerLetters.map((correctAnswerLetter, index) => {
      let letter = currentAnswerLetters[index] || '';
      let isEditable = true;

      if (!this.isEditableChar(correctAnswerLetter)) {
        letter = correctAnswerLetter;
        isEditable = false;
      }

      return {
        letter,
        isEditable,
      }
    });
  }).readOnly(),

  isEditableChar(char) {
    const nonEditableChars = ' -';
    return nonEditableChars.indexOf(char) === -1;
  },

  actions: {
    characterPressed(key) {
      let { currentAnswer, correctAnswer } = this.getProperties('currentAnswer', 'correctAnswer');
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
