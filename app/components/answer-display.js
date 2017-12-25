import Ember from 'ember';
import isEditableChar from 'puzzle-quiz/utils/is-editable-char';

export default Ember.Component.extend({
  currentAnswer: null,

  correctAnswer: null,

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

  isEditableChar,
});
