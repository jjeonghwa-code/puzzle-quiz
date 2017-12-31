import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [ 'isHidden:hidden' ],

  movableComponentService: Ember.inject.service('movable-component'),

  name: null,

  registryToken: null,

  isHidden: false,

  publicApi: Ember.computed(function() {
    let api = this.getProperties('name');

    api.show = () => this.setHidden(false);
    api.hide = () => this.setHidden(true);
    api.getElementPosition = () => {
      return this.get('element').getBoundingClientRect();
    };

    return api;
  }).readOnly(),

  setHidden(hidden) {
    Ember.run.scheduleOnce('afterRender', () => {
      if (this.get('isDestroyed') || this.get('isDestroying')) {
        return;
      }

      this.set('isHidden', hidden);
    });
  },

  init() {
    this._super(...arguments);

    let target = this.get('publicApi');
    let registryToken = this.get('movableComponentService').registerTarget(target);
    this.set('registryToken', registryToken);
  },

  willDestroyElement() {
    this.get('movableComponentService').unregisterTarget(this.get('registryToken'));
    this.set('registryToken', null);

    this._super(...arguments);
  },
});
