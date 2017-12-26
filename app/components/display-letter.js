import Ember from 'ember';
import layout from 'puzzle-quiz/templates/components/display-letter';
import podNames from 'ember-component-css/pod-names';

export default Ember.Component.extend({
  classNames: [
    podNames['display-letter'],
    'animate-background'
  ],
  classNameBindings: [
    'showBackground::no-background',
    'highlighted:highlighted',
    'isSuccess:success',
    'isError:error'
  ],

  layout,

  letter: null,

  showBackground: true,

  status: null,

  isSuccess: Ember.computed.equal('status', 'success').readOnly(),
  isError: Ember.computed.equal('status', 'error').readOnly(),
});
