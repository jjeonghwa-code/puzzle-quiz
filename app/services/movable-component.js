import Ember from 'ember';
import { task } from 'ember-concurrency';

export default Ember.Service.extend({
  targets: null,

  movers: null,

  registerTarget(target) {
    return this.get('targets').pushObject(target);
  },

  unregisterTarget(target) {
    this.get('targets').removeObject(target);
  },

  registerMover(mover) {
    this.initMover(mover);
    return this.get('movers').pushObject(mover);
  },

  unregisterMover(mover) {
    this.get('movers').removeObject(mover);
  },

  initMover(mover) {
    let { sourceName, targetName } = mover;
    let targets = this.get('targets');
    let source = targets.findBy('name', sourceName);
    let target = targets.findBy('name', targetName);

    mover.hide();
    target.hide();
    source.show();
    mover.moveTo(source.getElementPosition());
  },

  startMove(name, duration) {
    return this.get('moveComponent').perform(name, duration);
  },

  moveComponent: task(function* (name, duration) {
    let mover = this.get('movers').findBy('name', name);
    let { sourceName, targetName } = mover;
    let targets = this.get('targets');
    let source = targets.findBy('name', sourceName);
    let target = targets.findBy('name', targetName);

    mover.show();
    source.hide();
    yield mover.moveTo(target.getElementPosition(), { duration });
    target.show();
    mover.hide();
  }),

  init() {
    this._super(...arguments);

    this.setProperties({
      targets: [],
      movers: [],
    });
  },
});
