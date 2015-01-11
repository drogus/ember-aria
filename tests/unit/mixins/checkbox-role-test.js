import Ember from 'ember';
import CheckboxRole from 'ember-aria/mixins/checkbox-role';

module('CheckboxRole Mixin');

test('checkbox role mixin sets ariaChecked based on checked property', function() {
    expect(3);

    var emberObject = Ember.Object.createWithMixins(CheckboxRole);

    ok(!emberObject.get('ariaChecked'), 'ariaChecked is false by default');
    ok(emberObject.get('attributeBindings').indexOf('ariaChecked:aria-checked') !== -1,
        'attributeBindings should include ariaChecked');

    emberObject.set('checked', true);

    ok(emberObject.get('ariaChecked'), 'ariaChecked is set to true if checked is also true');
});

test('checkbox sets role as checkbox', function() {
    expect(2);

    var emberObject = Ember.Object.createWithMixins(CheckboxRole);

    equal(emberObject.get('role'), 'checkbox', 'role should be set to checkbox');
    ok(emberObject.get('attributeBindings').indexOf('role') !== -1,
        'attributeBindings should include role');
});
