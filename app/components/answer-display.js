import Ember from 'ember';
import isEditableChar from 'puzzle-quiz/utils/is-editable-char';

export default Ember.Component.extend({
  currentAnswer: null,

  correctAnswer: null,

  isAnswerCorrect: false,

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

  status: Ember.computed('isAnswerCorrect', 'currentAnswer', 'correctAnswer', function() {
    if (this.get('isAnswerCorrect')) {
      return 'success';
    }

    if (this.get('currentAnswer.length') === this.get('correctAnswer.length')) {
      return 'error';
    }

    return null;
  }).readOnly(),

  isEditableChar,
});
