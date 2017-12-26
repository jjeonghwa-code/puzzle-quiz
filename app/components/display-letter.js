import Ember from 'ember';

export default Ember.Component.extend({
  classNames: [ 'animate-background' ],
  classNameBindings: [
    'showBackground::no-background',
    'isSuccess:success',
    'isError:error'
  ],

  letter: null,

  showBackground: true,

  status: null,

  isSuccess: Ember.computed.equal('status', 'success'),
  isError: Ember.computed.equal('status', 'error'),
});
