import Ember from 'ember';
import DisabledMixin from 'ember-aria/mixins/disabled';

module('Disabled Mixin');

test('disabled mixin sets an aria-disabled property based on disabled property', function() {
    expect(3);

    var emberObject = Ember.Object.createWithMixins(DisabledMixin);

    ok(!emberObject.get('ariaDisabled'), 'ariaDisabled is false by default');
    deepEqual(emberObject.get('attributeBindings'), ['ariaDisabled:aria-disabled'], 'attributeBindings include ariaDisabled');

    emberObject.set('disabled', true);

    ok(emberObject.get('ariaDisabled'), 'ariaDisabled is set to true if disabled is also true');
});
