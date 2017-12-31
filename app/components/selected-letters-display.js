import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'animate-position' ],
  classNameBindings: [ 'isHidden:hidden' ],

  selectedLettersService: Ember.inject.service('selected-letters'),

  selectedLetters: Ember.computed.readOnly('selectedLettersService.selectedLetters'),

  isHidden: Ember.computed.not('selectedLettersService.showSelectedLetters'),
});
