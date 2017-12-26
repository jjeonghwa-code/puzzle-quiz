import DisplayLetterComponent from './display-letter';
import SortableItemMixin from 'ember-sortable/mixins/sortable-item';
import Ember from 'ember';

export default DisplayLetterComponent.extend(SortableItemMixin, {
  model: Ember.computed.alias('letter'),
});
