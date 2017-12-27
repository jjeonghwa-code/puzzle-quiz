import Ember from 'ember';

export default Ember.Service.extend(Ember.Evented, {
  selectedLetters: Ember.computed(function() {
    return [];
  }).readOnly(),

  addSelectedLetter(letter) {
    this.get('selectedLetters').pushObject(letter);
    this.trigger('letterAdded');
  },

  clear() {
    this.get('selectedLetters').clear();
  },
});
