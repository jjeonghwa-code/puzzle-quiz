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

      const nonEditableChars = ' -';
      if (nonEditableChars.indexOf(correctAnswerLetter) > -1) {
        letter = correctAnswerLetter;
        isEditable = false;
      }

      return {
        letter,
        isEditable,
      }
    });
  }).readOnly(),

  actions: {
    keyPressed(key) {
      this.set('currentAnswer', this.get('currentAnswer') + key);
    },
  }
});
