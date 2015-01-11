import Ember from 'ember';
import DisabledState from 'ember-aria/mixins/disabled-state';

export default Ember.Mixin.create(DisabledState, {
  ariaPressed: Ember.computed.alias('pressed'),
  role: 'button',

  attributeBindings: ['ariaPressed:aria-pressed', 'role']
});
