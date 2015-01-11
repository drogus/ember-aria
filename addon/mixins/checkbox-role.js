import Ember from 'ember';
import DisabledState from 'ember-aria/mixins/disabled-state';

export default Ember.Mixin.create(DisabledState, {
  ariaChecked: Ember.computed.alias('checked'),
  role: 'checkbox',

  attributeBindings: ['ariaChecked:aria-checked', 'role']
});
