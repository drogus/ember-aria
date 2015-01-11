import Ember from 'ember';

export default Ember.Mixin.create({
  ariaDisabled: Ember.computed.alias('disabled'),

  attributeBindings: ['ariaDisabled:aria-disabled']
});
