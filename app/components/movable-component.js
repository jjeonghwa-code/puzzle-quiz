import Ember from 'ember';
import { task, timeout } from 'ember-concurrency';

export default Ember.Component.extend({
  classNameBindings: [ 'isHidden:hidden' ],
  attributeBindings: [ 'style' ],

  movableComponentService: Ember.inject.service('movable-component'),

  name: null,

  sourceName: null,

  targetName: null,

  registryToken: null,

  isHidden: false,

  top: null,
  left: null,
  animationDuration: 0,

  style: Ember.computed('top', 'left', 'animationDuration', function() {
    let { top, left, animationDuration } = this.getProperties('top', 'left', 'animationDuration');

    let topStyle = `top: ${ top || 0 }px`;
    let leftStyle = `left: ${ left || 0 }px`;
    let transitionStyle = `transition: top left ${ (animationDuration || 0) / 1000 }s linear`;
    let style = [ topStyle, leftStyle, transitionStyle ].join(';');

    return Ember.String.htmlSafe(style);
  }).readOnly(),

  publicApi: Ember.computed(function() {
    let api = this.getProperties('name', 'sourceName', 'targetName');

    api.show = () => this.show();
    api.hide = () => this.hide();
    api.moveTo = (...args) => {
      return this.get('moveTo').perform(...args);
    };

    return api;
  }).readOnly(),

  show() {
    this.set('isHidden', false);
  },

  hide() {
    this.set('isHidden', true);
  },

  moveTo: task(function* (rect, { duration = 0 } = {}) {
    this.setProperties({
      animationDuration: duration,
      top: rect.top,
      left: rect.left,
    });

    yield timeout(duration);
  }).restartable(),

  didUpdateAttrs() {
    this._super(...arguments);

    this.get('movableComponentService').unregisterMover(this.get('registryToken'));
    this.set('registryToken', null);
  },

    didReceiveAttrs() {
    this._super(...arguments);

    let mover = this.get('publicApi');
    let registryToken = this.get('movableComponentService').registerMover(mover);
    this.set('registryToken', registryToken);
  },
});
