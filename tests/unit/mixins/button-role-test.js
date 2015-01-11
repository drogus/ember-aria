import Ember from 'ember';
import ButtonRole from 'ember-aria/mixins/button-role';

module('ButtonRole Mixin');

test('button role mixin sets ariaPressed based on pressed property', function() {
    expect(3);

    var emberObject = Ember.Object.createWithMixins(ButtonRole);

    ok(!emberObject.get('ariaPressed'), 'ariaPressed should be false by default');
    ok(emberObject.get('attributeBindings').indexOf('ariaPressed:aria-pressed') !== -1,
        'attributeBindings should include ariaPressed');

    emberObject.set('pressed', true);

    ok(emberObject.get('ariaPressed'), 'ariaPressed should be set to true if pressed is also true');
});

test('button mixin sets role as button', function() {
    expect(2);

    var emberObject = Ember.Object.createWithMixins(ButtonRole);

    equal(emberObject.get('role'), 'button', 'role should be set to button');
    ok(emberObject.get('attributeBindings').indexOf('role') !== -1,
        'attributeBindings should include role');
});
