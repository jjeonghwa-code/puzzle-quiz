import Ember from 'ember';
import isEditableChar from 'puzzle-quiz/utils/is-editable-char';

export default Ember.Component.extend({
  tagName: '',

  correctAnswerLetter: null,

  currentAnswerLetter: null,

  highlighted: false,

  status: null,

  isEditableChar,

  letter: Ember.computed('correctAnswerLetter', 'currentAnswerLetter', function() {
    if (!this.get('isEditable')) {
      return this.get('correctAnswerLetter');
    }

    return this.getWithDefault('currentAnswerLetter', '');
  }),

  isEditable: Ember.computed('correctAnswerLetter', function() {
    return this.isEditableChar(this.getWithDefault('correctAnswerLetter', ''));
  }).readOnly(),
});
