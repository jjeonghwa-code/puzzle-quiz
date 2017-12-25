import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: [ 'showBackground::no-background' ],

  letter: null,

  showBackground: true,
});
