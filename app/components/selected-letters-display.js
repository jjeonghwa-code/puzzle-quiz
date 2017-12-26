import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
  classNames: [ 'animate-position' ],
  classNameBindings: [ 'isHidden:hidden' ],

  selectedLettersService: Ember.inject.service('selected-letters'),

  selectedLetters: Ember.computed.readOnly('selectedLettersService.selectedLetters'),

  isHidden: true,

  showTemporarily: task(function* () {
    this.set('isHidden', false);
    yield timeout(4000);
    this.set('isHidden', true);
  }).restartable(),

  init() {
    this._super(...arguments);
    this.get('selectedLettersService').on('letterAdded', () => this.get('showTemporarily').perform());
  },

  willDestroyElement() {
    this.get('selectedLettersService').off('letterAdded', () => this.get('showTemporarily').perform());
    this._super(...arguments);
  },
});
