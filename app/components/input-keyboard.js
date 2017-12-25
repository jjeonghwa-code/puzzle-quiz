import Ember from 'ember';

export default Ember.Component.extend({
  onKeyPressed() {},

  letterRows: Ember.computed(function() {
    return [
      [ ...'qwertyuiop' ],
      [ ...'asdfghjkl' ],
      [ ...'zxcvbnm' ],
    ];
  }),
});
