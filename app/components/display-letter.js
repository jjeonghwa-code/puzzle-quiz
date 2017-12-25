import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isEditable::blank'],

  letter: null,

  isEditable: true,
});
